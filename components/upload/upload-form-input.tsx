"use client";
import { Button } from "@/components/ui/button";
import { FileText, Loader2, UploadCloud } from "lucide-react";
import React, { forwardRef, useState } from "react";

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string | null;
  isLoading?: boolean;
}

const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(
  ({ onSubmit, error, isLoading }, ref) => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      setFileName(file ? file.name : null);
    };
    return (
      <form className="flex flex-col gap-4" onSubmit={onSubmit} ref={ref}>
        <label
          htmlFor="file"
          className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--paper-card)] px-6 py-12 text-center transition-colors hover:border-[var(--marigold-dark)] cursor-pointer"
        >
          {/* punch holes, tying back to the index-card motif */}
          <span className="punch-hole left-4 top-4" aria-hidden="true" />
          <span className="punch-hole right-4 top-4" aria-hidden="true" />

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--paper)] border border-[var(--border)] text-[var(--marigold-dark)] group-hover:scale-105 transition-transform">
            {fileName ? <FileText size={22} /> : <UploadCloud size={22} />}
          </div>

          <div>
            <p className="text-sm font-medium text-[var(--ink)]">
              {fileName ? fileName : "Drop your PDF here, or click to browse"}
            </p>
            <p className="mt-1 font-doc-mono text-xs text-[var(--ink-soft)]">
              PDF, up to 20MB
            </p>
          </div>

          <input
            id="file"
            type="file"
            name="file"
            accept="application/pdf"
            required
            onChange={handleFileChange}
            disabled={isLoading}
            className={`absolute inset-0 h-full w-full cursor-pointer opacity-0 ${isLoading && "opacity-50"}`}
          />
        </label>

        {error && (
          <p className="font-doc-mono text-xs text-[var(--flag)] text-center">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="bg-[var(--ink)] text-[var(--paper-card)] hover:bg-[var(--ink)]/90 rounded-md px-7 py-6 text-base font-medium shadow-none w-full sm:w-auto sm:self-center disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Reading your
              PDF…...
            </>
          ) : (
            "Upload your PDF"
          )}
        </Button>
      </form>
    );
  },
);

// const UploadFormInput = ({ onSubmit, error, isLoading}: UploadFormInputProps) => {
//   const [fileName, setFileName] = useState<string | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     setFileName(file ? file.name : null);
//   };

//   return (
//     <form className="flex flex-col gap-4" onSubmit={onSubmit}>
//       <label
//         htmlFor="file"
//         className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--paper-card)] px-6 py-12 text-center transition-colors hover:border-[var(--marigold-dark)] cursor-pointer"
//       >
//         {/* punch holes, tying back to the index-card motif */}
//         <span className="punch-hole left-4 top-4" aria-hidden="true" />
//         <span className="punch-hole right-4 top-4" aria-hidden="true" />

//         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--paper)] border border-[var(--border)] text-[var(--marigold-dark)] group-hover:scale-105 transition-transform">
//           {fileName ? <FileText size={22} /> : <UploadCloud size={22} />}
//         </div>

//         <div>
//           <p className="text-sm font-medium text-[var(--ink)]">
//             {fileName ? fileName : "Drop your PDF here, or click to browse"}
//           </p>
//           <p className="mt-1 font-doc-mono text-xs text-[var(--ink-soft)]">
//             PDF, up to 20MB
//           </p>
//         </div>

//         <input
//           id="file"
//           type="file"
//           name="file"
//           accept="application/pdf"
//           required
//           onChange={handleFileChange}
//           className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
//         />
//       </label>

//       {error && (
//         <p className="font-doc-mono text-xs text-[var(--flag)] text-center">
//           {error}
//         </p>
//       )}

//       <Button
//         type="submit"
//         disabled={isLoading}
//         className="bg-[var(--ink)] text-[var(--paper-card)] hover:bg-[var(--ink)]/90 rounded-md px-7 py-6 text-base font-medium shadow-none w-full sm:w-auto sm:self-center disabled:opacity-60"
//       >
//         {isLoading ? "Reading your PDF…" : "Upload your PDF"}
//       </Button>
//     </form>
//   );
// };

UploadFormInput.displayName = "UploadFormInput";

export default UploadFormInput;
