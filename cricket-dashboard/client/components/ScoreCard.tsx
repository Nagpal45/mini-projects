import { Match } from "@/app/types";
import Image from "next/image";
// import { Socket } from "socket.io-client";

interface ScoreCardPanelProps {
    match: Match | undefined;
    // socket: Socket | null;
}


const ScoreCard = ({match} : ScoreCardPanelProps) => {
    const highlightText = (text:string) => {
        return text.replace(/(\d+ runs)|(\d+ run)|(Catch Drop)/gi, (match: string) => `<span>&nbsp;</span><b>${match}</b>`);
    };

    const currentRR = () => {
        const runs = match?.teamA.totalScore;
        const overs = match?.teamA.overs;
        if (overs === undefined || overs <= 0) {
            return "Overs must be greater than zero.";
        }
    
        const completedOvers = Math.floor(overs); 
        const balls = (overs - completedOvers) * 10; 
        const totalOvers = completedOvers + (balls / 6);
        const runRate = runs !== undefined ? runs / totalOvers : 0;
    
        return runRate.toFixed(2); 
    }
    

    return (
        <div className="w-5/12 h-full rounded-lg bg-gray-200/50 border-2 p-2 px-3 overflow-y-scroll">
            <div className="flex flex-row items-center gap-2">
                <Image src="/downArrow.svg" width={15} height={15} alt="down arrow" />
                <p>Scorecard</p>
            </div>
           <div className="rounded-lg mt-2 border-2">
                <div className="bg-gray-200 py-2 px-2 flex justify-end items-center">
                    <button className="text-blue-600 font-bold text-sm">View Full Score Card</button>
                </div>
                <div className="py-2 px-2 flex flex-row justify-center items-center gap-20 text-sm">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p>{match?.teamA.name}</p>
                        <Image src="/India.webp" width={50} height={50} alt="team1" className="rounded-2xl"/>
                        <div className="flex flex-col items-center justify-center border-2 px-2 py-1 rounded-lg">
                            <p>{match?.teamA.totalScore} / {match?.teamA.wickets}</p>
                            <p>Over {match?.teamA.overs.toFixed(1)}</p>
                        </div>
                    </div>
                    <p className="font-bold text-red-500 text-lg">vs</p>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p>{match?.teamB.name}</p>
                        <Image src="/Bangla.png" width={50} height={50} alt="team2" className="rounded-2xl"/>
                        <div className="flex flex-col items-center justify-center border-2 px-2 py-1 rounded-lg">
                            <p>{match?.teamB.totalScore} / {match?.teamB.wickets}</p>
                            <p>Over {match?.teamB.overs.toFixed(1)}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300 py-1.5 px-2 flex justify-center items-center text-sm">
                    <p className="font-bold">Current R/R : {currentRR()}</p>
                </div>
           </div>
           <table className="border-2 mt-2 w-full text-xs text-center">
           <colgroup>
                <col style={{width: "200px"}} />
            </colgroup>
            <thead className="bg-gray-300">
            <tr>
                <th>Batsman</th>
                <th>R</th>
                <th>B</th>
                <th>4s</th>
            </tr>
            </thead>
            <tbody>
            {[match?.inningStriker, match?.inningNonStriker].map((batsman, index) => (
                <tr key={index}>
                    <td>{batsman?.name}</td>
                    <td>{batsman?.runs}</td>
                    <td>{batsman?.ballsFaced}</td>
                    <td>{batsman?.fours}</td>
                </tr>
            ))}
            </tbody>
           </table>
           <table className="border-2 mt-2 w-full text-xs text-center">
           <colgroup>
                <col style={{width: "200px"}} />
            </colgroup>
            <thead className="bg-gray-300">
            <tr>
                <th>Bowler</th>
                <th>O</th>
                <th>M</th>
                <th>R</th>
                <th>W</th>
            </tr>
            </thead>
            <tbody>
            {match?.inningBowlers.slice(-2).map((bowler, index) => (
                <tr key={index}>
                    <td>{bowler?.name}</td>
                    <td>{bowler?.oversBowled?.toFixed(1)}</td>
                    <td>0</td>
                    <td>{bowler?.runsConceded}</td>
                    <td>{bowler?.wicketsTaken}</td>
                </tr>
            ))}
            </tbody>
           </table>
           <div className="border-2 mt-2 w-full text-xs text-center flex flex-row items-center justify-between py-1 px-2 font-semibold bg-gray-200/50 rounded-md">
                <p>{match?.ballbyball.length} balls</p>
                <div className="flex flex-row gap-1 items-center justify-center">
                    {
                        match?.runs.slice(0,10).map((run, index) => (
                            <div key={index} className="border-2 px-2 py-0.5 rounded-lg bg-gray-300">
                                <p>{run}</p>
                            </div>
                        ))
                    }
                </div>
           </div>
           <div className="border-2 mt-1 w-full text-xs text-center flex flex-row items-center gap-12 py-1.5 px-2 font-semibold bg-gray-200/50 rounded-md">
                <p>Extra</p>
                <p>11 (<i>b</i> <span className="font-normal">0</span>, <i>lb</i> <span className="font-normal">4</span>, <i>wd</i> <span className="font-normal">6</span>, <i>nb</i> <span className="font-normal">1</span>, <i>P</i> <span className="font-normal">0</span>)</p>
           </div>
           <div className="flex flex-row w-full mt-2 gap-1 text-sm">
                    <select className="h-[40px] w-full border-2 rounded-md px-2">
                        <option value="teamA">{match?.teamA.name}</option>
                        <option value="teamB">{match?.teamB.name}</option> 
                    </select>
                    <select className="h-[40px] w-full border-2 rounded-md px-2">
                        <option value="1">1</option>
                    </select>
           </div>
           <div className="flex flex-row w-full mt-1 gap-1 relative text-sm">
            <Image src="/search.svg" width={18} height={18} alt="down arrow" className="absolute top-[11px] left-2"/>
            <input placeholder="default size" className="w-full border-2 rounded-md h-[40px] px-2 pl-8" />
            <button className="bg-red-500 text-white px-4 border-2 rounded-md">X</button>
           </div>
           <div className="flex flex-col text-xs mt-2 gap-2">
            {match?.ballbyball.map((ball, index) => (
                <div key={index} className="flex flex-row items-center gap-5">
                    <p className={`rounded-full ${ball.runs >= 1 ? 'bg-green-200' : 'bg-gray-300'} w-[40px] h-[40px] flex items-center justify-center font-bold`}>{ball.runs}</p>
                    <p>{ball.ball.toFixed(1)}</p>
                    <p className="flex flex-wrap w-[61.5%]" dangerouslySetInnerHTML={{ __html: highlightText(ball.description)}}></p>
                    <Image src="/options.svg" width={20} height={20} alt="down arrow" className="cursor-pointer"/>
                </div>
            ))}
           </div>
        </div>
    )
}

export default ScoreCard;