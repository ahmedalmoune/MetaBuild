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

const queryClient = new QueryClient();

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      
      <Toaster position="bottom-right" />
      <BootstrapClient />
    </QueryClientProvider>
  );
}