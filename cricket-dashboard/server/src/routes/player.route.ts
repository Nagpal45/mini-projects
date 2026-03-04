import { Router } from 'express';
import Player from '../models/Player';

const router = Router();

router.get('/',  async(req, res) => {
    const players = await Player.find({});
    res.status(200).json(players);
});

router.post('/', async (req, res) => {
    const { name, team } = req.body;
    const player = new Player({ name, team});
    await player.save();
    res.status(201).json({ playerID: player._id });
});

export default router;