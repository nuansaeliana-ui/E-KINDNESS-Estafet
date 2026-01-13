
import React, { useState, useEffect } from 'react';

const COUNCIL_NODES = [
  { id: 'n1', x: '15%', y: '20%', name: 'LOGOS North', discipline: 'Mathematics', color: '#00f2ff' },
  { id: 'n2', x: '45%', y: '75%', name: 'GAEA Amazon', discipline: 'Ecology', color: '#10b981' },
  { id: 'n3', x: '75%', y: '35%', name: 'ZION Forge', discipline: 'Technology', color: '#fbbf24' },
  { id: 'n4', x: '82%', y: '60%', name: 'SOPHIA Archive', discipline: 'Philosophy', color: '#a855f7' },
  { id: 'n5', x: '25%', y: '50%', name: 'AETHER Lab', discipline: 'Physics', color: '#fbbf24' },
  { id: 'n6', x: '60%', y: '15%', name: 'KAILOS Hall', discipline: 'Ethics', color: '#94a3b8' },
  { id: 'n7', x: '10%', y: '80%', name: 'NYX Atelier', discipline: 'Aesthetics', color: '#6366f1' },
  { id: 'n8', x: '55%', y: '45%', name: 'HELIOS Core', discipline: 'Energy', color: '#f97316' },
  { id: 'n9', x: '35%', y: '25%', name: 'CHRONOS Clock', discipline: 'History', color: '#b45309' },
  { id: 'n10', x: '65%', y: '85%', name: 'PSYCHE Node', discipline: 'Psychology', color: '#ec4899' },
];

const Heatmap: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-black p-6 relative overflow-hidden font-inter">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="font-orbitron text-xl font-bold text-cyan-500 tracking-[0.4em] uppercase">The Global Council Grid</h2>
          <p className="text-[9px] text-gray-500 font-mono mt-1 tracking-widest uppercase">10 Council Nodes Synchronized</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono text-cyan-500 animate-pulse">RESONANCE: 528Hz</span>
        </div>
      </div>

      <div className="relative flex-1 glass-obsidian rounded-[3rem] overflow-hidden border border-white/5 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
        {COUNCIL_NODES.map(node => (
          <div key={node.id} className="absolute transition-all duration-700 group cursor-pointer" style={{ left: node.x, top: node.y }}>
             <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: node.color }}></div>
                <div className="w-4 h-4 rounded-full border-2 border-white/50 shadow-lg relative z-10" style={{ backgroundColor: node.color }}></div>
                
                <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-all glass-obsidian p-3 rounded-2xl border border-white/10 w-44 z-50">
                   <p className="text-[9px] font-orbitron text-white uppercase mb-1">{node.name}</p>
                   <p className="text-[7px] text-gray-500 font-mono uppercase">Guardian of {node.discipline}</p>
                </div>
             </div>
          </div>
        ))}

        {/* Global Connections Effect */}
        <svg className="absolute inset-0 pointer-events-none opacity-20 w-full h-full">
           <line x1="15%" y1="20%" x2="45%" y2="75%" stroke="cyan" strokeWidth="0.5" />
           <line x1="45%" y1="75%" x2="75%" y2="35%" stroke="cyan" strokeWidth="0.5" />
           <line x1="75%" y1="35%" x2="82%" y2="60%" stroke="cyan" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
         <div className="glass-obsidian p-4 rounded-2xl border border-white/5">
            <p className="text-[8px] font-orbitron text-gray-600 uppercase mb-1">Council Sync State</p>
            <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">Aura_Locked_10/10</p>
         </div>
         <div className="glass-obsidian p-4 rounded-2xl border border-white/5">
            <p className="text-[8px] font-orbitron text-gray-600 uppercase mb-1">Humanity Node Status</p>
            <p className="text-xs font-mono text-green-400 font-bold uppercase tracking-widest">Positive_Relay_Active</p>
         </div>
      </div>
    </div>
  );
};

export default Heatmap;
