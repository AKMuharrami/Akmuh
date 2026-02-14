import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize outside if key exists, or handle gracefully inside
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    }
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm having trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I seem to be offline temporarily. Please email Alex directly!";
  }
};
