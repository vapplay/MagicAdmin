"use client"

import React from 'react';
import {
    LayoutGrid,
    Plus,
    BarChart3,
    Grip,
    Globe,
    LogOut,
    Book,
    Users2,
    Key,
    TableConfig,
    CassetteTape,
    Mic
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/components/providers/auth-provider';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Sidebar() {
    const { logout } = useAuth();
    const pathname = usePathname();

    const menuItems = [
        { icon: LayoutGrid, label: "Dashboard", path: "/dashboard", color: "text-blue-500" },
        { icon: Book, label: "New", path: "/dashboard/history", color: "text-orange-500" },
        { icon: Users2, label: "Stats", path: "/dashboard/users", color: "text-green-500" },
        { icon: CassetteTape, label: "Banner", path: "/dashboard/banner", color: "text-green-500" },
        { icon: Mic, label: "Custom", path: "/dashboard/custom-stories", color: "text-indigo-500" },
        { icon: TableConfig, label: "World", path: "/dashboard/config", color: "text-purple-500" },
    ];

    return (
        <aside className="fixed left-4 top-4 bottom-4 z-50 w-[70px] flex flex-col items-center bg-black rounded-[15px] py-3 shadow-2xl">

            <nav className="flex flex-col items-center gap-5 w-full">
                {menuItems.map((item, index) => {
                    const isActive = pathname === item.path;

                    return (
                        <Link
                            key={index}
                            href={item.path}
                            className={cn(
                                "flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ease-in-out",
                                isActive
                                    ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                    : "text-[#4A4A4A] hover:text-white hover:bg-white/10"
                            )}
                        >
                            <item.icon
                                strokeWidth={isActive ? 2.5 : 2}
                                className={cn("h-5 w-5", isActive ? item.color : "currentColor")}
                            />
                        </Link>
                    );
                })}
            </nav>

            <button
                onClick={logout}
                className="mt-auto flex h-11 w-11 items-center justify-center rounded-2xl text-[#4A4A4A] hover:text-white hover:bg-white/10 transition-all duration-300 ease-in-out bg-white"
                title="Cerrar sesión"
            >
                <LogOut className="h-5 w-5 text-red-500" strokeWidth={2} />
            </button>

        </aside>
    );
}