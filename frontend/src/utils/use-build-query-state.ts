/*
* File: use-build-query-state.ts
* Description: Shared query state parsers/hooks for build form controls.
* Author: Ahmed Almoune
* Date: 5/7/2026
*/

'use client';

import { BUDGET, FEATURES, PURPOSES, RESOLUTIONS } from "@/constants/build-preferences";
import { parseAsInteger, parseAsNativeArrayOf, parseAsString, useQueryStates } from "nuqs";

const defaultPurpose = PURPOSES.cards.find((card) => card.default)?.value ?? PURPOSES.cards[0]?.value ?? "";
const defaultResolution = RESOLUTIONS.cards.find((card) => card.default)?.value ?? RESOLUTIONS.cards[0]?.value ?? "";
const defaultFeatures = FEATURES.cards.filter((card) => card.default).map((card) => card.value);

const buildQueryParsers = {
  budget: parseAsInteger.withDefault(BUDGET.default),
  purpose: parseAsString.withDefault(defaultPurpose),
  resolution: parseAsString.withDefault(defaultResolution),
  features: parseAsNativeArrayOf(parseAsString).withDefault(defaultFeatures),
};

export function useBuildQueryState() {
  return useQueryStates(buildQueryParsers);
}
