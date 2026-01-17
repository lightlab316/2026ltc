
import { GoogleGenAI, Type } from "@google/genai";
import { TripData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTripData = async (prompt: string): Promise<TripData> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a structured travel itinerary based on this request: "${prompt}". Respond ONLY in JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          destination: { type: Type.STRING },
          startDate: { type: Type.STRING },
          endDate: { type: Type.STRING },
          itinerary: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                day: { type: Type.INTEGER },
                date: { type: Type.STRING },
                items: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      time: { type: Type.STRING },
                      activity: { type: Type.STRING },
                      location: { type: Type.STRING },
                      note: { type: Type.STRING }
                    },
                    required: ["time", "activity", "location", "note"]
                  }
                }
              },
              required: ["day", "date", "items"]
            }
          },
          rooms: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                roomNumber: { type: Type.STRING },
                roomType: { type: Type.STRING },
                occupants: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["roomNumber", "roomType", "occupants"]
            }
          },
          meetings: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                time: { type: Type.STRING },
                location: { type: Type.STRING },
                description: { type: Type.STRING }
              },
              required: ["time", "location", "description"]
            }
          },
          notes: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                category: { type: Type.STRING },
                content: { type: Type.STRING }
              },
              required: ["category", "content"]
            }
          }
        },
        required: ["title", "destination", "startDate", "endDate", "itinerary", "rooms", "meetings", "notes"]
      }
    }
  });

  return JSON.parse(response.text || '{}') as TripData;
};
