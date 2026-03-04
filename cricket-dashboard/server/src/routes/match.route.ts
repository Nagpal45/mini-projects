import {Router} from "express";
import Match from "../models/Match";
import Team from "../models/Team";
import Player from "../models/Player";
import { io } from "../index";

const router = Router();

router.get("/", async (req, res) => {
    const latestMatch = await Match.find().sort({ createdAt: -1 }).limit(1);
    const id = latestMatch[0]._id;
    const teamA = await Team.findById(latestMatch[0].teamA);
    const teamB = await Team.findById(latestMatch[0].teamB);
    const inningBowlersIds = latestMatch[0].inningBowlers.slice(-2);
    const inningStrikerId = latestMatch[0].inningStriker;
    const inningNonStrikerId = latestMatch[0].inningNonStriker;
    const inningBowlers = await Player.find({ _id: { $in: inningBowlersIds } });
    const inningStriker = await Player.findById(inningStrikerId);
    const inningNonStriker = await Player.findById(inningNonStrikerId);
    const ballbyball = latestMatch[0].ballbyball.reverse();
    const runs = ballbyball.map((ball) => ball.runs);
    const teamAPlayers = await Player.find({ team: teamA?._id });
    const teamBPlayers = await Player.find({ team: teamB?._id });
    res.json({id, teamA, teamB, inningBowlers, ballbyball, runs, teamAPlayers, teamBPlayers, inningStriker, inningNonStriker});
});

router.put("/inningBowlers", async (req, res) => {
    const { bowlerId, matchId } = req.body;
    const match = await Match.findById(matchId);
    if(match){
        match.inningBowlers.push(bowlerId);
        await match.save();
        const inningBowlersUpdated = await Player.find({ _id: { $in: match.inningBowlers.slice(-2) } });
        io.emit("updateData", { inningBowlers: inningBowlersUpdated });
        res.json({ message: "Bowler added" });
    } else {
        res.status(404).json({ message: "Match not found" });
    }
}
);

router.put("/inningStriker", async (req, res) => {
    const { batsmanId, matchId } = req.body;
    const match = await Match.findById(matchId);
    if(match){
        match.inningStriker = batsmanId;
        await match.save();
        const striker = await Player.findById(batsmanId);
        io.emit("updateData", { inningStriker: striker });
        res.json({ message: "Striker updated" });
    } else {
        res.status(404).json({ message: "Match not found" });
    }
}
);

router.put("/inningNonStriker", async (req, res) => {
    const { batsmanId, matchId } = req.body;
    const match = await Match.findById(matchId);
    if(match){
        match.inningNonStriker = batsmanId;
        await match.save();
        const nonStriker = await Player.findById(batsmanId);
        io.emit("updateData", { inningNonStriker: nonStriker });
        res.json({ message: "Non Striker updated" });
    } else {
        res.status(404).json({ message: "Match not found" });
    }
}
);

router.put("/updateScore", async (req, res) => {
    const { matchId, run, batsmanId, bowlerId, teamId } = req.body;
    const match = await Match.findById(matchId);
    const batsman = await Player.findById(batsmanId);
    const bowler = await Player.findById(bowlerId);
    const batsmanName = batsman?.name;
    const bowlerName = bowler?.name;
    const team = await Team.findById(teamId);

    if(match){
        if(team){
            team.totalScore += run;
            if(team.overs % 1 === 0.6){
                team.overs = team.overs + 0.4;
            }
            team.overs = team.overs + 0.1;
            await team.save();
        }

        if(batsman){
            if(run === 4){
                batsman.fours += 1;
            }
            batsman.runs += run;
            batsman.ballsFaced += 1;
            await batsman.save();
        }

        if(bowler){
            bowler.runsConceded += run;
            if(bowler.oversBowled % 1 === 0.6){
                bowler.oversBowled = bowler.oversBowled + 0.4;
            }
            bowler.oversBowled = bowler.oversBowled + 0.1;
            await bowler.save();
            
            match.ballbyball.push({ ball: bowler.oversBowled, runs: run, description: `${bowlerName} to ${batsmanName}: ${run} runs` });
        }


        if(run % 2 !== 0 || (team && team.overs % 1 === 0.6)){
            const temp = match.inningStriker;
            match.inningStriker = match.inningNonStriker;
            match.inningNonStriker = temp;
        }

        await match.save();

        const ballbyball = match.ballbyball.reverse();
        const runs = ballbyball.map((ball) => ball.runs);
        const inningStriker = await Player.findById(match.inningStriker);
        const inningNonStriker = await Player.findById(match.inningNonStriker);
        const inningBowlers = await Player.find({ _id: { $in: match.inningBowlers.slice(-2) } });
        io.emit("updateData", { ballbyball, runs, inningStriker, inningNonStriker , inningBowlers, teamA: team });

        res.json({ message: "Score updated" });
    } else {
        res.status(404).json({ message: "Match not found" });
    }
}
);

router.post("/", async (req, res) => {
    const { teamA, teamB} = req.body;

    await Team.updateMany({}, { $set: { totalScore: 0, wickets: 0, overs: 0 } });
    await Player.updateMany({}, { $set: { runs: 0, ballsFaced: 0, wicketsTaken: 0, oversBowled: 0, runsConceded: 0, fours: 0 } });

    const match = new Match({
        teamA,
        teamB,
    });
    await match.save();
    res.status(201).json({ message: "Match created" });
    }
);

export default router;