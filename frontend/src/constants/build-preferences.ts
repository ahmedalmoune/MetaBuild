/*
* File: build-preferences.ts
* Description: Build preferences constants.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import type { BudgetProps, CardsGroupProps, FormFieldsProps } from "@/types/build-preferences";

// Names for the form fields, URL query params, and API request body
export const FORM_FIELDS = {
  budget: "budget",
  purpose: "purpose",
  resolution: "resolution",
  features: "features",
} as const satisfies FormFeildsProps;

export const BUDGET = {
  min: 500,
  max: 3000,
  steps: 50,
  default: 1600
} as const satisfies BudgetProps;

export const PURPOSES = {
  type: "radio",
  heading: "Primary Purpose",
  name: FORM_FIELDS.purpose,
  cards: [
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
    }
  ]
} as const satisfies CardsGroupProps;

export const RESOLUTIONS = {
  type: "radio",
  heading: "Resolution",
  name: FORM_FIELDS.resolution,
  cards: [
    {
      id: "resolution-1080p",
      value: "1080p",
      title: "1080p",
      description: "Full HD, high fps",
    },
    {
      id: "resolution-1440p",
      value: "1440p",
      title: "1440p",
      description: "2K, balanced",
      default: true
    },
    {
      id: "resolution-2160p",
      value: "2160p",
      title: "2160p",
      description: "4K, high visual quality"
    }
  ]
} as const satisfies CardsGroupProps;

export const FEATURES = {
  type: "checkbox",
  heading: "Special Features (beta)",
  name: FORM_FIELDS.features,
  cards: [
    {
      id: "feature-silent",
      value: "silent",
      title: "Silent",
      description: "Low-noise cooling solution"
    },
    {
      id: "feature-compact",
      value: "compact",
      title: "Compact",
      description: "Small form-factor components"
    },
    {
      id: "feature-upgradable",
      value: "upgradable",
      title: "Upgradable",
      description: "Upgradable components build"
    },
    {
      id: "feature-futureproof",
      value: "futureproof",
      title: "Future-Proof",
      description: "Future-proof components"
    }
  ]
} as const satisfies CardsGroupProps;


