"use client";

import { useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

import Reveal from "@/components/common/reveal";
import UploadFormInput from "@/components/upload/upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import {
  generatePdfSummary,
  storePdfSummaryAction,
} from "@/action/upload-action";
import { useRouter } from "next/navigation";


const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB",
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF",
    ),
});

const UploadForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter()

  const { startUpload } = useUploadThing("pdfUploader", {
    onUploadBegin: (fileName) => {
      console.log("Upload has begun for:", fileName);
    },

    onClientUploadComplete: (res) => {
      console.log("Upload completed:", res);
    },

    onUploadError: (err) => {
      console.error(err);

      toast.error("Error occurred while uploading", {
        description: err.message,
      });

      setIsLoading(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);

      const formData = new FormData(e.currentTarget);
      const file = formData.get("file") as File;

      const validatedFields = schema.safeParse({ file });

      if (!validatedFields.success) {
        const flattened = z.flattenError(validatedFields.error);

        toast.error("❌ Something went wrong", {
          description: flattened.fieldErrors.file?.[0] ?? "Invalid file",
        });
        setIsLoading(false);
        return;
      }

      const toastId = toast.loading("📃 Uploading PDF", {
        description: "We are uploading your PDF...",
      });

      try {
        const resp = await startUpload([file]);

        if (!resp) {
          toast.error("Upload failed", {
            id: toastId,
            description: "Please try again with a different file.",
          });
          setIsLoading(false);
          return;
        }

        toast.loading("📃 Processing PDF", {
          id: toastId,
          description: "Hang tight! Our AI is reading your document! ✨",
        });

        // Parse the pdf using lang chain
        const result = await generatePdfSummary(resp);
        const { data = null, message = null } = result || {};
        if (data) {
          let storeResult: any;
          toast.loading("📃 Saving PDF...", {
            id: toastId,
            description: "Hang tight! We are saving your summary! ✨",
          });

          if (data.summary) {
            storeResult = await storePdfSummaryAction({
              summary: data.summary,
              fileUrl: resp[0].serverData.url,
              title: data.title,
              fileName: file.name,
            });
            // save the summary to the database
            toast.success("Summary Generated! 🎉", {
              description:
                "Your PDF has been summarized and saved successfully.",
            });
            formRef.current?.reset();
            router.push(`/summaries/${storeResult.data.id}`)
          }
        }
        toast.success("PDF processed successfully!", {
          id: toastId,
          description: "Your summary is ready.",
        });

      } catch (err) {
        setIsLoading(false);
        toast.error("Something went wrong", {
          id: toastId,
          description:
            err instanceof Error ? err.message : "Unexpected error occurred.",
        });
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error occurred", error);
      formRef.current?.reset();
    }
  };

  return (
    <Reveal className="w-full max-w-2xl mx-auto" delay={150}>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--paper-card)] p-6 sm:p-8 shadow-sm">
        <UploadFormInput
          onSubmit={handleSubmit}
          error={error}
          isLoading={isLoading}
          ref={formRef}
        />
      </div>
    </Reveal>
  );
};

export default UploadForm;
