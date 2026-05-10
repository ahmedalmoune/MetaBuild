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

// Represents the attributes of an individual radio or checkbox card
export type CardProps = {
  id: string;
  value: string;
  title: string;
  description: string;
  default?: boolean;
};

// Represents a group of radio or checkbox cards for a specific requirement e.g. resolution
export type CardsGroupProps = {
  type: "checkbox" | "radio";
  heading: string;
  name: typeof FORM_FIELDS.purpose | typeof FORM_FIELDS.resolution | 
    typeof FORM_FIELDS.features; //'purpose' | 'resolution' etc.
  cards: CardProps[];
};

// Represents the payload sent to the server API
export type BuildApiProps = {
  [FORM_FIELDS.budget]: number;
  [FORM_FIELDS.purpose]: string;
  [FORM_FIELDS.resolution]: string;
  [FORM_FIELDS.features]: string[];
};

// Represents the query params for the URL
export type BuildQueryProps = {
  [FORM_FIELDS.budget]: ReturnType<typeof parseAsInteger.withDefault>;
  [FORM_FIELDS.purpose]: ReturnType<typeof parseAsString.withDefault>;
  [FORM_FIELDS.resolution]: ReturnType<typeof parseAsString.withDefault>;
  [FORM_FIELDS.features]: ReturnType<ReturnType<typeof parseAsNativeArrayOf<string>>['withDefault']>;
};
