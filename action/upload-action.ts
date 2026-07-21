"use server";

import { generateSummaryFromGeminiAi } from "@/lib/groq";
import { fetchAndExtractPdfText } from "@/lib/langchain";

export async function generatePdfSummary(
  uploadResponse: {
    serverData: {
      userId: string;
      url: string;
      name: string;
    };
  }[],
) {
  if (!uploadResponse) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }
  const { userId, url: pdfUrl, name: nameUrl } = uploadResponse[0].serverData;
  console.log("SERVER DATA", uploadResponse[0].serverData);

  if (!pdfUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);
    console.log("PDF Length:", pdfText.length);
    let summary;
    try {
      summary = await generateSummaryFromGeminiAi(pdfText);
      console.log("summary", { summary });
    } catch (error) {
      console.log(error);
      throw error;
    }

    if (!summary) {
      return {
        success: false,
        message: "Failed to generate summary",
        data: null,
      };
    }

    return {
      success: true,
      message: "Summary generated successfully",
      data: {
        summary
      }
    }
  } catch (err) {
    console.log("PDF ERRor:", err);
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }
}
