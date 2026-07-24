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
            className="text-gray-400 cursor-pointer bg-gray-50 border border-gray-200 hover:text-rose-600 hover:bg-rose-50"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        }
      />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Summary</DialogTitle>

          <DialogDescription>
            Are you sure you want to delete this summary? This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose
            render={
              <Button
                variant="ghost"
                className="bg-gray-50 border cursor-pointer border-gray-200 hover:text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </Button>
            }
          />

          <Button
            variant="destructive"
            className="bg-gray-900 hover:bg-gray-700 cursor-pointer"
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