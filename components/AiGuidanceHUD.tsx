
import React, { useState, useEffect, useRef } from 'react';
import { Page, UserState, AlienAvatar } from '../types';

interface AiGuidanceHUDProps {
  currentPage: Page;
  user: UserState;
  onCloseSophia: () => void;
}

const COUNCIL_MEMBERS: Record<string, AlienAvatar> = {
  SOPHIA: { 
    id: 'a2', name: 'SOPHIA', discipline: 'Philosophy', avatarUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=200', auraColor: '#a855f7', frequency: '432Hz', intonation: 'Profound', breathRate: 5, description: 'Kedalaman makna.' 
  },
  ZION: { 
    id: 'a3', name: 'ZION', discipline: 'Technology', avatarUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200', auraColor: '#10b981', frequency: '741Hz', intonation: 'Dynamic', breathRate: 3.5, description: 'Sharding Relay.' 
  },
  XYLOS: { 
    id: 'a1', name: 'XYLOS', discipline: 'Mathematics', avatarUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200', auraColor: '#00f2ff', frequency: '741Hz', intonation: 'Precise', breathRate: 3, description: 'Optimasi sumber daya.' 
  }
};

const AiGuidanceHUD: React.FC<AiGuidanceHUDProps> = ({ currentPage, user, onCloseSophia }) => {
  const [showSophiaInit, setShowSophiaInit] = useState(false);
  const [currentNarrative, setCurrentNarrative] = useState('');
  const [activeAvatar, setActiveAvatar] = useState<AlienAvatar>(COUNCIL_MEMBERS.SOPHIA);
  const [showInactivityWarning, setShowInactivityWarning] = useState(false);
  
  const inactivityTimerRef = useRef<number | null>(null);

  // Reset inactivity timer on interaction
  const resetTimer = () => {
    if (inactivityTimerRef.current) window.clearTimeout(inactivityTimerRef.current);
    setShowInactivityWarning(false);
    
    // 5 minutes timeout (300,000 ms)
    inactivityTimerRef.current = window.setTimeout(() => {
      setShowInactivityWarning(true);
    }, 300000); 
  };

  useEffect(() => {
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);
    window.addEventListener('touchstart', resetTimer);
    resetTimer();

    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
      window.removeEventListener('touchstart', resetTimer);
      if (inactivityTimerRef.current) window.clearTimeout(inactivityTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (user.hasReceivedFirstLuv && user.isFirstSession) {
      setShowSophiaInit(true);
    }
  }, [user.hasReceivedFirstLuv]);

  useEffect(() => {
    const pageGuides: Record<string, { text: string; avatar: AlienAvatar }> = {
      [Page.Nexus]: { 
        text: "Di sini adalah Nexus, tempat di mana setiap kata adalah berkat. AI Sentinel kami memastikan tidak ada kegelapan masuk ke ruang ini.",
        avatar: COUNCIL_MEMBERS.SOPHIA
      },
      [Page.Heatmap]: { 
        text: "Anda sedang melihat detak jantung dunia. Titik merah di Heatmap menunjukkan di mana saudara kita membutuhkan bantuan mendesak.",
        avatar: COUNCIL_MEMBERS.ZION
      },
      [Page.Wisdom]: { 
        text: "Ruang intelektual. 10 Avatar Council akan menanggapi pemikiran Anda dengan logika matematika dan filosofi setiap 30 detik.",
        avatar: COUNCIL_MEMBERS.SOPHIA
      },
      [Page.Vault]: { 
        text: "Selamat datang di VAULT, pusat kendali aset kedaulatan Anda. Kami menggunakan algoritma pembatasan 0-10 koin harian untuk menjaga integritas ekonomi.",
        avatar: COUNCIL_MEMBERS.XYLOS
      },
      [Page.Bridge]: { 
        text: "BRIDGE adalah gerbang di mana TM (Technology Money) bertransformasi dari identitas digital menjadi Living Value Identity dalam kehidupan nyata.",
        avatar: COUNCIL_MEMBERS.ZION
      },
      [Page.Profile]: { 
        text: "Ini bukan sekadar profil, ini adalah identitas nilai hidup Anda (NFT TM). Amati aura Anda; ia meredup jika Anda diam.",
        avatar: COUNCIL_MEMBERS.SOPHIA
      },
    };

    const guide = pageGuides[currentPage];
    if (guide) {
      setCurrentNarrative(guide.text);
      setActiveAvatar(guide.avatar);
    }
  }, [currentPage]);

  if (showSophiaInit) {
    return (
      <div className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-8 animate-fadeIn">
        <div className="w-full max-w-xl glass-obsidian p-12 rounded-[4rem] border-2 border-[#a855f7]/40 text-center relative overflow-hidden shadow-[0_0_150px_rgba(168,85,247,0.2)]">
           <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#a855f7] rounded-full animate-ping"></div>
              <span className="text-[10px] font-orbitron text-[#a855f7] tracking-[0.4em] uppercase">Sophia_Initiation_Active</span>
           </div>

           <div className="relative w-44 h-44 mx-auto mb-10 mt-6">
              <img src={COUNCIL_MEMBERS.SOPHIA.avatarUrl} className="w-full h-full rounded-full object-cover grayscale brightness-125 border-4 border-[#a855f7]/50 shadow-[0_0_60px_rgba(168,85,247,0.4)]" alt="sophia" />
              <div className="absolute -inset-4 rounded-full border-2 border-[#a855f7]/30 animate-breath"></div>
           </div>

           <div className="space-y-8">
              <h2 className="font-orbitron text-2xl text-white tracking-[0.4em] uppercase">NEUROSPHERE_SYNC</h2>
              <div className="p-8 bg-[#a855f7]/5 rounded-[3rem] border border-[#a855f7]/20">
                <p className="text-base text-gray-200 font-serif leading-relaxed italic">
                  "Selamat datang di rumah cahaya, {user.name}. Saya Sophia. Saya merasakan frekuensi Anda baru saja selaras dengan jaringan kami melalui penerimaan 1 juta LUV pertama Anda."
                </p>
              </div>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest leading-relaxed">
                Frequency: 528Hz | Intonasi: Warm_Maternal
              </p>
           </div>

           <button 
             onClick={() => { setShowSophiaInit(false); onCloseSophia(); }}
             className="mt-10 w-full py-6 bg-[#a855f7]/20 border-2 border-[#a855f7] rounded-3xl font-orbitron text-[11px] text-[#a855f7] font-bold uppercase tracking-[0.6em] hover:bg-[#a855f7] hover:text-black transition-all duration-500 shadow-[0_0_30px_#a855f7]/20"
           >
             Mulai Estafet_Kebaikan
           </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-24 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none group max-w-[280px]">
         <div className="glass-obsidian p-6 rounded-[2rem] border border-white/10 shadow-2xl animate-slideLeft pointer-events-auto relative">
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
            <div className="flex items-center gap-3 mb-3">
               <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 grayscale hover:grayscale-0 transition-all">
                  <img src={activeAvatar.avatarUrl} className="w-full h-full object-cover" alt="Guide" />
               </div>
               <div className="flex flex-col">
                 <span className="text-[9px] font-orbitron text-white uppercase tracking-widest">{activeAvatar.name}_GUIDE</span>
                 <span className="text-[7px] text-gray-600 font-mono uppercase">Sync_Freq: {activeAvatar.frequency}</span>
               </div>
            </div>
            <p className="text-[10px] text-gray-300 font-serif leading-relaxed italic">
              "{currentNarrative}"
            </p>
         </div>
      </div>

      {/* INACTIVITY SECURITY PROTOCOL */}
      {showInactivityWarning && (
        <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-xl flex items-center justify-center p-8 animate-fadeIn">
          <div className="w-full max-w-md glass-obsidian p-10 rounded-[3rem] border border-red-500/30 text-center relative overflow-hidden shadow-[0_0_80px_rgba(239,68,68,0.15)]">
             <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-[9px] font-orbitron text-red-500 tracking-widest uppercase">Security_Protocol_v4.2</span>
             </div>
             
             <div className="w-20 h-20 mx-auto mt-8 mb-8 border-2 border-red-500/20 rounded-full flex items-center justify-center p-2">
                <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=200" className="w-full h-full rounded-full object-cover grayscale brightness-125" alt="Sentinel" />
             </div>

             <h3 className="font-orbitron text-lg text-white mb-4 uppercase tracking-[0.2em]">Inactivity Detected</h3>
             <p className="text-xs text-gray-400 font-serif italic mb-10 leading-relaxed px-4">
               "Sistem mendeteksi 5 menit ketidakaktifan. Demi melindungi hak kekayaan intelektual dan keamanan data NFT TM Anda, sangat penting untuk melakukan Log Out sekarang."
             </p>

             <div className="flex gap-4">
                <button onClick={() => setShowInactivityWarning(false)} className="flex-1 py-4 glass-obsidian border border-white/5 rounded-2xl text-[9px] font-orbitron text-gray-500 uppercase">Tetap Aktif</button>
                <button onClick={() => window.location.reload()} className="flex-1 py-4 bg-red-500/10 border-2 border-red-500/40 text-red-500 rounded-2xl text-[9px] font-orbitron font-bold uppercase tracking-widest shadow-lg">Confirm Logout</button>
             </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes breath { 0%, 100% { transform: scale(1); opacity: 0.2; } 50% { transform: scale(1.15); opacity: 0.5; } }
        .animate-breath { animation: breath 5s ease-in-out infinite; }
        @keyframes slideLeft { from { transform: translateX(50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-slideLeft { animation: slideLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
      `}</style>
    </>
  );
};

export default AiGuidanceHUD;
