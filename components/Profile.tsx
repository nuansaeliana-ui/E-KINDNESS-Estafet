
import React, { useState, useEffect } from 'react';
import { UserState } from '../types';
import { calculateAuraPulse, getAuraBreathSpeed, getResonanceColor } from '../services/auraService';

const Profile: React.FC<{ user: UserState }> = ({ user }) => {
  const [currentAura, setCurrentAura] = useState(user.aura);
  const [breathSpeed, setBreathSpeed] = useState(getAuraBreathSpeed(user.aura));

  useEffect(() => {
    // Simulasi update aura real-time berdasarkan aktivitas
    const interval = setInterval(() => {
      const updated = calculateAuraPulse(user.aura, Date.now() - 1000 * 60 * 5); // Simulasi 5 menit
      setCurrentAura(updated);
      setBreathSpeed(getAuraBreathSpeed(updated));
    }, 5000);
    return () => clearInterval(interval);
  }, [user.aura]);

  const resonanceColor = getResonanceColor(currentAura);

  return (
    <div className="p-8 bg-[#020202] min-h-screen text-gray-300 font-inter pb-24 relative overflow-hidden">
      {/* Dynamic Background Glow Based on Aura Status */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-colors duration-[3000ms]"
        style={{ backgroundColor: `${resonanceColor} 0.05)` }}
      ></div>

      <div className="relative z-10 glass-obsidian rounded-[3.5rem] p-12 border border-white/5 mb-10 text-center shadow-2xl">
         <div className="relative w-48 h-48 mx-auto mb-10">
            <div className="absolute inset-0 rounded-full bg-black z-0"></div>
            <img src={`https://i.pravatar.cc/200?u=${user.id}`} className="w-full h-full rounded-full grayscale border border-white/10 p-2 relative z-10" alt="av" />
            
            {/* Living Aura Circle - 528Hz Modulation */}
            <div 
              className="absolute -inset-4 rounded-full border-4 transition-all duration-1000"
              style={{ 
                borderColor: `${resonanceColor} 0.4)`,
                boxShadow: `0 0 40px ${resonanceColor} 0.2)`,
                animation: `aura-breath ${breathSpeed}s ease-in-out infinite`
              }}
            ></div>
            
            <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full glass-obsidian border border-white/20 flex items-center justify-center text-sm font-bold text-white shadow-xl z-20 font-orbitron">
              LVL {user.level}
            </div>
         </div>

         <div className="space-y-2 mb-12">
            <h3 className="font-orbitron text-2xl font-bold text-white tracking-[0.4em] uppercase">{user.name}</h3>
            <p className="text-[10px] text-gray-600 font-mono tracking-[0.5em] uppercase">STATUS: {currentAura > 70 ? 'HIGH_RESONANCE_528HZ' : 'STABILIZING_FLOW'}</p>
         </div>
         
         <div className="grid grid-cols-2 gap-8">
            <div className="glass-obsidian p-8 rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
               <span className="text-[9px] font-orbitron text-gray-500 block mb-4 uppercase tracking-[0.3em]">Aura Sync</span>
               <span className="text-3xl font-mono font-bold text-white">{currentAura}%</span>
               <div className="mt-4 text-[7px] text-cyan-400 font-mono uppercase tracking-widest">Resonance Active</div>
            </div>
            <div className="glass-obsidian p-8 rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
               <span className="text-[9px] font-orbitron text-gray-500 block mb-4 uppercase tracking-[0.3em]">Neural Relay</span>
               <span className="text-3xl font-mono font-bold text-purple-400">{user.level}</span>
               <div className="mt-4 text-[7px] text-purple-500 font-mono uppercase tracking-widest">Tier: Catalyst</div>
            </div>
         </div>
      </div>

      <div className="space-y-6">
         <div className="flex justify-between items-center px-6">
            <h4 className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest">Evolution Roadmap</h4>
            <span className="text-[8px] text-cyan-500 font-mono">ENPE_STABILITY: 420.69</span>
         </div>
         <div className="glass-obsidian p-10 rounded-[3.5rem] border border-white/5 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
               <span className="text-[10px] text-white font-mono uppercase tracking-widest">Identity Evolution Stage</span>
               <span className="text-[10px] text-cyan-400 font-mono font-bold">74%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
               <div className="h-full bg-gradient-to-r from-cyan-600 via-purple-500 to-cyan-400 w-[74%] rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)]"></div>
            </div>
            <p className="mt-8 text-[11px] text-gray-500 leading-relaxed font-serif italic text-center px-4">
              "Identitas NFT TM Anda berevolusi dari Node tunggal menjadi Katalis Global. Aura Anda akan meredup jika Anda berhenti memberi; bagikan berkat untuk tetap bercahaya."
            </p>
         </div>
      </div>

      <style>{`
        @keyframes aura-breath {
          0%, 100% { transform: scale(1); opacity: 0.3; filter: blur(2px); }
          50% { transform: scale(1.15); opacity: 0.8; filter: blur(8px); }
        }
      `}</style>
    </div>
  );
};

export default Profile;
