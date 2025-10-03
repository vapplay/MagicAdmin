'use client';

import { Outfit } from 'next/font/google';
import './globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthGuard from '@/components/Auth/AuthGuard';

const outfit = Outfit({
  subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <AuthGuard>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <SidebarProvider>{children}</SidebarProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </AuthGuard>
      </body>
    </html>
  );
}
