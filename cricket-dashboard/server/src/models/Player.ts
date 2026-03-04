import mongoose from "mongoose";
const { Schema } = mongoose;

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: Schema.Types.ObjectId, ref: "Team", required: true },
    role: { type: String },
    runs: { type: Number, default: 0 },
    ballsFaced: { type: Number, default: 0 },
    wicketsTaken: { type: Number, default: 0 },
    oversBowled: { type: Number, default: 0 },
    runsConceded: { type: Number, default: 0 },
    maidenOvers: { type: Number, default: 0 },
    fours: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Player", playerSchema);