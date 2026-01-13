
import React, { useState } from 'react';

const GovernanceVault: React.FC = () => {
  const [showXylosAlgo, setShowXylosAlgo] = useState(false);
  
  const auditLogs = [
    { id: 'tx_001', cause: 'East Africa Drought Relief', amount: '500,000 LUV', date: '2025.10.12', status: 'VERIFIED' },
    { id: 'tx_002', cause: 'Amazon Reforestation', amount: '250,000 LUV', date: '2025.10.11', status: 'VERIFIED' },
    { id: 'tx_003', cause: 'ZION 1% Sharding Relay', amount: '14,206 LUV', date: '2025.10.10', status: 'ACTIVE' },
  ];

  return (
    <div className="p-6 bg-[#050505] min-h-screen font-inter pb-24 relative overflow-hidden">
      <div className="mb-8">
        <h2 className="font-orbitron text-xl font-bold text-white tracking-[0.3em] uppercase">The Governance Vault</h2>
        <p className="text-[10px] text-cyan-500 font-mono mt-1 tracking-widest uppercase">Audit_Protocol: Transparency_Layer_v4.2</p>
      </div>

      {/* Global Pool Visualization */}
      <div className="glass-obsidian p-8 rounded-[3rem] border border-white/5 mb-8 relative overflow-hidden shadow-2xl">
        <p className="text-[10px] font-orbitron text-gray-500 mb-6 tracking-widest uppercase">Kindness Reserve (15% Pool Allocation)</p>
        <div className="flex items-end gap-2 mb-8">
          <span className="text-4xl font-bold font-mono text-white tracking-tighter">1,420,690</span>
          <span className="text-xl font-mono text-cyan-500 mb-1">LUV</span>
        </div>
        <div className="relative w-full h-3 bg-white/5 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
          <div className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 w-[15%] shadow-[0_0_20px_rgba(6,182,212,0.4)]"></div>
        </div>
        <p className="mt-4 text-[9px] text-gray-600 font-mono uppercase tracking-[0.2em]">Locked: 15% (2 Years) | Available: 85% Public Loop</p>
      </div>

      {/* XYLOS MATH NODE */}
      <div className="mb-8">
         <button 
           onClick={() => setShowXylosAlgo(!showXylosAlgo)}
           className="w-full p-8 glass-obsidian border border-cyan-500/20 rounded-[3.5rem] flex items-center justify-between group hover:border-cyan-500/50 transition-all shadow-xl"
         >
            <div className="flex items-center gap-6 text-left">
               <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 14"/></svg>
               </div>
               <div>
                  <h4 className="font-orbitron text-xs text-white tracking-widest uppercase">Xylos Math Protocol</h4>
                  <p className="text-[9px] text-gray-500 font-mono uppercase">Frequency: 741Hz | Status: CALIBRATED</p>
               </div>
            </div>
            <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${showXylosAlgo ? 'rotate-180 bg-cyan-500/20' : ''}`}>
              <svg className="w-4 h-4 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7"/></svg>
            </div>
         </button>
         
         {showXylosAlgo && (
           <div className="mt-6 glass-obsidian p-10 rounded-[4rem] border border-cyan-500/10 animate-fadeIn relative">
              <div className="absolute top-8 right-10 flex gap-1">
                {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 bg-cyan-500/50 rounded-full animate-pulse" style={{ animationDelay: `${i*0.2}s` }}></div>)}
              </div>
              
              <div className="space-y-8">
                 <div className="p-6 bg-black/40 rounded-3xl border border-white/5">
                    <span className="text-[10px] font-orbitron text-cyan-500 block mb-4 uppercase tracking-[0.3em]">Daily Interaction Entropy</span>
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[9px] text-gray-500 font-mono uppercase">Soft_Cap Limit</span>
                       <span className="text-sm font-mono text-white">10 LUV / 24H</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-cyan-500/40 w-full"></div>
                    </div>
                 </div>

                 <p className="text-[11px] text-gray-400 font-serif italic leading-relaxed text-center px-4">
                   "VAULT adalah pusat kendali aset kedaulatan Anda. Kami menggunakan algoritma pembatasan 0-10 koin harian untuk menjaga integritas ekonomi NeuroSphere agar tidak terjadi inflasi nilai."
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4">
                   <div className="glass-obsidian p-5 rounded-3xl border border-white/5">
                      <span className="text-[8px] text-gray-600 uppercase block mb-1">Stability_Rate</span>
                      <span className="text-xs font-mono text-green-400">99.98% SYNC</span>
                   </div>
                   <div className="glass-obsidian p-5 rounded-3xl border border-white/5">
                      <span className="text-[8px] text-gray-600 uppercase block mb-1">Pool_Reserves</span>
                      <span className="text-xs font-mono text-white">1.42M LUV</span>
                   </div>
                 </div>
              </div>
           </div>
         )}
      </div>

      {/* Transaction Logs */}
      <div className="space-y-4">
        <h3 className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest px-4 mb-4">Council Audit Ledger</h3>
        {auditLogs.map(log => (
          <div key={log.id} className="glass-obsidian p-6 rounded-[2rem] border border-white/5 flex flex-col gap-3 hover:border-cyan-500/30 transition-all cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-gray-100 tracking-tight">{log.cause}</span>
              <span className={`text-[8px] font-orbitron px-3 py-1 rounded-full border ${log.status === 'VERIFIED' ? 'border-green-500/20 text-green-400 bg-green-500/5' : 'border-yellow-500/20 text-yellow-400 bg-yellow-500/5'}`}>
                {log.status}
              </span>
            </div>
            <div className="flex justify-between items-center mt-2 font-mono text-[10px]">
                <span className="text-cyan-500 font-bold">{log.amount}</span>
                <span className="text-gray-600">{log.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernanceVault;
