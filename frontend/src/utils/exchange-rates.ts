import { COUNTRIES } from "@/constants/build-preferences";

const CACHE_KEY = 'exchange_rates';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface CachedRates {
  rates: Record<string, number>;
  timestamp: number;
}

export function getFallbackRates(): Record<string, number> {
  const rates: Record<string, number> = {};
  COUNTRIES.forEach(country => {
    rates[country.currency] = country.exchangeRate;
  });
  return rates;
}

export function getCachedRates(): Record<string, number> | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const data: CachedRates = JSON.parse(cached);
    const now = Date.now();
    
    // Return if cache is still valid
    if (now - data.timestamp < CACHE_DURATION) {
      return data.rates;
    }
    
    // Cache expired, remove it
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch {
    return null;
  }
}

export function setCachedRates(rates: Record<string, number>): void {
  if (typeof window === 'undefined') return;
  
  try {
    const data: CachedRates = {
      rates,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

export async function fetchExchangeRates(): Promise<Record<string, number>> {
  // Try to get cached rates first
  const cachedRates = getCachedRates();
  if (cachedRates) {
    return cachedRates;
  }
  
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    const data = await response.json();
    
    if (data.rates) {

      // Round all rates to 2 decimal places
      const roundedRates: Record<string, number> = {};
      for (const [currency, rate] of Object.entries(data.rates)) {
        roundedRates[currency] = Math.round((rate as number) * 100) / 100;
      }

      // Cache the successful response
      setCachedRates(roundedRates);
      return roundedRates;
    }
  } catch (error) {
    console.warn('Failed to fetch exchange rates, using fallback:', error);
  }
  
  // Return fallback rates if API fails
  return getFallbackRates();
}