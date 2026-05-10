/*
* File: build-preferences.ts
* Description: Types for build preferences.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import { FORM_FIELDS } from "@/constants/build-preferences";
import { parseAsInteger, parseAsNativeArrayOf, parseAsString } from "nuqs";

export type FormFeildsProps = {
  budget: string;
  purpose: string;
  resolution: string;
  features: string;
}

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

export type CardsGroupProps = {
  type: "checkbox" | "radio";
  heading: string;
  name: typeof FORM_FIELDS.purpose | typeof FORM_FIELDS.resolution | 
    typeof FORM_FIELDS.features; //'purpose' | 'resolution' etc.
  cards: CardProps[];
};

export type BuildFormProps = {
  [FORM_FIELDS.budget]: number;
  [FORM_FIELDS.purpose]: string;
  [FORM_FIELDS.resolution]: string;
  [FORM_FIELDS.features]: string[];
};

//////////////////// check if this is correct
export type BuildQueryProps = {
  [FORM_FIELDS.budget]: typeof parseAsInteger;
  [FORM_FIELDS.purpose]: typeof parseAsString;
  [FORM_FIELDS.resolution]: typeof parseAsString;
  [FORM_FIELDS.features]: ReturnType<typeof parseAsNativeArrayOf<string>>;
};
