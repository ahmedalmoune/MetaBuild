/*
* File: providers.tsx
* Description: All the providers for the app.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import BootstrapClient from '@/utils/bootstrapclient';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

const queryClient = new QueryClient();

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        {children}
        
        <Toaster position="bottom-right" />
        <BootstrapClient />
      </NuqsAdapter>
    </QueryClientProvider>
  );
}