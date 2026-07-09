import React from "react";

export default function CosmicBackground() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#0B0B0B]">
            {/* Linear background fading from dark obsidian to deep black towards the absolute bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0B0B0B] to-[#0B0B0B] opacity-95" />

            {/* Top Left: Soft Gold glow */}
            <div className="absolute -top-[15%] -left-[15%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-[#D4AF37]/6 to-transparent blur-[145px] pointer-events-none mix-blend-screen" />

            {/* Center / middle right: Soft ambient gold glow */}
            <div className="absolute top-[25%] left-[20%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-tr from-[#E8C547]/4 to-transparent blur-[160px] pointer-events-none mix-blend-screen" />

            {/* Bottom: Subtlest gold ambient lighting peaking from right bottom */}
            <div className="absolute -bottom-[20%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-[#D4AF37]/2 blur-[120px] pointer-events-none" />

            {/* Additional delicate cinematic overlay gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(212,175,55,0.038),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#0B0B0B_95%)] opacity-70 pointer-events-none" />
        </div>
    );
}
