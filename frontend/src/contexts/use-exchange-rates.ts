import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates, getFallbackRates } from '@/utils/exchange-rates';

export function useExchangeRates() {
  return useQuery({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    gcTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: getFallbackRates(),
  });
}