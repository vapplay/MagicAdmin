import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";
import { EraserIcon } from "lucide-react";

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-2 p-3 ${className}`}>{children}</div>
  );
};

const TypeOptions = [
  { value: 0, label: "🤓 All" },
  { value: 2, label: "🎭 Iconic" },
  { value: 1, label: "📚 History" },
  { value: 3, label: "🎵 Song" },
  { value: 4, label: "👨‍👩‍👧‍👦 Customers" },
];

type Props = {
  onClose: () => void;
  onTypeChange: (value: number) => void;
  onActiveChange: (value: boolean) => void;
  onPremiumChange: (value: boolean) => void;
  onSearchChange: (value: string) => void;
  onItemsPerPageChange: (value: number) => void;
};

const itemsPerPageOptions = [
  { value: 15, label: "15" },
  { value: 30, label: "30" },
  { value: 50, label: "50" },
];

export const FilterHistory: React.FC<Props> = ({
  onTypeChange,
  onActiveChange,
  onPremiumChange,
  onSearchChange,
  onItemsPerPageChange,
}) => {
  const [selectedType, setSelectedType] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);
  const [premium, setPremium] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(itemsPerPageOptions[0]?.value);

  const handleTypeChange = (value: string) => {
    const typeValue = parseInt(value, 10);
    setSelectedType(typeValue);
    onTypeChange(typeValue);
  };

  const handleActiveChange = (checked: boolean) => {
    setActive(checked);
    onActiveChange(checked);
  };

  const handlePremiumChange = (checked: boolean) => {
    setPremium(checked);
    onPremiumChange(checked);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    onSearchChange(value);
  };

  const handleClearFilter = () => {
    setSelectedType(undefined as any);
    setActive(false);
    setPremium(false);
    setSearch("");
    onTypeChange(0);
    onActiveChange(false);
    onPremiumChange(false);
    onSearchChange("");
  };

  const handleItemsPerPageChange = (value: string) => {
    const itemsPerPageValue = parseInt(value, 10);
    setItemsPerPage(itemsPerPageValue);
    onItemsPerPageChange(itemsPerPageValue);
  };

  return (
    <Card className="shadow-sm">
      <div className="flex flex-wrap gap-4 justify-start">
        {/* Type Filter */}
        <Box>
          <label className="text-sm font-semibold">Type</label>
          <Select value={String(selectedType)} onValueChange={handleTypeChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              {TypeOptions.map((item) => (
                <SelectItem
                  key={item.value}
                  value={String(item.value)}
                  defaultValue={0}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Box>

        {/* Active Filter */}
        <Box>
          <label className="text-sm font-semibold">Active</label>
          <Switch checked={active} onCheckedChange={handleActiveChange} />
        </Box>

        {/* Premium Filter */}
        <Box>
          <label className="text-sm font-semibold">Premium</label>
          <Switch checked={premium} onCheckedChange={handlePremiumChange} />
        </Box>

        {/* Search Filter */}
        <Box>
          <label className="text-sm font-semibold">Search</label>
          <Input
            value={search}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
        </Box>

        {/* Clear Filter */}
        <Box className="flex items-center">
          <label className="text-sm font-semibold">Clear Filter</label>
          <button onClick={handleClearFilter}>
            <EraserIcon />
          </button>
        </Box>

        {/* Total items per page */}
        <Box className="flex items-center">
          <label className="text-sm font-semibold">Total items per page</label>
          <Select value={String(itemsPerPage)} onValueChange={handleItemsPerPageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Items Per Page" />
            </SelectTrigger>
            <SelectContent>
              {itemsPerPageOptions.map((item) => (
                <SelectItem key={item.value} value={String(item.value)}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Box>
      </div>
    </Card>
  );
};
