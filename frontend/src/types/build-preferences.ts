/*
* File: build-preferences.ts
* Description: Build preferences types.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

export interface BudgetProps {
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
}

export type CardsGroupProps = {
  type: "checkbox" | "radio";
  heading: string;
  name: string;
  cards: CardProps[];
};

export interface BuildFormProps {
  budget: number;
  purpose: string;
  resolution: string;
  features: string[];
}
