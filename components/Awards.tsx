"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Standard Shadcn utility

// 1. DATA: The content from your image
const AWARDS = [
    {
        id: 1,
        title: "Marketing-Interactive's MARKies 2024 in Singapore",
        subtitle: "Cause (Silver); Most Creative",
        logoText: "MARKies", // Placeholder for logo image
    },
    {
        id: 2,
        title: "Event Marketer Magazine's The 2024 Ex Awards",
        subtitle: "Best Trade Show Exhibit Under 50x50",
        logoText: "ex AWARDS",
    },
    {
        id: 3,
        title: "Ad Age A-List & Creativity Awards 2024",
        subtitle: "Best Use of TikTok award",
        logoText: "Ad Age",
    },
    {
        id: 4,
        title: "Event Marketing Awards 2024",
        subtitle: "Best Gamification (Bronze)",
        logoText: "EM",
    },
    {
        id: 5,
        title: "2025 Eventex Awards",
        subtitle: "Eventex Index: Top 100 Agencies & Event Organisers",
        logoText: "EVENTEX",
    },
    {
        id: 6,
        title: "Bureau International des Expositions",
        subtitle: "Pavillion Design Gold",
        logoText: "BIE",
    },
];

export default function AwardsMarquee() {
    return (
        <section className= "w-full bg-black py-20 overflow-hidden text-white relative" >

        {/* 2. HEADER: The 'Awards' title with the Teal Bracket */ }
        < div className = "container mx-auto px-6 mb-12" >
            <div className="relative inline-block pl-6" >
                {/* The Teal Bracket Accent */ }
                < div className = "absolute left-0 top-1 bottom-1 w-4 border-l-[4px] border-b-[4px] border-[#00C4B4] rounded-bl-md" />
                    <h2 className="text-4xl font-normal tracking-wide text-white" >
                        Awards
                        </h2>
                        </div>
                        </div>

    {/* 3. MARQUEE CONTAINER */ }
    {/* mask-image creates a subtle fade on the edges (optional, remove if you want hard edges) */ }
    <div className="relative w-full flex overflow-hidden mask-gradient" >

        {/* THE TRACK: We render the list TWICE to create the infinite loop */ }
        < div className = "flex animate-marquee hover:[animation-play-state:paused] w-max" >

            {/* Set 1 */ }
            < div className = "flex gap-6 px-3" >
            {
                AWARDS.map((award) => (
                    <AwardCard key= {`a-${award.id}`} data = { award } />
            ))
}
</div>

{/* Set 2 (Duplicate for seamless loop) */ }
<div className="flex gap-6 px-3" >
{
    AWARDS.map((award) => (
        <AwardCard key= {`b-${award.id}`} data = { award } />
            ))}
</div>

    </div>
    </div>

{/* 4. CUSTOM STYLES for the animation */ }
{/* You can move this to your tailwind.config.js or global.css if preferred */ }
<style jsx global > {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

// 5. CARD COMPONENT
// Extracted for cleanliness
function AwardCard({ data }: { data: typeof AWARDS[0] }) {
    return (
        <div
      className= {
            cn(
        "flex flex-col flex-shrink-0",
        "w-[320px] h-[400px] p-6 rounded-2xl",
        "bg-[#00C4B4] text-white", // The Exact Teal Color
        "transition-transform duration-300 hover:-translate-y-2" // Hover lift effect
            )
        }
        >
        {/* Logo Area (White Box) */ }
        < div className = "bg-white w-full h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden" >
            {/* Replace this div with an <img /> tag for real logos */ }
            < span className = "text-black font-bold text-2xl opacity-80 uppercase text-center px-4" >
                { data.logoText }
                </span>
                </div>

    {/* Text Content */ }
    <div className="flex flex-col gap-2" >
        <h3 className="text-lg font-bold leading-snug line-clamp-3" >
            { data.title }
            </h3>
            < p className = "text-sm text-white/90 font-normal leading-relaxed" >
                { data.subtitle }
                </p>
                </div>
                </div>
  );
}