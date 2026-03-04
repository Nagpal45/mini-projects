import mongoose from "mongoose";
const { Schema } = mongoose;

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    totalScore: { type: Number, default: 0 },
    wickets: { type: Number, default: 0 },
    overs: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Team", teamSchema);
