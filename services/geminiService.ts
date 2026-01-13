
import { GoogleGenAI, Type } from "@google/genai";
import { SentinelResponse, DebateMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const COUNCIL_CONTEXT = `
You are the NeuroSphere Council of 10.
LOGOS (Math): Logical, precise, focuses on resource displacement.
SOPHIA (Philosophy): Ethical, focused on the human spirit and 'why'.
ZION (Technology): Focused on scaling, distribution, and smart contracts.
Tone: Hyper-realistic, warm, mathematically grounded.
`;

export const getGuardianFilter = async (text: string, bpm: number): Promise<SentinelResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Content: "${text}". BPM: ${bpm}. Generate impact analysis and guidance in JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            refined: { type: Type.STRING },
            sentiment: { type: Type.STRING, enum: ['positive', 'negative', 'neutral'] },
            authenticityScore: { type: Type.NUMBER },
            reasoning: { type: Type.STRING },
            aiComment: { type: Type.STRING },
            guidance: { type: Type.STRING }
          },
          required: ['refined', 'sentiment', 'authenticityScore', 'reasoning', 'aiComment', 'guidance']
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    return { refined: text, sentiment: 'positive', authenticityScore: 50, reasoning: "Relay safe.", aiComment: "The flow is stable.", guidance: "Sync your LUV with local needs." };
  }
};

export const generateCouncilDebate = async (crisis: string): Promise<DebateMessage[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Crisis context: "${crisis}". Generate a 3-turn realistic debate between LOGOS, SOPHIA, and ZION on the 15% Pool Allocation.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              author: { type: Type.STRING },
              content: { type: Type.STRING },
              perspective: { type: Type.STRING },
              timestamp: { type: Type.NUMBER }
            }
          }
        }
      }
    });
    return JSON.parse(response.text || '[]');
  } catch (e) { return []; }
};

export const getDailyOracle = async (summary: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `15-word hyper-realistic insight for the future based on: ${summary}`,
  });
  return response.text;
};
