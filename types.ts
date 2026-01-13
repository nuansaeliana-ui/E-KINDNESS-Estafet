
export interface UserState {
  id: string;
  name: string;
  aura: number;
  luvBalance: number;
  enpe: number;
  indEur: number;
  dailyReward: number;
  nftSync: boolean;
  bonusMultiplier: number;
  estafetMultiplier: number;
  currentBpm?: number; 
  level: number;
  location?: string;
  isFirstSession?: boolean;
  hasReceivedFirstLuv?: boolean;
  guidanceActive: boolean;
  lastLuvContribution?: number;
}

export interface AlienAvatar {
  id: string;
  name: string;
  discipline: string;
  avatarUrl: string;
  auraColor: string;
  frequency: string;
  intonation: string;
  breathRate: number; // in seconds
  description: string;
}

export interface DebateMessage {
  author: string;
  content: string;
  perspective: 'Mathematical' | 'Philosophical' | 'Ethical' | 'Technical' | 'Ecological' | 'Artistic';
  timestamp: number;
}

export interface KindPost {
  id: string;
  author: string;
  authorId: string;
  content: string;
  type: 'Simple Acts' | 'Spiritual' | 'Estafet Stories' | 'Council Insight';
  lineage: string[];
  likes: number;
  isAlien?: boolean;
  authenticityScore?: number;
  aiComment?: string;
  aiCommenter?: string;
  aiCommenterId?: string;
  impactGuidance?: string;
}

export interface SentinelResponse {
  refined: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  authenticityScore: number;
  reasoning: string;
  aiComment?: string;
  guidance: string;
}

export enum Page {
  Splash = 'splash',
  Auth = 'auth',
  Nexus = 'nexus',
  Heatmap = 'heatmap',
  Profile = 'profile',
  Wisdom = 'wisdom',
  Vault = 'vault',
  Bridge = 'bridge'
}
