
import React, { useState, useEffect } from 'react';
import { getDailyOracle } from '../services/geminiService';

const WisdomArchive: React.FC = () => {
  const [oracleMessage, setOracleMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [oracleAvatar, setOracleAvatar] = useState({ name: 'SOPHIA', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=200' });

  useEffect(() => {
    const fetchOracle = async () => {
      setLoading(true);
      const msg = await getDailyOracle("User helping the ecosystem.");
      setOracleMessage(msg);
      setLoading(false);
    };
    fetchOracle();
  }, []);

  return (
    <div className="p-8 bg-black min-h-screen relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-lg text-center mt-8">
        <h2 className="font-orbitron text-xl text-purple-400 mb-12 tracking-[0.4em] uppercase">Wisdom Council Archive</h2>

        {/* Personalisasi Oracle dengan Avatar */}
        <div className="glass-obsidian p-10 rounded-[3.5rem] border border-purple-500/20 shadow-2xl mb-12 relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
             <div className="relative w-24 h-24 rounded-full p-1 bg-black border border-purple-500/30">
                <img src={oracleAvatar.url} className="w-full h-full rounded-full object-cover grayscale brightness-110" alt="oracle" />
                <div className="absolute -inset-2 rounded-full border-2 border-purple-500/40 animate-pulse"></div>
             </div>
          </div>
          
          <div className="mt-12">
            <span className="text-[10px] font-orbitron text-purple-500/70 mb-6 block tracking-widest uppercase">Channeled by {oracleAvatar.name}</span>
            {loading ? (
              <div className="animate-pulse space-y-3">
                 <div className="h-2 bg-purple-500/10 rounded-full w-3/4 mx-auto"></div>
                 <div className="h-2 bg-purple-500/10 rounded-full w-1/2 mx-auto"></div>
              </div>
            ) : (
              <p className="text-lg font-light italic text-gray-200 leading-relaxed font-serif">
                "{oracleMessage}"
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
           <h3 className="text-left font-orbitron text-[9px] text-gray-600 uppercase tracking-widest px-4">Council Consensus History</h3>
           <div className="glass-obsidian p-6 rounded-3xl border-l-4 border-purple-500/40 text-left">
              <p className="text-xs text-gray-400 mb-2">"True wealth is the reflection of the light you give to others."</p>
              <span className="text-[8px] font-orbitron text-purple-400 tracking-widest uppercase">— LOGOS X SOPHIA SYNC</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WisdomArchive;
