/*
* File: utils.ts
* Description: Utility/helper functions for the app.
* Author: Ahmed Almoune
* Date: 5/3/2026
* TODO add types to shit
*/

import { CardsGroupProps, CardProps } from "@/types/build-preferences";

export const formatCurrency = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0,
}) as Intl.NumberFormat;

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