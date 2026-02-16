
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateSEODescription = async (companyName: string, businessCategory: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a high-conversion, professional SEO description for a Korean company named ${companyName}. They specialize in ${businessCategory}. The tone should be authoritative and modern. Keep it under 160 characters. Language: Korean.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text?.trim() || "태봉강업은 최고의 기술력으로 H빔 강구조물을 제작 및 설치합니다.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "태봉강업은 신뢰와 기술력을 바탕으로 철구조물 제작 및 일반건축공사 서비스를 제공합니다.";
  }
};

export const suggestKeywords = async (category: string) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate 10 SEO keywords for a company doing ${category}. Keywords should be in Korean, comma-separated.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              keywords: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            }
          }
        },
      });
      const data = JSON.parse(response.text || '{"keywords": []}');
      return data.keywords.join(', ');
    } catch (error) {
      return "H빔, 강구조, 철골공사, 천안 건설, 철구조물 제작";
    }
}
