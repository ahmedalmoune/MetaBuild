/*
* File: build-preferences.ts
* Description: Types for build preferences.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import { parseAsString } from "nuqs";
import { FORM_FIELDS } from "@/constants/build-preferences";
import { parseAsInteger, parseAsNativeArrayOf } from "nuqs";

export type BudgetProps = {
  min: number;
  max: number;
  steps: number;
  default: number;
} 

// Represents the variables of a radio or checkbox card
export type CardProps = {
  id: string;
  value: string;
  title: string;
  description: string;
  default?: boolean;
};

// check if this is correct
export type CardsGroupProps = {
  type: "checkbox" | "radio";
  heading: string;
  name: typeof FORM_FIELDS.purpose | typeof FORM_FIELDS.resolution | typeof FORM_FIELDS.features;
  cards: CardProps[];
};

export type BuildFormProps = {
  [FORM_FIELDS.budget]: number;
  [FORM_FIELDS.purpose]: string;
  [FORM_FIELDS.resolution]: string;
  [FORM_FIELDS.features]: string[];
}

//////////////////// check if this is correct
export type BuildQueryProps = {
  [FORM_FIELDS.budget]: ReturnType<typeof parseAsInteger.withDefault>;
  [FORM_FIELDS.purpose]: ReturnType<typeof parseAsString.withDefault>;
  [FORM_FIELDS.resolution]: ReturnType<typeof parseAsString.withDefault>;
  [FORM_FIELDS.features]: ReturnType<typeof parseAsNativeArrayOf<string>>;
};
