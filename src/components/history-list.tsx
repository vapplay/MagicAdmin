import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MoreVerticalIcon, PencilIcon, TrashIcon } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Switch } from "./ui/switch";
import { PreviewHistory } from "./Preview-History";
import { AllHistory, deleteHistory, toggleActive, togglePremium } from "@/api";
import { FilterHistory } from "./Filter-History";
import DeleteConfirmationModal from "./dleteConfirmModal";
import { toast } from "sonner";
import { EditModal } from "./edit-modal";
import { History } from "@/type/type";

const image = "https://magicuentos.com.co/storage/MagiCLI/images/";

const headers = [
  { id: "name", label: "Name" },
  { id: "description", label: "Description" },
  { id: "type", label: "Type" },
  { id: "isPremium", label: "Premium" },
  { id: "active", label: "Active" },
  { id: "more", label: "More" },
];

const typeNumber = [
  {
    value: 2,
    label: "🎭 Iconic",
  },
  {
    value: 1,
    label: "📚 History",
  },
  {
    value: 3,
    label: "🎵 Song",
  },
  {
    value: 4,
    label: "👨‍👩‍👧‍👦 Customers",
  },
];

export const HistoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [Open, setOpen] = useState(false);
  const [history, setHistory] = useState<History[]>([]);
  const [filteredHistory, setFilteredHistory] = useState<History[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(15);
  const [confirmDeleteModal, seTconfirmDeleteModal] = useState(false);
  const [deleteSelectItem, setDeleteSelectItem] = useState({
    id: "",
    name: "",
  });

  const [selectEditItem, setSelectEditItem] = useState<History>({
    id: "",
    name_es: "",
    name_en: "",
    name_pt: "",
    description_en: "",
    description_es: "",
    description_pt: "",
    youtube: "",
    poster: "",
    cover: "",
    type: 1,
    isPremium: false,
    song: "",
    active: false,
    createdAt: "",
    updatedAt: "",
  });

  const [editToggleModal, setEditToggleModal] = useState(false);

  // filter
  const [filter, setFilter] = useState({
    type: 0,
    active: false,
    premium: false,
    search: "",
  });

  useEffect(() => {
    (async () => {
      const response = await AllHistory();
      setHistory(response);
    })();
  }, []);

  // Calcular las páginas totales
  const totalPages = Math.ceil(history?.length / itemsPerPage);

  // Manejar el cambio de página
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Dividir los elementos por página
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredHistory?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  //? delete method

  const handleDelete = async () => {
    try {
      if (deleteSelectItem?.id !== "") {
        await deleteHistory(deleteSelectItem.id);
        toast.success("Historial eliminado correctamente");
      }
    } catch (error) {
      console.error("Error al eliminar el historial:", error);
      toast.error("Error al eliminar el historial");
    } finally {
      window.location.reload();
    }
  };

  useEffect(() => {
    const filteredHistory = () => {
      let filteredItems = history;

      if (filter.type !== 0) {
        filteredItems = filteredItems?.filter(
          (item) => item.type === filter.type
        );
      }

      if (filter.active) {
        filteredItems = filteredItems.filter((item) => item.active);
      }

      if (filter.premium) {
        filteredItems = filteredItems.filter((item) => item.isPremium);
      }

      if (filter.search !== "") {
        filteredItems = filteredItems.filter((item) =>
          item.name_es.toLowerCase().includes(filter.search.toLowerCase())
        );
      }
      setFilteredHistory(filteredItems);
    };

    filteredHistory();
  }, [history, filter]);

  return (
    <div className="flex flex-col gap-4">
      <FilterHistory
        onTypeChange={(value) => setFilter({ ...filter, type: value })}
        onActiveChange={(value) => setFilter({ ...filter, active: value })}
        onPremiumChange={(value) => setFilter({ ...filter, premium: value })}
        onSearchChange={(value) => setFilter({ ...filter, search: value })}
        onItemsPerPageChange={(value) => setItemsPerPage(value)}
        onClose={() => setOpen(false)}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Poster</TableHead>
            {headers.map((header) => (
              <TableHead key={header.id}>{header.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src={`${image}${item.poster}`}
                    alt={item.name_es}
                  />
                </Avatar>
              </TableCell>
              <TableCell>{item.name_es}</TableCell>
              <TableCell className="text-sm">{item.description_es}</TableCell>
              <TableCell className="whitespace-nowrap">
                {item.type === 2 ? typeNumber[0].label : typeNumber[1].label}
              </TableCell>
              <TableCell>
                <Switch
                  checked={item.isPremium}
                  onCheckedChange={async (checked) =>
                    (await togglePremium(item.id, checked)) &&
                    window.location.reload()
                  }
                />
              </TableCell>
              <TableCell>
                <Switch
                  checked={item.active}
                  onCheckedChange={async (checked) =>
                    (await toggleActive(item.id, checked)) &&
                    window.location.reload()
                  }
                />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <MoreVerticalIcon className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="cursor-pointer">
                    <DropdownMenuItem
                      onClick={() => {
                        if (item) {
                          setSelectEditItem(item);
                          setEditToggleModal(true);
                        }
                      }}
                    >
                      <PencilIcon />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        if (item?.id && item?.name_es) {
                          setDeleteSelectItem({
                            id: item?.id,
                            name: item?.name_es,
                          });
                        }
                        seTconfirmDeleteModal(true);
                      }}
                    >
                      <TrashIcon />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <DeleteConfirmationModal
        name={deleteSelectItem?.name}
        open={confirmDeleteModal}
        setOpen={seTconfirmDeleteModal}
        onDelete={handleDelete}
        onCancel={() => console.log("cancel")}
      />

      <EditModal
        history={selectEditItem}
        open={editToggleModal}
        onClose={() => setEditToggleModal(false)}
      />
    </div>
  );
};
