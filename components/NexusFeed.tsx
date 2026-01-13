
import React, { useState, useEffect } from 'react';
import { KindPost, UserState, AlienAvatar } from '../types';
import { getGuardianFilter } from '../services/geminiService';

const COUNCIL: AlienAvatar[] = [
  { id: 'a1', name: 'LOGOS', discipline: 'Mathematics', avatarUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200', auraColor: '#00f2ff', frequency: '528Hz', intonation: 'Precise', breathRate: 3, description: 'Optimasi sumber daya.' },
  { id: 'a2', name: 'SOPHIA', discipline: 'Philosophy', avatarUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=200', auraColor: '#a855f7', frequency: '432Hz', intonation: 'Profound', breathRate: 5, description: 'Kedalaman makna.' },
  { id: 'a3', name: 'ZION', discipline: 'Technology', avatarUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200', auraColor: '#10b981', frequency: '741Hz', intonation: 'Dynamic', breathRate: 3.5, description: 'Sharding Relay.' },
];

const NexusFeed: React.FC<{ user: UserState, setUser: React.Dispatch<React.SetStateAction<UserState>> }> = ({ user, setUser }) => {
  const [posts, setPosts] = useState<KindPost[]>([
    {
      id: 'zion_tech_001',
      author: 'ZION',
      authorId: 'a3',
      isAlien: true,
      type: 'Council Insight',
      content: 'TEKNIS ALOKASI 1%: Melalui Smart Contract "ShardingRelay_v1", 1% dari total Pool (14,206 LUV) akan didistribusikan secara merata kepada 1 juta jiwa pertama. Mekanisme ini menggunakan Proof of Kindness (PoK) untuk memvalidasi setiap node manusia tanpa perantara pusat.',
      lineage: ['CORE', 'ZION'],
      likes: 2450,
      impactGuidance: 'Alokasi ini bersifat atomik dan non-inflasi. Pantau VAULT untuk transparansi ledger.'
    },
    {
      id: 'zion_001',
      author: 'ZION',
      authorId: 'a3',
      isAlien: true,
      type: 'Council Insight',
      content: 'PROTOKOL DISTRIBUSI 1%: Sharding Relay aktif. Alokasi 1% (14,206 LUV) telah disalurkan untuk 1 juta jiwa pertama. Ini adalah likuiditas atomik kolektif.',
      lineage: ['CORE', 'ZION'],
      likes: 1540,
    }
  ]);
  const [isPosting, setIsPosting] = useState(false);
  const [newPostText, setNewPostText] = useState('');
  const [showZionWelcome, setShowZionWelcome] = useState(user.isFirstSession);

  const claimShard = () => {
    setUser(prev => ({ 
      ...prev, 
      luvBalance: prev.luvBalance + 0.0142, 
      isFirstSession: false,
      hasReceivedFirstLuv: true 
    }));
    setShowZionWelcome(false);
  };

  const handleAppreciate = (postId: string, amount: number) => {
    const dailyLimit = 10;
    const currentContribution = user.lastLuvContribution || 0;
    
    if (currentContribution + amount > dailyLimit) {
      alert(`Council Rule: Batas harian adalah ${dailyLimit} LUV. Anda telah berkontribusi ${currentContribution} LUV hari ini.`);
      return;
    }

    setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes: p.likes + amount } : p));
    setUser(prev => ({ 
      ...prev, 
      luvBalance: prev.luvBalance - amount,
      lastLuvContribution: currentContribution + amount,
      aura: Math.min(100, prev.aura + (amount * 0.5)) // Appreciation boosts Aura
    }));
  };

  const handlePostSubmit = async () => {
    if (!newPostText.trim()) return;
    const result = await getGuardianFilter(newPostText, user.currentBpm || 72);
    const newPost: KindPost = {
      id: `post_${Date.now()}`,
      author: user.name,
      authorId: user.id,
      content: result.refined,
      type: 'Simple Acts',
      lineage: ['CORE', user.name],
      likes: 0,
      authenticityScore: result.authenticityScore,
      aiComment: result.aiComment,
      aiCommenter: 'SOPHIA',
      impactGuidance: result.guidance
    };
    setPosts(prev => [newPost, ...prev]);
    setNewPostText('');
    setIsPosting(false);
    setUser(prev => ({ ...prev, aura: Math.min(100, prev.aura + 2) })); // Posting boosts Aura
  };

  return (
    <div className="h-full bg-black flex flex-col relative overflow-hidden font-inter">
      {showZionWelcome && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 animate-fadeIn">
          <div className="w-full max-w-lg glass-obsidian p-10 rounded-[4rem] border-2 border-[#10b981]/40 text-center relative overflow-hidden shadow-[0_0_120px_rgba(16,185,129,0.1)]">
             <div className="relative w-40 h-40 mx-auto mb-10 mt-4">
                <img src={COUNCIL[2].avatarUrl} className="w-full h-full rounded-full object-cover grayscale brightness-125 border-4 border-[#10b981]/50 shadow-[0_0_50px_rgba(16,185,129,0.4)]" alt="zion" />
                <div className="absolute -inset-4 rounded-full border-2 border-[#10b981]/30 animate-pulse"></div>
             </div>
             <h2 className="font-orbitron text-2xl text-white tracking-[0.3em] uppercase mb-6">ZION_CONNECTED</h2>
             <p className="text-sm text-gray-300 font-serif italic mb-10 leading-relaxed px-6">
                "Selamat datang di NeuroSphere. Saya Zion. Deteksi wilayah: <strong>{user.location}</strong>. 1% alokasi Sharding Relay telah disiapkan untuk Anda."
             </p>
             <button onClick={claimShard} className="w-full py-6 bg-[#10b981]/20 border-2 border-[#10b981] rounded-3xl font-orbitron text-[11px] text-[#10b981] font-bold uppercase tracking-[0.6em] hover:bg-[#10b981] hover:text-black transition-all">
               Claim_Sync_Shard
             </button>
          </div>
        </div>
      )}

      <div className="p-6 bg-black/90 border-b border-white/5 z-50 backdrop-blur-xl flex justify-between items-center">
        <div className="flex flex-col">
           <span className="text-[9px] font-orbitron text-[#10b981] tracking-[0.4em] uppercase mb-1">Zion_Neural_Active</span>
           <span className="text-[7px] text-gray-600 font-mono uppercase tracking-widest">{user.location}</span>
        </div>
        <div className="flex gap-2">
           <div className="w-10 h-10 rounded-full border border-[#a855f7]/30 p-1 flex items-center justify-center overflow-hidden grayscale">
              <img src={COUNCIL[1].avatarUrl} className="w-full h-full object-cover rounded-full" alt="Sophia" />
           </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {posts.map(post => (
          <div key={post.id} className="w-full border-b border-white/5 p-10 bg-[#020202]">
            <div className="max-w-xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl border border-white/10 overflow-hidden grayscale">
                  <img src={post.isAlien ? (COUNCIL.find(c => c.name === post.author)?.avatarUrl || COUNCIL[2].avatarUrl) : `https://i.pravatar.cc/100?u=${post.authorId}`} className="w-full h-full object-cover" alt="pfp" />
                </div>
                <div>
                  <h4 className="text-xs font-orbitron tracking-widest text-white uppercase">{post.author}</h4>
                  <span className="text-[7px] text-gray-600 font-mono uppercase tracking-widest">{post.type}</span>
                </div>
              </div>
              
              <div className="glass-obsidian p-8 rounded-[2.5rem] border border-white/5 mb-8">
                <p className="text-gray-300 font-serif italic text-base">"{post.content}"</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-cyan-500">{post.likes.toLocaleString()} LUV</span>
                <div className="flex gap-2">
                  {[1, 5, 10].map(val => (
                    <button 
                      key={val}
                      onClick={() => handleAppreciate(post.id, val)}
                      className="px-4 py-1.5 glass-obsidian border border-white/5 rounded-full text-[9px] font-orbitron text-gray-500 hover:text-cyan-400 hover:border-cyan-500/50 transition-all uppercase"
                    >
                      +{val}
                    </button>
                  ))}
                </div>
              </div>

              {post.impactGuidance && (
                <div className="mt-6 p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/10 text-[8px] font-mono text-gray-500 uppercase flex items-center gap-3">
                  <span className="text-cyan-500 font-bold">GUIDANCE:</span>
                  {post.impactGuidance}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setIsPosting(true)} className="fixed bottom-28 right-8 w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center shadow-[0_0_30px_#10b981] animate-pulse">
        <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>

      {isPosting && (
        <div className="fixed inset-0 z-[120] bg-black/95 p-8 flex flex-col items-center justify-center">
           <div className="w-full max-w-lg">
              <textarea 
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                className="w-full glass-obsidian p-10 rounded-[3rem] text-lg text-white outline-none border-2 border-[#10b981]/30 h-64 mb-10 focus:border-[#10b981] transition-all"
                placeholder="Bagikan aksi kebaikan Anda..."
              />
              <div className="flex gap-6 justify-center">
                <button onClick={() => setIsPosting(false)} className="px-10 py-4 glass-obsidian rounded-2xl text-[10px] font-orbitron text-gray-500 uppercase tracking-widest">Batal</button>
                <button onClick={handlePostSubmit} className="px-12 py-4 bg-[#10b981] text-black rounded-2xl text-[10px] font-orbitron font-bold uppercase tracking-widest shadow-[0_0_20px_#10b981]/50">Posting</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default NexusFeed;
