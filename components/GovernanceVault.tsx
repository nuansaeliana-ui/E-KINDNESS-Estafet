
import React, { useState, useEffect } from 'react';

const GovernanceVault: React.FC = () => {
  const [showXylosAlgo, setShowXylosAlgo] = useState(false);
  const [showXylosWelcome, setShowXylosWelcome] = useState(true);
  
  const auditLogs = [
    { id: 'tx_001', cause: 'East Africa Drought Relief', amount: '500,000 LUV', date: '2025.10.12', status: 'VERIFIED' },
    { id: 'tx_002', cause: 'Amazon Reforestation', amount: '250,000 LUV', date: '2025.10.11', status: 'VERIFIED' },
    { id: 'tx_003', cause: 'ZION 1% Sharding Relay', amount: '14,206 LUV', date: '2025.10.10', status: 'ACTIVE' },
  ];

  const vestingData = [
    { label: 'FOUNDER ALOKASI', period: '3 YEARS LOCK', status: 'LOCKED', color: '#fbbf24' },
    { label: 'COUNCIL POOL', period: '2 YEARS VESTING', status: 'VESTING', color: '#a855f7' },
    { label: 'ECOSYSTEM RESERVE', period: '2 YEARS LOCK', status: 'LOCKED', color: '#00f2ff' },
  ];

  return (
    <div className="p-6 bg-[#050505] min-h-screen font-inter pb-24 relative overflow-hidden">
      
      {/* XYLOS INITIAL WELCOME - Math Context */}
      {showXylosWelcome && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-xl flex items-center justify-center p-8 animate-fadeIn">
           <div className="w-full max-w-lg glass-obsidian p-12 rounded-[4rem] border-2 border-cyan-500/30 text-center relative overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.1)]">
              <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                 <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                 <span className="text-[10px] font-orbitron text-cyan-500 tracking-[0.4em] uppercase">Xylos_Governance_Audit</span>
              </div>

              <div className="relative w-36 h-36 mx-auto mb-10 mt-6">
                 <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200" className="w-full h-full rounded-full object-cover grayscale brightness-125 border-4 border-cyan-500/30 shadow-2xl" alt="Xylos" />
                 <div className="absolute -inset-4 rounded-full border-2 border-cyan-500/10 animate-spin-slow"></div>
              </div>

              <div className="space-y-6 px-4">
                 <h2 className="font-orbitron text-2xl text-white tracking-[0.3em] uppercase">XYLOS_CALIBRATION</h2>
                 <p className="text-[13px] text-gray-300 font-serif leading-relaxed italic">
                   "Selamat datang di Vault. Saya Xylos. Di sini, kedaulatan digital Anda dihitung dengan presisi matematika. Kami mengelola 15% Pool Darurat (1,42 Juta LUV) untuk memastikan distribusi kekayaan yang adil dan anti-inflasi."
                 </p>
                 <div className="p-5 bg-cyan-500/5 rounded-3xl border border-cyan-500/20 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                   Status: 1.42M LUV RESERVED | Audit: VERIFIED
                 </div>
              </div>

              <button 
                onClick={() => setShowXylosWelcome(false)}
                className="mt-10 w-full py-6 bg-cyan-500/20 border-2 border-cyan-500 rounded-3xl font-orbitron text-[11px] text-cyan-400 font-bold uppercase tracking-[0.6em] hover:bg-cyan-500 hover:text-black transition-all"
              >
                Access_Vault_Audit
              </button>
           </div>
        </div>
      )}

      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="font-orbitron text-xl font-bold text-white tracking-[0.3em] uppercase">The Governance Vault</h2>
          <p className="text-[10px] text-cyan-500 font-mono mt-1 tracking-widest uppercase">Audit_Protocol: Transparency_Layer_v4.2</p>
        </div>
      </div>

      {/* Global Pool Visualization */}
      <div className="glass-obsidian p-10 rounded-[3.5rem] border border-white/5 mb-10 relative overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <p className="text-[9px] font-orbitron text-gray-500 tracking-[0.4em] uppercase">Kindness Reserve Pool</p>
          <span className="text-[8px] font-mono text-cyan-400">15% ALLOCATION</span>
        </div>
        <div className="flex items-end gap-3 mb-10">
          <span className="text-5xl font-bold font-mono text-white tracking-tighter">1,420,690</span>
          <span className="text-xl font-mono text-cyan-500 mb-2 font-bold">LUV</span>
        </div>
        <div className="relative w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
          <div className="h-full bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-700 w-[15%] shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
        </div>
        <div className="mt-6 flex justify-between text-[8px] font-mono text-gray-600 uppercase tracking-widest">
           <span>Locked: 2 Years</span>
           <span>Sync with 1M Souls</span>
        </div>
      </div>

      {/* Vesting & Locking HUD */}
      <div className="grid grid-cols-1 gap-4 mb-10">
        <h3 className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest px-4">Vesting & Locking Protocols</h3>
        {vestingData.map((item, i) => (
          <div key={i} className="glass-obsidian p-6 rounded-3xl border border-white/5 flex items-center justify-between">
             <div className="flex items-center gap-4">
               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}></div>
               <div>
                 <p className="text-[10px] text-white font-bold tracking-widest uppercase">{item.label}</p>
                 <p className="text-[8px] text-gray-500 font-mono uppercase">{item.period}</p>
               </div>
             </div>
             <span className="text-[8px] font-orbitron text-gray-400 border border-white/10 px-3 py-1 rounded-full uppercase">{item.status}</span>
          </div>
        ))}
      </div>

      {/* XYLOS MATH INTERACTIVE SECTION */}
      <div className="mb-10">
         <button 
           onClick={() => setShowXylosAlgo(!showXylosAlgo)}
           className="w-full p-10 glass-obsidian border border-cyan-500/20 rounded-[4rem] flex items-center justify-between group hover:border-cyan-500/50 transition-all shadow-xl"
         >
            <div className="flex items-center gap-8 text-left">
               <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 14"/></svg>
               </div>
               <div>
                  <h4 className="font-orbitron text-sm text-white tracking-widest uppercase">Xylos Alchemical Math</h4>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Logic: Anti-Inflationary_Relay</p>
               </div>
            </div>
            <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${showXylosAlgo ? 'rotate-180 bg-cyan-500/20' : ''}`}>
              <svg className="w-5 h-5 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7"/></svg>
            </div>
         </button>
         
         {showXylosAlgo && (
           <div className="mt-8 glass-obsidian p-10 rounded-[4rem] border border-cyan-500/10 animate-fadeIn relative">
              <div className="space-y-10">
                 <div className="p-8 bg-black/40 rounded-[2.5rem] border border-white/5">
                    <span className="text-[10px] font-orbitron text-cyan-500 block mb-6 uppercase tracking-[0.4em]">Resource Displacement Algorithm</span>
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-[10px] text-gray-500 font-mono uppercase">User Hard_Cap</span>
                       <span className="text-sm font-mono text-white">10 LUV / 24H Cycle</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-cyan-500/60 w-full animate-pulse"></div>
                    </div>
                    <p className="mt-6 text-[10px] text-gray-600 font-mono uppercase leading-relaxed text-center">
                      "Perhitungan 0-10 koin harian menjaga integritas nilai kedaulatan Anda."
                    </p>
                 </div>

                 <div className="grid grid-cols-2 gap-6">
                   <div className="glass-obsidian p-6 rounded-3xl border border-white/5 text-center">
                      <span className="text-[9px] text-gray-600 uppercase block mb-2 tracking-widest">Network Stability</span>
                      <span className="text-base font-mono text-green-400 font-bold">99.99%</span>
                   </div>
                   <div className="glass-obsidian p-6 rounded-3xl border border-white/5 text-center">
                      <span className="text-[9px] text-gray-600 uppercase block mb-2 tracking-widest">Asset Sync</span>
                      <span className="text-base font-mono text-white font-bold">REAL-TIME</span>
                   </div>
                 </div>
              </div>
           </div>
         )}
      </div>

      {/* Transaction Logs */}
      <div className="space-y-6">
        <h3 className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest px-6 mb-4">Council Audit Ledger</h3>
        {auditLogs.map(log => (
          <div key={log.id} className="glass-obsidian p-8 rounded-[2.5rem] border border-white/5 flex flex-col gap-4 hover:border-cyan-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/20"></div>
            <div className="flex justify-between items-start">
              <span className="text-sm font-bold text-gray-100 tracking-tight uppercase font-orbitron">{log.cause}</span>
              <span className={`text-[8px] font-orbitron px-4 py-1.5 rounded-full border ${log.status === 'VERIFIED' ? 'border-green-500/20 text-green-400 bg-green-500/5' : 'border-yellow-500/20 text-yellow-400 bg-yellow-500/5'}`}>
                {log.status}
              </span>
            </div>
            <div className="flex justify-between items-center font-mono text-[11px]">
                <span className="text-cyan-500 font-bold tracking-widest">{log.amount}</span>
                <span className="text-gray-600 tracking-tighter">{log.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernanceVault;
