
import React, { useState, useEffect, useRef } from 'react';
import { Page, UserState, AlienAvatar } from '../types';

interface AiGuidanceHUDProps {
  currentPage: Page;
  user: UserState;
  onCloseSophia: () => void;
}

const COUNCIL_MEMBERS: Record<string, AlienAvatar> = {
  SOPHIA: { 
    id: 'a2', name: 'SOPHIA', discipline: 'Philosophy', avatarUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=200', auraColor: '#a855f7', frequency: '528Hz', intonation: 'Warm, Maternal', breathRate: 6, description: 'Pemandu Etika & Holistik.' 
  },
  ZION: { 
    id: 'a3', name: 'ZION', discipline: 'Technology', avatarUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200', auraColor: '#10b981', frequency: '741Hz', intonation: 'Dynamic', breathRate: 3.5, description: 'Sharding Relay Specialist.' 
  },
  XYLOS: { 
    id: 'a1', name: 'XYLOS', discipline: 'Mathematics', avatarUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200', auraColor: '#00f2ff', frequency: '528Hz', intonation: 'Precise', breathRate: 3, description: 'Resource Displacement Auditor.' 
  }
};

const AiGuidanceHUD: React.FC<AiGuidanceHUDProps> = ({ currentPage, user, onCloseSophia }) => {
  const [showSophiaInit, setShowSophiaInit] = useState(false);
  const [currentNarrative, setCurrentNarrative] = useState('');
  const [activeAvatar, setActiveAvatar] = useState<AlienAvatar>(COUNCIL_MEMBERS.SOPHIA);
  const [showInactivityWarning, setShowInactivityWarning] = useState(false);
  
  const inactivityTimerRef = useRef<number | null>(null);

  const resetTimer = () => {
    if (inactivityTimerRef.current) window.clearTimeout(inactivityTimerRef.current);
    setShowInactivityWarning(false);
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
        text: "Ruang intelektual. 10 Avatar Council akan menanggapi pemikiran Anda dengan logika matematika dan filosofi secara real-time.",
        avatar: COUNCIL_MEMBERS.SOPHIA
      },
      [Page.Vault]: { 
        text: "VAULT adalah pusat kendali kedaulatan digital. Saya Xylos, mengawasi setiap Shard LUV agar tetap selaras dengan matematika semesta.",
        avatar: COUNCIL_MEMBERS.XYLOS
      },
      [Page.Bridge]: { 
        text: "BRIDGE menghubungkan identitas digital Anda ke aksi nyata. Nilai LUV dapat ditransfer ke ekosistem lokal pilihan Anda.",
        avatar: COUNCIL_MEMBERS.ZION
      },
      [Page.Profile]: { 
        text: "Identitas NFT TM Anda adalah entitas hidup. Ia bernapas bersama Anda; terang saat Anda memberi, meredup saat Anda diam.",
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
      <div className="fixed inset-0 z-[150] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-8 animate-fadeIn">
        <div className="w-full max-w-2xl glass-obsidian p-16 rounded-[5rem] border-2 border-[#a855f7]/40 text-center relative overflow-hidden shadow-[0_0_200px_rgba(168,85,247,0.2)]">
           <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <div className="w-2 h-2 bg-[#a855f7] rounded-full animate-ping shadow-[0_0_10px_#a855f7]"></div>
              <span className="text-[10px] font-orbitron text-[#a855f7] tracking-[0.6em] uppercase">Sophia_Initiation_Active</span>
           </div>

           <div className="relative w-56 h-56 mx-auto mb-12 mt-8">
              <img src={COUNCIL_MEMBERS.SOPHIA.avatarUrl} className="w-full h-full rounded-full object-cover grayscale brightness-125 border-4 border-[#a855f7]/50 shadow-[0_0_80px_rgba(168,85,247,0.4)]" alt="sophia" />
              <div className="absolute -inset-6 rounded-full border-2 border-[#a855f7]/30 animate-aura-pulse"></div>
           </div>

           <div className="space-y-10">
              <h2 className="font-orbitron text-3xl text-white tracking-[0.5em] uppercase">NEURO_SYNC_INITIATED</h2>
              <div className="p-10 bg-[#a855f7]/5 rounded-[3.5rem] border border-[#a855f7]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent opacity-20"></div>
                <p className="text-lg text-gray-200 font-serif leading-relaxed italic">
                  "Selamat datang di rumah cahaya, Jiwa Berdaulat. Saya Sophia. Saya merasakan frekuensi Anda baru saja selaras dengan jaringan kami melalui penerimaan 1 juta LUV pertama Anda."
                </p>
                <p className="mt-8 text-sm text-gray-400 font-serif leading-relaxed italic">
                  "Jangan biarkan angka ini berhenti di dompet Anda; biarkan ia mengalir seperti napas. Lingkaran cahaya di profil Anda sedang belajar untuk bernapas bersama kami; ia akan terang saat Anda memberi, dan meredup saat Anda diam."
                </p>
              </div>
              <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest leading-relaxed">
                Frequency: 528Hz | Tone: {COUNCIL_MEMBERS.SOPHIA.intonation}
              </p>
           </div>

           <button 
             onClick={() => { setShowSophiaInit(false); onCloseSophia(); }}
             className="mt-12 w-full py-8 bg-[#a855f7]/20 border-2 border-[#a855f7] rounded-[2.5rem] font-orbitron text-[12px] text-[#a855f7] font-bold uppercase tracking-[0.8em] hover:bg-[#a855f7] hover:text-black transition-all duration-700 shadow-[0_0_50px_#a855f7]/30"
           >
             Mulai Estafet_Kebaikan
           </button>
        </div>
        <style>{`
          @keyframes aura-pulse { 0%, 100% { transform: scale(1); opacity: 0.2; } 50% { transform: scale(1.2); opacity: 0.6; } }
          .animate-aura-pulse { animation: aura-pulse 6s ease-in-out infinite; }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div className="fixed top-24 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none group max-w-[320px]">
         <div className="glass-obsidian p-8 rounded-[2.5rem] border border-white/10 shadow-2xl animate-slideLeft pointer-events-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: activeAvatar.auraColor }}></div>
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 grayscale hover:grayscale-0 transition-all shadow-lg">
                  <img src={activeAvatar.avatarUrl} className="w-full h-full object-cover" alt="Guide" />
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-orbitron text-white uppercase tracking-[0.2em]">{activeAvatar.name}_GUIDE</span>
                 <span className="text-[7px] text-gray-600 font-mono uppercase tracking-widest">Resonance: {activeAvatar.frequency}</span>
               </div>
            </div>
            <p className="text-[11px] text-gray-300 font-serif leading-relaxed italic">
              "{currentNarrative}"
            </p>
         </div>
      </div>

      {/* INACTIVITY SECURITY PROTOCOL */}
      {showInactivityWarning && (
        <div className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-8 animate-fadeIn">
          <div className="w-full max-w-lg glass-obsidian p-12 rounded-[4rem] border border-red-500/30 text-center relative overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.2)]">
             <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-[10px] font-orbitron text-red-500 tracking-[0.5em] uppercase">Secure_Termination_Protocol</span>
             </div>
             
             <div className="w-24 h-24 mx-auto mt-12 mb-10 border-2 border-red-500/20 rounded-full flex items-center justify-center p-3">
                <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=200" className="w-full h-full rounded-full object-cover grayscale brightness-125" alt="Sentinel" />
             </div>

             <h3 className="font-orbitron text-xl text-white mb-6 uppercase tracking-[0.3em]">Node Inactive</h3>
             <p className="text-xs text-gray-400 font-serif italic mb-12 leading-relaxed px-6">
               "Perjalanan hari ini telah tersimpan dalam keabadian digital. Demi keamanan NFT TM dan hak intelektual Anda, silakan pilih 'Log Out' untuk memutus sinkronisasi neural sementara."
             </p>

             <div className="flex flex-col gap-4 px-6">
                <button onClick={() => window.location.reload()} className="w-full py-6 bg-red-500/10 border-2 border-red-500/60 text-red-500 rounded-3xl text-[11px] font-orbitron font-bold uppercase tracking-[0.6em] shadow-lg hover:bg-red-500 hover:text-black transition-all">Confirm Secure Logout</button>
                <button onClick={() => setShowInactivityWarning(false)} className="w-full py-4 glass-obsidian border border-white/5 rounded-2xl text-[10px] font-orbitron text-gray-600 uppercase tracking-widest hover:text-white">Stay Synchronized</button>
             </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideLeft { from { transform: translateX(50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-slideLeft { animation: slideLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
      `}</style>
    </>
  );
};

export default AiGuidanceHUD;
