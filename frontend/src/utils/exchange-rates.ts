/*
* File: exchange-rates.ts
* Description: Utility functions for fetching and managing currency exchange rates.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import { COUNTRIES } from "@/constants/build-preferences";
import type { ExchangeRates } from "@/types/build-preferences";
import { toast } from "sonner";
import { ERROR_MESSAGES, API_ENDPOINTS } from "@/constants/general";
import { roundNumber } from "./general";
import  axios  from "axios";


// Returns fallback exchange rates
export function getFallbackRates(): ExchangeRates {
  const rates: ExchangeRates = {};
  COUNTRIES.forEach(country => {
    rates[country.currency] = country.exchangeRate;
  });
  return rates;
}

export async function fetchExchangeRates(): Promise<ExchangeRates> {  
  try {
    const response = await axios.get(API_ENDPOINTS.exchangeRates);
    const data = response.data;
    
    if (data.rates) {
      // Round all rates to 2 decimal places
      const roundedRates: ExchangeRates = {};
      for (const [currency, rate] of Object.entries(data.rates)) {
        roundedRates[currency] = roundNumber(rate as number);
      }
      return roundedRates;
    }
  } catch (error) {
    toast.error(ERROR_MESSAGES.exchangeRates);
  }
  
  // Return fallback rates if API fails
  return getFallbackRates();
}