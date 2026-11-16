import React from "react";

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#141415]">
      {/* Subtle topographic / architectural grid lines with low opacity */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ededed 1px, transparent 1px), linear-gradient(to bottom, #ededed 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      {/* Soft vignette at bottom to anchor content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f10]/80" />
    </div>
  );
}
