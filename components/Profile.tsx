
import React from 'react';
import { UserState } from '../types';

const Profile: React.FC<{ user: UserState }> = ({ user }) => {
  return (
    <div className="p-8 bg-[#020202] min-h-screen text-gray-300 font-inter pb-24">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>

      <div className="relative z-10 glass-obsidian rounded-[3.5rem] p-12 border border-white/5 mb-10 text-center shadow-2xl">
         <div className="relative w-40 h-40 mx-auto mb-8">
            <img src={`https://i.pravatar.cc/150?u=${user.id}`} className="w-full h-full rounded-full grayscale border border-white/10 p-1.5" alt="av" />
            {/* Living Circle on Profile */}
            <div className="absolute -inset-2 rounded-full border border-cyan-500/20 animate-breath-slow"></div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full glass-obsidian border border-white/20 flex items-center justify-center text-sm font-bold text-white shadow-xl">
              {user.level}
            </div>
         </div>
         <h3 className="font-orbitron text-2xl font-bold text-white tracking-[0.3em] uppercase mb-2">{user.name}</h3>
         <p className="text-[10px] text-gray-500 font-mono tracking-[0.4em] uppercase mb-10">NEURO_ID: {user.id}</p>
         
         <div className="grid grid-cols-2 gap-6">
            <div className="glass-obsidian p-6 rounded-3xl border border-white/5">
               <span className="text-[8px] font-orbitron text-gray-600 block mb-2 uppercase tracking-widest">Aura Harmony</span>
               <span className="text-lg font-mono font-bold text-white">{user.aura}%</span>
            </div>
            <div className="glass-obsidian p-6 rounded-3xl border border-white/5">
               <span className="text-[8px] font-orbitron text-gray-600 block mb-2 uppercase tracking-widest">Relay Level</span>
               <span className="text-lg font-mono font-bold text-cyan-400">{user.level}</span>
            </div>
         </div>
      </div>

      <div className="space-y-6">
         <h4 className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest px-4">Evolution Roadmap</h4>
         <div className="glass-obsidian p-8 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
               <span className="text-[10px] text-white font-mono uppercase tracking-widest">Level {user.level} → {user.level + 1}</span>
               <span className="text-[10px] text-cyan-400 font-mono">74% COMPLETE</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 w-[74%] animate-pulse"></div>
            </div>
            <p className="mt-6 text-[11px] text-gray-500 leading-relaxed font-serif italic">
              "Your identity is evolving from a single node to a Global Catalyst. Future development protocols estimate full Living Value Identity synchronization in 8 months."
            </p>
         </div>
      </div>

      <style>{`
        @keyframes breath-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        .animate-breath-slow { animation: breath-slow 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Profile;
