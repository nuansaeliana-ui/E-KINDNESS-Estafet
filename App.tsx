
import React, { useState, useEffect } from 'react';
import { Page, UserState } from './types';
import SplashScreen from './components/SplashScreen';
import AuthPage from './components/AuthPage';
import NexusFeed from './components/NexusFeed';
import Heatmap from './components/Heatmap';
import Profile from './components/Profile';
import WisdomArchive from './components/WisdomArchive';
import SidebarNavigation from './components/SidebarNavigation';
import GovernanceVault from './components/GovernanceVault';
import NeuroBridge from './components/NeuroBridge';
import AiGuidanceHUD from './components/AiGuidanceHUD';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Splash);
  const [user, setUser] = useState<UserState>({
    id: 'neuro_01',
    name: 'Neo Kindness',
    aura: 88,
    luvBalance: 987.64,
    enpe: 420.69,
    indEur: 1250,
    dailyReward: 10,
    nftSync: true,
    bonusMultiplier: 10.5,
    estafetMultiplier: 12.5,
    currentBpm: 72,
    level: 4,
    location: 'Nairobi Hub (Crisis Node)',
    isFirstSession: true,
    hasReceivedFirstLuv: false
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setUser(prev => ({
        ...prev,
        currentBpm: 70 + Math.floor(Math.random() * 15)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentPage === Page.Splash) {
      const timer = setTimeout(() => setCurrentPage(Page.Auth), 4500);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Splash: return <SplashScreen />;
      case Page.Auth: return <AuthPage onAuthSuccess={() => setCurrentPage(Page.Nexus)} />;
      case Page.Nexus: return <NexusFeed user={user} setUser={setUser} />;
      case Page.Heatmap: return <Heatmap />;
      case Page.Profile: return <Profile user={user} />;
      case Page.Wisdom: return <WisdomArchive />;
      case Page.Vault: return <GovernanceVault />;
      case Page.Bridge: return <NeuroBridge user={user} />;
      default: return <NexusFeed user={user} setUser={setUser} />;
    }
  };

  const isGuidingPage = currentPage !== Page.Splash && currentPage !== Page.Auth;

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden selection:bg-cyan-500/30">
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      
      {isGuidingPage && (
        <AiGuidanceHUD 
          currentPage={currentPage} 
          user={user} 
          onCloseSophia={() => setUser(prev => ({ ...prev, hasReceivedFirstLuv: false }))} 
        />
      )}

      <main className="relative z-10 w-full h-full max-w-lg mx-auto md:max-w-none md:flex">
        {currentPage !== Page.Splash && currentPage !== Page.Auth && (
          <SidebarNavigation currentPage={currentPage} setPage={setCurrentPage} />
        )}
        <div className="flex-1 overflow-y-auto pb-20 md:pb-0 h-screen scrollbar-hide">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;
