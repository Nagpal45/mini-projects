"use client";
import apiRequest from "@/lib/apiRequest";
import { useState } from "react";

const Creation = () => {
    const [teamID, setTeamID] = useState('');
    const[playerId, setPlayerId] = useState('');

    const handlePlayerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = {
            name: (form[0] as HTMLInputElement).value,
            team: (form[1] as HTMLInputElement).value
        }
        try {
            const response = await apiRequest.post('/player', formData)
            setPlayerId(response.data.playerID);
        } catch (error) {
        console.error(error)
        }
    }

    const handleTeamSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = {
            name: (form[0] as HTMLInputElement).value
        }
        try {
            const response = await apiRequest.post('/team', formData)
            setTeamID(response.data.teamID);
        } catch (error) {
        console.error(error)
        }
    }

    const handleMatchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.target as HTMLFormElement
        const formData = {
            teamA: (form[0] as HTMLInputElement).value,
            teamB: (form[1] as HTMLInputElement).value
        }
        try {
            const response = await apiRequest.post('/match', formData)
            alert(response.data.message);
        } catch (error) {
        console.error(error)
        }
    }

    return(
        <div className="px-3 py-5 flex flex-col gap-5 w-full rounded-lg bg-gray-200/50 border-2 mb-5">
            <h1 className="text-2xl font-bold">Add Team</h1>
            <form onSubmit={handleTeamSubmit} className="flex flex-row gap-10 w-4/5 h-[50px]">
                <input type="text" placeholder="Team Name" className="w-5/6 rounded-lg border-2 p-2" name="name"/>
                <button type="submit" className="w-1/3 bg-blue-300 rounded-lg">Add Team</button>
            </form>
            <p>{teamID}</p>
            <h1 className="text-2xl font-bold">Add Player</h1>
            <form onSubmit={handlePlayerSubmit} className="flex flex-row gap-10 w-4/5 h-[50px]">
                <input type="text" placeholder="Player Name" className="flex flex-row gap-10 w-4/5 h-[50px]" name="name"/>
                <input type="text" placeholder="Player TeamID" className="w-5/6 rounded-lg border-2 p-2" name="team"/>
                <button type="submit" className="w-1/3 bg-blue-300 rounded-lg">Add Player</button>
            </form>
            <p>{playerId}</p>
            <h1 className="text-2xl font-bold">Create Match</h1>
            <form onSubmit={handleMatchSubmit} className="flex flex-row gap-10 w-4/5 h-[50px]">
                <input type="text" placeholder="Team-1 ID" className="flex flex-row gap-10 w-4/5 h-[50px]" name="teamA"/>
                <input type="text" placeholder="Team-2 ID" className="w-5/6 rounded-lg border-2 p-2" name="teamB"/>
                <button type="submit" className="w-1/3 bg-blue-300 rounded-lg">Create Match</button>
            </form>
        </div>
    )
}

export default Creation;