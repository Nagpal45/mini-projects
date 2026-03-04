import { Router } from 'express';
import Team from '../models/Team';

const router = Router();

router.get('/', async (req, res) => {
    const teams = await Team.find({});
    res.json(teams);
});

router.post('/', async (req, res) => {
    const { name } = req.body;
    try{
        const team = new Team({ name });
        await team.save();
        res.status(201).json({teamID: team._id});
    }catch(err){
        res.status(500).json({message: "Internal Server Error"});
    }
});

export default router;


