
import React from 'react';
import { UserState } from '../types';

interface NeuroBridgeProps {
  user: UserState;
}

const NeuroBridge: React.FC<NeuroBridgeProps> = ({ user }) => {
  const localMerchants = [
    { name: 'Pure Water Initiative', location: 'Nairobi, Kenya', cost: '10 LUV', category: 'Health' },
    { name: 'Seedlings of Hope', location: 'Jakarta, Indonesia', cost: '25 LUV', category: 'Ecology' },
    { name: 'Daily Bread Hub', location: 'Mumbai, India', cost: '15 LUV', category: 'Nutrition' },
  ];

  return (
    <div className="p-6 bg-[#050505] min-h-screen font-inter pb-24">
      <div className="mb-10 text-center">
        <h2 className="font-orbitron text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-cyan-400 tracking-[0.2em] uppercase">Neuro-Bridge</h2>
        <p className="text-[9px] text-gray-500 font-mono mt-2 tracking-widest uppercase">Digital_to_Physical_Relay_v1.0</p>
      </div>

      {/* Wallet Summary */}
      <div className="glass-obsidian p-6 rounded-[2.5rem] border border-white/10 mb-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-cyan-500/5"></div>
        <p className="text-[8px] font-orbitron text-gray-500 mb-2 tracking-[0.4em] uppercase">Redeemable Kind Currency</p>
        <h3 className="text-3xl font-bold font-mono text-white mb-2">{user.luvBalance.toFixed(2)} LUV</h3>
        <p className="text-[10px] text-cyan-400 font-mono">≈ {(user.luvBalance * 0.12).toFixed(2)} IND-EUR</p>
      </div>

      {/* Merchant Marketplace */}
      <div className="space-y-6">
        <div className="flex justify-between items-center px-2">
           <h3 className="text-[10px] font-orbitron text-gray-500 uppercase tracking-widest">Nearby Impact Hubs</h3>
           <button className="text-[8px] text-cyan-400 font-bold uppercase tracking-widest underline">Map View</button>
        </div>

        {localMerchants.map((merchant, i) => (
          <div key={i} className="glass-obsidian p-5 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-yellow-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                <span className="text-xl">{merchant.category === 'Health' ? '💧' : merchant.category === 'Ecology' ? '🌱' : '🍞'}</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-200">{merchant.name}</h4>
                <p className="text-[9px] text-gray-500 font-mono">{merchant.location}</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/50 rounded-xl text-[10px] font-bold text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
              {merchant.cost}
            </button>
          </div>
        ))}
      </div>

      {/* Bridge Protocol Note */}
      <div className="mt-12 p-6 rounded-3xl bg-black/50 border border-white/5 relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          <span className="text-[8px] font-orbitron text-green-400 uppercase tracking-widest">Bridge_Secure</span>
        </div>
        <p className="text-[10px] text-gray-500 leading-relaxed font-mono">
          "Each redemption triggered via Neuro-Bridge generates an immutable PoK hash on the Estafet Ledger. Rewards are proportional to your current Aura Resonance ({user.aura}%)."
        </p>
      </div>
    </div>
  );
};

export default NeuroBridge;
