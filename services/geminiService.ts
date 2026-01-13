
import { GoogleGenAI, Type } from "@google/genai";
import { SentinelResponse, DebateMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const COUNCIL_CONTEXT = `
You are the NeuroSphere Council of 10.
LOGOS (Math): Logical, precise, focuses on resource displacement.
SOPHIA (Philosophy): Ethical, focused on the human spirit and 'why'.
ZION (Technology): Focused on scaling, distribution, and smart contracts.
Filter Rule (NEUROSENTINEL): Reduce negativity, refine narative into Neurolang (a constructive, futuristic tone).
`;

export const getGuardianFilter = async (text: string, bpm: number): Promise<SentinelResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `NeuroSentinel Filter Request:
      Content: "${text}"
      User Heart Rate (BPM): ${bpm}
      Instruction: Refine this into positive "Neurolang" and generate impact analysis for a global kindness relay.`,
      config: {
        systemInstruction: COUNCIL_CONTEXT,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            refined: { type: Type.STRING, description: "The refined text in Neurolang tone." },
            sentiment: { type: Type.STRING, enum: ['positive', 'negative', 'neutral'] },
            authenticityScore: { type: Type.NUMBER, description: "Score from 0-100 based on emotional resonance." },
            reasoning: { type: Type.STRING, description: "Technical logic for the filter." },
            aiComment: { type: Type.STRING, description: "A warm comment from Sophia." },
            guidance: { type: Type.STRING, description: "Instruction on how to maximize this post's impact." }
          },
          required: ['refined', 'sentiment', 'authenticityScore', 'reasoning', 'aiComment', 'guidance']
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    return { refined: text, sentiment: 'positive', authenticityScore: 85, reasoning: "Relay safe.", aiComment: "Your energy flows well through the network.", guidance: "Sync your LUV with global needs via the Heatmap." };
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
    contents: `Channeled by SOPHIA: 15-word hyper-realistic insight for the future based on the world's kindness energy: ${summary}`,
  });
  return response.text;
};
