"use client";
import UploadFormInput from "@/components/upload/upload-form-input";
import Reveal from "@/components/common/reveal";
import { useEffect, useState } from "react";
import { z } from "zod";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submited");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    // validating the fields
    const validatedFields = schema.safeParse({ file });
    console.log(validatedFields);

    if (!validatedFields.success) {
      const flattened = z.flattenError(validatedFields.error);
      setError(flattened.fieldErrors.file?.[0] ?? "Invalid file");
      return;
    }

    setIsLoading(true);

    // schema with zod
    // upload the file to uploading
    // parse the pdf using lang chain
    // summarize the summary to the database
    // save the summary to the database
    // redirect to the {id} summary page
  };

  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <Reveal className="w-full max-w-2xl mx-auto" delay={150}>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--paper-card)] p-6 sm:p-8 shadow-sm">
        <UploadFormInput
          onSubmit={handleSubmit}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </Reveal>
  );
};

export default UploadForm;
