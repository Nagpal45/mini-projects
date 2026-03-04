"use client";
import DiscussForum from "@/components/forum";
import Sidebar from "@/components/sidebar";
import MarketStories from "@/components/stories";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [type, setType] = useState("forum");
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home w-full flex items-start justify-end ">
      {showSidebar && <Sidebar />}
      <button
        className={
          showSidebar
            ? "flex items-center justify-center h-[100px] w-[16px] bg-blue-950 fixed top-1/2 left-2/3 md:left-1/4"
            : "flex items-center justify-center h-[100px] w-[16px] bg-blue-950 fixed top-1/2 left-0"
        }
        onClick={toggleSidebar}
      >
        {showSidebar ? (
          <ArrowLeft className="text-white text-3xl" />
        ) : (
          <ArrowRight className="text-white text-3xl" />
        )}
      </button>
      <div
        className={
          showSidebar
            ? "md:w-3/4 w-full flex items-start justify-end md:pl-3"
            : "w-full flex items-start justify-center md:pl-3"
        }
      >
        <div class="flex md:hidden w-full h-16 z-10 bg-blue-950 fixed top-0 flex-row justify-evenly items-center">
          <p class="text-lg text-white" onClick={() => setType("forum")}>
            Discuss Forum
          </p>
          <div className="sepLine border h-full border-gray-400"></div>
          <p class="text-lg text-white" onClick={() => setType("market")}>
            Market Stories
          </p>
        </div>
        {isMobile ? (
          <>
            {type === "forum" && <DiscussForum />}
            {type === "market" && <MarketStories />}
          </>
        ) : (
          <>
            <DiscussForum />
            <MarketStories />
          </>
        )}
      </div>
    </div>
  );
}
