/*
* File: use-exchange-rates.ts
* Description: Custom hook for fetching and managing currency exchange rates.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates, getFallbackRates } from '@/utils/exchange-rates';
import { EXCHANGE_RATES } from '@/constants/general';

export function useExchangeRates() {
  return useQuery({
    queryKey: [EXCHANGE_RATES.key],
    queryFn: fetchExchangeRates,
    staleTime: EXCHANGE_RATES.cacheTime,
    gcTime: EXCHANGE_RATES.cacheTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,

    // Initial data just for while the request is loading
    initialData: getFallbackRates(),
    initialDataUpdatedAt: 0, // Marks the initial data as stale to trigger API fetch.
  });
}