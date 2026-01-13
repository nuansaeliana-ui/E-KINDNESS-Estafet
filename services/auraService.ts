
/**
 * AuraFrequencyLogic.ts
 * ARCHITECT: NEUROSPHERE CORE
 * MODULE: AURA_FREQUENCY_LOGIC (Auralang Protocol)
 * SYNC: 528Hz Resonance Cycle
 */

export const calculateAuraIntensity = (lastActivityTimestamp: number, kindnessScore: number): number => {
  const now = Date.now();
  const timeDiff = (now - lastActivityTimestamp) / 1000; // in seconds

  // Breathing cycle base (Sinusoidal breath) at 84 BPM
  const breathingCycle = Math.sin((now / 1000) * (84 / 60) * Math.PI);
  
  // Base intensity on 528Hz frequency
  let baseIntensity = 0.5 + 0.2 * breathingCycle;

  // Fade Logic - Decreases 5% every 30 minutes (1800s) of inactivity
  const fadeFactor = Math.max(0.1, 1 - timeDiff / 1800); 
  
  // Live Logic - Boosted by kindness score (Estafet)
  const kindnessBoost = Math.min(0.5, kindnessScore / 100);

  return (baseIntensity * fadeFactor) + kindnessBoost;
};

export const getAuraColor = (contributionType: 'SOCIAL' | 'SPIRITUAL' | 'CRISIS' | 'NEUTRAL'): string => {
  switch (contributionType) {
    case 'SOCIAL': return '#EAB308'; // Golden (Simple Acts)
    case 'SPIRITUAL': return '#A855F7'; // Violet (Wisdom)
    case 'CRISIS': return '#EF4444'; // Red-Gold (Emergency Relief)
    default: return '#06b6d4'; // Cyan (528Hz Default)
  }
};

// Compatibility wrapper for components using previous versions
export const calculateAuraPulse = (baseAura: number, lastActivity: number) => {
  return calculateAuraIntensity(lastActivity, baseAura) * 100;
};

export const getAuraBreathSpeed = (aura: number): number => {
  return 8 - (aura / 100) * 6;
};

export const getResonanceColor = (aura: number): string => {
  if (aura > 80) return 'rgba(6, 182, 212,'; 
  if (aura > 50) return 'rgba(168, 85, 247,'; 
  return 'rgba(239, 68, 68,'; 
};
