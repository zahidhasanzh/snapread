// import { SUMMARY_SYSTEM_PROMPT } from "@/utils/promts";
// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: process.env.GROQ_API_KEY,
// });

// export async function generateSummaryFromGeminiAi(pdfText: string) {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash",
//       config: {
//         systemInstruction: SUMMARY_SYSTEM_PROMPT,
//         temperature: 0.7,
//         maxOutputTokens: 1500,
//       },
//       contents: [
//         {
//           role: "user",
//           parts: [
//             {
//               text: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formating:\n\n${pdfText}`,
//             },
//           ],
//         },
//       ],
//     });

//     return response.text;
//   } catch (error: any) {
//     if (error?.status === 429) {
//       throw new Error("RATE_LIMIT_EXCEEDED");
//     }
//     throw error;
//   }
// }


