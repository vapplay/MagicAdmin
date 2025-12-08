"use client"

import { AuthGuard } from "@/components/auth/auth-guard"
import { Sidebar } from "@/components/dashboard/sidebar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient()

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthGuard>
            <QueryClientProvider client={client}>
                <div className="min-h-screen">
                    <Sidebar />
                    <main className="pl-20">
                        <div className="mx-auto p-8">
                            {children}
                        </div>
                    </main>
                </div>
            </QueryClientProvider>
        </AuthGuard>
    )
}
