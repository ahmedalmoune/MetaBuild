/*
* File: build-preferences.ts
* Description: Build preferences constants.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import type { BudgetProps, CardsGroupProps, FormFieldsProps, CountryProps } from "@/types/build-preferences";

// The names for the form fields, URL query params, and API request body
export const FORM_FIELDS = {
  country: "country",
  budget: "budget",
  purpose: "purpose",
  resolution: "resolution",
  features: "features",
} as const satisfies FormFieldsProps;

export const BUDGET = {
  min: 650,
  max: 4000,
  steps: 50,
  default: 1500
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
      default: true
    },
    {
      id: "resolution-1440p",
      value: "1440p",
      title: "1440p",
      description: "2K, balanced",
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

export const COUNTRIES = [
  { code: 'AU', value: 'Australia', currency:      'AUD', exchangeRate: 11.38, locale: 'en-AU' },
  { code: 'AT', value: 'Austria', currency:        'EUR', exchangeRate: 0.85, locale: 'de-AT' },
  { code: 'BE', value: 'Belgium', currency:        'EUR', exchangeRate: 0.85, locale: 'nl-BE' },
  { code: 'CA', value: 'Canada', currency:         'CAD', exchangeRate: 1.37, locale: 'en-CA' },
  { code: 'CZ', value: 'Czech Republic', currency: 'CZK', exchangeRate: 24.30, locale: 'cs-CZ' },
  { code: 'DK', value: 'Denmark', currency:        'DKK', exchangeRate: 6.38, locale: 'da-DK' },
  { code: 'FI', value: 'Finland', currency:        'EUR', exchangeRate: 0.85, locale: 'fi-FI' },
  { code: 'FR', value: 'France', currency:         'EUR', exchangeRate: 0.85, locale: 'fr-FR' },
  { code: 'DE', value: 'Germany', currency:        'EUR', exchangeRate: 0.85, locale: 'de-DE' },
  { code: 'HU', value: 'Hungary', currency:        'HUF', exchangeRate: 356.00, locale: 'hu-HU' },
  { code: 'IE', value: 'Ireland', currency:        'EUR', exchangeRate: 0.85, locale: 'en-IE' },
  { code: 'IT', value: 'Italy', currency:          'EUR', exchangeRate: 0.85, locale: 'it-IT' },
  { code: 'NL', value: 'Netherlands', currency:    'EUR', exchangeRate: 0.85, locale: 'nl-NL' },
  { code: 'NZ', value: 'New Zealand', currency:    'NZD', exchangeRate: 1.68, locale: 'en-NZ' },
  { code: 'NO', value: 'Norway', currency:         'NOK', exchangeRate: 9.18, locale: 'nb-NO' },
  { code: 'PT', value: 'Portugal', currency:       'EUR', exchangeRate: 0.85, locale: 'pt-PT' },
  { code: 'RO', value: 'Romania', currency:        'RON', exchangeRate: 5.22, locale: 'ro-RO' },
  { code: 'SA', value: 'Saudi Arabia', currency:   'SAR', exchangeRate: 3.75, locale: 'ar-SA' },
  { code: 'SK', value: 'Slovakia', currency:       'EUR', exchangeRate: 0.85, locale: 'sk-SK' },
  { code: 'ES', value: 'Spain', currency:          'EUR', exchangeRate: 0.85, locale: 'es-ES' },
  { code: 'SE', value: 'Sweden', currency:         'SEK', exchangeRate: 10.88, locale: 'sv-SE' },
  { code: 'GB', value: 'United Kingdom', currency: 'GBP', exchangeRate: 0.74, locale: 'en-GB' },
  { code: 'US', value: 'United States', currency:  'USD', exchangeRate: 1.00, locale: 'en-US', default: true },
] as const satisfies CountryProps[];
export const DEFAULT_COUNTRY = COUNTRIES.find((country) => (country as CountryProps)?.default) ?? COUNTRIES[0];
