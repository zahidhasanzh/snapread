import { SUMMARY_SYSTEM_PROMPT } from "@/utils/promts";
import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const ai = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
  temperature: 0.7,
   maxTokens: 1500,
});

export async function generateSummaryFromGroqAi(pdfText: string) {
  try {
    const response = await ai.invoke([
      new SystemMessage(SUMMARY_SYSTEM_PROMPT),
      new HumanMessage(
        `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formating:\n\n${pdfText}`
      ),
    ]);

    return response.content;
  } catch (error: any) {
    if (error?.status === 429) {
      throw new Error("RATE_LIMIT_EXCEEDED");
    }
    throw error;
  }
}