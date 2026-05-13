/*
* File: general.ts
* Description: Utility/helper functions for the app.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import type { CardsGroupProps, CardProps, CountryProps } from "@/types/build-preferences";
import { COUNTRIES } from "@/constants/build-preferences";

export function getSelectedCountry(countryCode: CountryProps["code"]): CountryProps | undefined {
  return COUNTRIES.find(country => country.code === countryCode);
}

export function formatCurrency(amount: number, countryCode: CountryProps["code"]): string {
  const country = getSelectedCountry(countryCode);
  const locale = country?.locale;
  const currency = country?.currency;
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
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