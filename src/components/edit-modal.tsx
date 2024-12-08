"use client";

import { Modal } from "@/components/Modal";
import { AddForm } from "./add-form";
import { History } from "@/type/type";

export function EditModal({
  open,
  onClose,
  history,
}: {
  open: boolean;
  onClose: () => void;
  history: History;
}) {
  return (
    <Modal open={open} title="Add History" onClose={onClose}>
      <AddForm onClose={onClose} history={history} />
    </Modal>
  );
}
