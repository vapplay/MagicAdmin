"use client";

import { Modal } from "@/components/Modal";
import { AddForm } from "./add-form";

export function AddModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} title="Add History" onClose={onClose}>
      <AddForm onClose={onClose} />
    </Modal>
  );
}
