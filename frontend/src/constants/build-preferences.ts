/*
* File: build-preferences.ts
* Description: Build preferences constants.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import { BudgetProps, CardsGroupProps } from "@/types/build-preferences";

export const BUDGET: BudgetProps = {
  name: "budget", // name for the form field & URL query param
  min: 500,
  max: 3000,
  steps: 50,
  default: 1600
};

export const PURPOSES: CardsGroupProps = {
  type: "radio",
  heading: "Primary Purpose",
  name: "purpose",
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
}

export const RESOLUTIONS: CardsGroupProps = {
  type: "radio",
  heading: "Resolution",
  name: "resolution",
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
};

export const FEATURES: CardsGroupProps = {
  type: "checkbox",
  heading: "Special Features (beta)",
  name: "features",
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
};


