
import React, { useState } from 'react';

interface AuthPageProps {
  onAuthSuccess: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [isSynced, setIsSynced] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setIsSynced(true);
      setTimeout(onAuthSuccess, 3000);
    }, 3500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-[#050505]">
      {/* AI Initial Greeting - Top Floating Text */}
      <div className="absolute top-12 left-0 right-0 text-center animate-fadeInUp px-8">
        <p className="text-[10px] font-orbitron text-yellow-500 tracking-[0.5em] uppercase mb-2">NeuroSphere Initializing...</p>
        <h1 className="text-xs text-gray-500 font-serif italic max-w-sm mx-auto">
          "Saya akan menemani Anda menjelajahi fitur kebaikan di sini. Gunakan tombol di bawah untuk masuk atau mendaftar."
        </h1>
      </div>

      <div className="w-full max-w-md glass-obsidian p-10 rounded-[4rem] border-t-4 border-yellow-500/50 shadow-2xl relative overflow-hidden mt-12">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30 animate-pulse"></div>

        {!isSynced ? (
          <>
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-orbitron text-sm tracking-widest text-white uppercase">ID_VALIDATION</h2>
              <span className="text-[8px] font-mono text-yellow-500">v.4.0.1_SYNC</span>
            </div>
            
            <div className="relative w-56 h-56 mx-auto mb-10 group cursor-pointer" onClick={startScan}>
              <div className="absolute inset-0 border-2 border-yellow-500/10 rounded-full animate-ping"></div>
              <div className="absolute inset-4 border border-yellow-500/20 rounded-full"></div>
              
              <div className="flex items-center justify-center h-full relative z-10">
                <svg className={`w-28 h-28 transition-all duration-700 ${isScanning ? 'text-yellow-400 scale-110 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]' : 'text-gray-800'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0112 3v0c.85 0 1.66.105 2.433.302m3.947 2.135A10.001 10.001 0 0112.247 21a9.981 9.981 0 01-2.433-.302m6.38-16.12l.054-.09C18.009 7.201 19 10.483 19 14c0 1.491-.32 2.899-.893 4.162" />
                </svg>
              </div>

              {isScanning && (
                <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 shadow-[0_0_25px_#ffd700] rounded-full animate-scan-y"></div>
              )}
            </div>

            <div className="text-center mb-10 px-4">
              <p className="text-gray-400 text-[11px] font-serif italic leading-relaxed">
                {isScanning ? 'Mencocokkan tanda tangan neural... Tetap tenang.' : 'Masukkan email atau tempelkan jari Anda pada sensor biometrik untuk sinkronisasi NFT TM.'}
              </p>
            </div>

            <button 
              onClick={startScan}
              disabled={isScanning}
              className="w-full py-6 font-orbitron text-[11px] font-bold bg-yellow-600 hover:bg-yellow-500 text-black rounded-3xl transition-all disabled:opacity-50 uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(202,138,4,0.3)]"
            >
              {isScanning ? 'Synchronizing...' : 'Mulai Sinkronisasi'}
            </button>
          </>
        ) : (
          <div className="text-center py-12 animate-fadeIn">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
               <svg className="w-10 h-10 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="font-orbitron text-2xl text-white mb-4 tracking-widest uppercase">ID_GRANTED</h2>
            <p className="text-yellow-400/80 font-mono text-[10px] uppercase tracking-[0.3em] mb-12">
              Identity Verified: NFT TM Linked <br /> 
              Intonasi: Secure_Mode_Active
            </p>
            
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-yellow-500 w-full animate-progress-full"></div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes scan-y { 0% { transform: translateY(0); } 100% { transform: translateY(224px); } }
        .animate-scan-y { animation: scan-y 2.5s ease-in-out infinite alternate; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 1.5s ease-out forwards; }
        @keyframes progress-full { from { width: 0%; } to { width: 100%; } }
        .animate-progress-full { animation: progress-full 3s linear forwards; }
      `}</style>
    </div>
  );
};

export default AuthPage;
