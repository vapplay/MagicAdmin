import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export const PreviewHistory = ({
  id,
  open,
  onClose,
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
}: {
  id?: string;
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}) => {
  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {id && (
          <div className="mt-4">
            <p>Previewing item with ID: <strong>{id}</strong></p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
