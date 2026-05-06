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

// Represents the variables a radio card needs
export type RadioCardProps = {
  name: string;
  id: string;
  value: string;
  title: string;
  description: string;
  default?: boolean;
}