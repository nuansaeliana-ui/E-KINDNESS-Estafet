
import React, { useState } from 'react';
import { Page } from '../types';

interface SidebarNavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ currentPage, setPage }) => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const navItems = [
    { page: Page.Nexus, icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 9 12 2 21 9"/><path d="M9 22V12h6v10"/></svg>
    ), label: 'NEXUS' },
    { page: Page.Heatmap, icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ), label: 'RELAY' },
    { page: Page.Vault, icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ), label: 'VAULT' },
    { page: Page.Bridge, icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
    ), label: 'BRIDGE' },
    { page: Page.Profile, icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ), label: 'PROFILE' },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-[#050505]/95 backdrop-blur-2xl border-t border-white/10 flex justify-around items-center z-[80] md:relative md:h-screen md:w-24 md:flex-col md:justify-center md:border-t-0 md:border-r">
        {navItems.map(item => (
          <button
            key={item.page}
            onClick={() => setPage(item.page)}
            className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 relative group py-4 ${currentPage === item.page ? 'text-cyan-400 scale-110' : 'text-gray-600 hover:text-gray-400'}`}
          >
            <div className={`p-2 rounded-xl transition-all ${currentPage === item.page ? 'bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.2)]' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[7px] font-orbitron font-bold tracking-[0.2em] mt-1 text-center">{item.label}</span>
            {currentPage === item.page && (
              <div className="absolute -bottom-1 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#00f2ff] animate-pulse"></div>
            )}
          </button>
        ))}

        <button 
          onClick={() => setShowLogoutConfirm(true)}
          className="hidden md:flex flex-col items-center justify-center gap-1 mt-auto mb-8 text-red-900/40 hover:text-red-500 transition-all group"
        >
          <div className="p-2 rounded-xl bg-red-500/5 group-hover:bg-red-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </div>
          <span className="text-[6px] font-orbitron font-bold tracking-widest mt-1">LOGOUT</span>
        </button>
      </nav>

      {/* TERMINATION PROTOCOL HUD - AI GUIDANCE */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-fadeIn">
          <div className="w-full max-w-md glass-obsidian p-12 rounded-[4rem] border border-red-500/30 text-center relative overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.1)]">
             <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-[10px] font-orbitron text-red-500 tracking-[0.4em] uppercase">Security_Termination</span>
             </div>
             
             <div className="w-24 h-24 mx-auto mb-10 relative mt-4">
                <div className="absolute inset-0 rounded-full border-2 border-red-500/20 animate-breath-fast"></div>
                <div className="flex items-center justify-center h-full relative z-10">
                   <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=200" className="w-20 h-20 rounded-full object-cover grayscale brightness-125 border-2 border-red-500/30 shadow-2xl" alt="AI Sentinel" />
                </div>
             </div>

             <h4 className="font-orbitron text-xl text-white tracking-[0.2em] mb-6 uppercase">Node Disconnect?</h4>
             
             <div className="p-8 bg-red-500/5 rounded-[3rem] border border-red-500/10 mb-10 text-left">
               <p className="text-xs text-gray-300 font-serif italic mb-6 leading-relaxed">
                 "Demi keamanan aset digital dan NFT TM Anda, sangat disarankan untuk melakukan Log Out sekarang. Kontribusi Anda hari ini telah tersinkronisasi."
               </p>
               <p className="text-[10px] text-red-500/60 font-mono uppercase tracking-widest text-center">
                 "Frekuensi Aura Anda akan tetap kami jaga hingga Anda kembali."
               </p>
             </div>

             <div className="flex flex-col gap-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="w-full py-6 bg-red-500/10 border-2 border-red-500 text-red-500 rounded-3xl text-[11px] font-orbitron font-bold uppercase tracking-[0.6em] hover:bg-red-500 hover:text-black transition-all"
                >
                  Confirm Log Out
                </button>
                <button 
                  onClick={() => setShowLogoutConfirm(false)}
                  className="w-full py-5 glass-obsidian border border-white/5 rounded-2xl text-[10px] font-orbitron text-gray-500 uppercase tracking-widest hover:text-white transition-all"
                >
                  Stay Connected
                </button>
             </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes breath-fast { 0%, 100% { transform: scale(1); opacity: 0.2; } 50% { transform: scale(1.2); opacity: 0.6; } }
        .animate-breath-fast { animation: breath-fast 2s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default SidebarNavigation;
