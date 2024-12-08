import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AddButton({
  onClick,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <Button onClick={onClick}>
      <PlusIcon /> add new history
    </Button>
  );
}
