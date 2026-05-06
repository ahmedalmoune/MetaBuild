/*
* File: build-preferences.ts
* Description: Build preferences constants.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import { PurposeProps } from "@/types/build-preferences";

export const BUDGET = {
  min: 500,
  max: 3000,
  steps: 50,
  default: 1600
};

export const PURPOSES: PurposeProps[] = [
  {
    id: "purpose-gaming",
    value: "gaming",
    title: "Gaming",
    description: "Competitive gaming, casual gaming, general use",
    default: true
  },
  {
    id: "purpose-content-creation",
    value: "contentCreation",
    title: "Content Creation",
    description: "Recording, streaming, video editing"
  },
  {
    id: "purpose-productivity",
    value: "productivity",
    title: "Productivity",
    description: "Multi-tasking, 3D rendering, animation production"
  },
];
