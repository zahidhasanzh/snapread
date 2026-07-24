"use client";

import { useState, useTransition } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteSummaryAction } from "@/action/summary-actions";

interface DeleteButtonProps {
  summaryId: string;
}

export default function DeleteButton({
  summaryId,
}: DeleteButtonProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  console.log("summaryId", summaryId);

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteSummaryAction(summaryId);

      if (!result.success) {
        toast.error("Error", {
          description: "Failed to delete summary",
        });
        return;
      }

      toast.success("Summary deleted successfully");
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--ink-soft)] cursor-pointer bg-[var(--paper)] border border-[var(--border)] hover:text-[var(--flag)] hover:bg-[color-mix(in_oklch,var(--flag),white_88%)]"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        }
      />

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-display">Delete Summary</DialogTitle>

          <DialogDescription className="text-[var(--ink-soft)]">
            Are you sure you want to delete this summary? This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose
            render={
              <Button
                variant="ghost"
                className="bg-[var(--paper)] border cursor-pointer border-[var(--border)] text-[var(--ink)] hover:bg-[var(--secondary)]"
              >
                Cancel
              </Button>
            }
          />

          <Button
            variant="destructive"
            className="bg-[var(--flag)] hover:bg-[var(--flag)]/85 text-[var(--paper-card)] cursor-pointer"
            disabled={isPending}
            onClick={handleDelete}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}