"use client"
import FeedPanel from "@/components/FeedPanel";
import Navbar from "@/components/Navbar";
import ScoreCard from "@/components/ScoreCard";
import apiRequest from "@/lib/apiRequest";
import { useEffect, useState } from "react";
import { Match } from "./types";
import io from "socket.io-client";
import Creation from "@/components/Creation";

export default function Home() {
  const [match, setMatch] = useState<Match>();
  const [socket, setSocket] = useState<ReturnType<typeof io> | null>(null);

  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);
    
    useEffect(() => {
        const fetchMatch = async () => {
            const response = await apiRequest.get('/match');
            setMatch(response.data);
        }
        fetchMatch();
    }, []);

    useEffect(() => {
      if (socket) {
        socket.on('updateData', (data) => {
          setMatch((prevMatch) => ({
            ...prevMatch,
            ...data,
          }));
          
        });
      }
    }, [socket]);
    
    

  return (
    <>
      <Navbar />
        <h1 className="text-4xl font-bold my-5 mt-8 ml-5">Dashboard</h1>
      <div className="flex flex-row w-full h-screen items-center justify-center gap-2 p-2">
        <FeedPanel match={match}/>
        <ScoreCard match={match} />
      </div>
      <div className="p-2 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold my-5 mt-10">To Add Data & Create Match to reset all values</h1>
        <Creation />
      </div>
    </>
  );
}
