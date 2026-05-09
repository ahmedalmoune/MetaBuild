/*
* File: utils.ts
* Description: Utility/helper functions for the app.
* Author: Ahmed Almoune
* Date: 5/3/2026
* TODO add types to shit
*/

import { BuildFormProps, CardsGroupProps, CardProps } from "@/types/build-preferences";
import { API_ENDPOINT } from "@/constants/general";
import { FORM_FIELDS } from "@/constants/build-preferences";

export const formatCurrency = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0,
});

export async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>): Promise<void> {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const payload: BuildFormProps = {
    [FORM_FIELDS.budget]: Number(formData.get(FORM_FIELDS.budget)) as BuildFormProps["budget"],
    [FORM_FIELDS.purpose]: formData.get(FORM_FIELDS.purpose) as BuildFormProps["purpose"],
    [FORM_FIELDS.resolution]: formData.get(FORM_FIELDS.resolution) as BuildFormProps["resolution"],
    [FORM_FIELDS.features]: formData.getAll(FORM_FIELDS.features) as BuildFormProps["features"],
  };

  alert(JSON.stringify(payload));

  const res = await fetch(API_ENDPOINT.baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Request failed");
  const data = await res.json();
  console.log("API response:", data);
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