/*
* File: general.ts
* Description: Utility/helper functions for the app.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import type { CardsGroupProps, CardProps, CountryProps } from "@/types/build-preferences";
import { COUNTRIES, DEFAULT_COUNTRY } from "@/constants/build-preferences";

// Get the country object from the country code
export function getCountryObject(countryCode: CountryProps["code"]): CountryProps | undefined {
  return COUNTRIES.find(country => country.code === countryCode);
}

// Get value(s) of default card(s) in a card group
export function getDefaultCard<T extends CardProps["value"] | CardProps["value"][]>(cardGroup: CardsGroupProps): T {
  if (cardGroup.type === "radio") {
    return (cardGroup.cards.find((card) => card.default)?.value || "") as T;
  }
  else if (cardGroup.type === "checkbox") {
    const defaultCards = cardGroup.cards.filter((card) => card.default);
    return defaultCards.map((card) => card.value) as T;
  }
  return "" as T;
}

// Format currency based on country
export function formatCurrency(amount: number, countryCode: CountryProps["code"], rates: Record<string, number>): string {
  debugger;
  const country = getCountryObject(countryCode) || DEFAULT_COUNTRY;
  const currency = country.currency;
  
  
  const exchangeRate = rates[currency] || country.exchangeRate;
  const convertedAmount = amount * exchangeRate;
  
  return new Intl.NumberFormat(DEFAULT_COUNTRY.locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(convertedAmount);
}