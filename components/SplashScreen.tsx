
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 1000); // Point appears
    const timer2 = setTimeout(() => setPhase(2), 2000); // Explosion
    const timer3 = setTimeout(() => setPhase(3), 3500); // Teks Neurolang
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden px-4 text-center">
      {/* Singularity & Logo */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {phase >= 1 && (
          <div className={`absolute w-2 h-2 bg-yellow-400 rounded-full ${phase === 1 ? 'animate-ping' : 'scale-[10] blur-sm transition-transform duration-1000'}`}></div>
        )}
        
        {phase >= 2 && (
          <div className="relative z-10 flex flex-col items-center">
             <div className="w-32 h-32 border-4 border-yellow-500 rounded-full animate-spin-slow flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.5)]">
                <div className="w-16 h-16 bg-yellow-500 rounded-lg rotate-45 animate-pulse"></div>
             </div>
             <h1 className="mt-8 font-orbitron text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-600">
               NEUROSPHERE
             </h1>
          </div>
        )}

        {/* Floating Particles Simulation */}
        {phase === 2 && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-pulse"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(${(Math.random() - 0.5) * 400}px, ${(Math.random() - 0.5) * 400}px)`,
                  transition: 'transform 2s ease-out',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Neurolang Narrative */}
      <div className={`mt-20 h-10 transition-opacity duration-1000 ${phase === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-yellow-500/80 font-mono text-sm tracking-[0.2em] animate-pulse">
          IDENTITY INITIALIZED. <br />
          WELCOME TO THE NEURAL NETWORK OF KINDNESS.
        </p>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
