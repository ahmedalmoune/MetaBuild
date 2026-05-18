/*
* File: build-query.ts
* Description: This file contains shared query state parsers/hooks for build form controls.
* Author: Ahmed Almoune
* Date: 5/7/2026
*/

'use client';
import { BUDGET, FEATURES, PURPOSES, RESOLUTIONS, FORM_FIELDS, DEFAULT_COUNTRY } from "@/constants/build-preferences";
import { parseAsInteger, parseAsNativeArrayOf, parseAsString, useQueryStates, Values, UseQueryStatesReturn } from "nuqs";
import type { BuildQueryProps, CardProps } from "@/types/build-preferences";
import { getDefaultCard } from "./general";

const buildQueryParsers = {
  [FORM_FIELDS.country]: parseAsString.withDefault(DEFAULT_COUNTRY.code)
    .withOptions({ history: 'push' }),
  [FORM_FIELDS.budget]: parseAsInteger.withDefault(BUDGET.default).withOptions({ history: 'push' }),
  [FORM_FIELDS.purpose]: parseAsString.withDefault(getDefaultCard<CardProps["value"]>(PURPOSES))
    .withOptions({ history: 'push' }),
  [FORM_FIELDS.resolution]: parseAsString.withDefault(getDefaultCard<CardProps["value"]>(RESOLUTIONS))
    .withOptions({ history: 'push' }),
  [FORM_FIELDS.features]: parseAsNativeArrayOf(parseAsString).withDefault(getDefaultCard<CardProps["value"][]>(FEATURES))
    .withOptions({ history: 'push' })
} as const satisfies BuildQueryProps;

// Get query value for a specific parameter at runtime
export function getQueryValue<T extends typeof BUDGET.default | CardProps["value"] | CardProps["value"][]>
  (queryState: Values<BuildQueryProps>, key: keyof BuildQueryProps): T {
  return queryState[key] as T;
}

// Hook to manage query state
export function useBuildQueryState(): UseQueryStatesReturn<BuildQueryProps> {
  return useQueryStates(buildQueryParsers);
}
