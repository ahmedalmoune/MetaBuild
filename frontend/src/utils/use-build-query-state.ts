/*
* File: use-build-query-state.ts
* Description: This file contains shared query state parsers/hooks for build form controls.
* Author: Ahmed Almoune
* Date: 5/7/2026
* TODO: check if filename needs to be changed for smth better
*/

'use client';
import { BUDGET, FEATURES, PURPOSES, RESOLUTIONS, FORM_FIELDS } from "@/constants/build-preferences";
import { parseAsInteger, parseAsNativeArrayOf, parseAsString, useQueryStates, Values, UseQueryStatesReturn } from "nuqs";
import { BuildQueryProps } from "@/types/build-preferences";
import { getDefaultCard } from "./general";
import { CardProps } from "@/types/build-preferences";

//maybe move to const file
const buildQueryParsers = {
  [FORM_FIELDS.budget]: parseAsInteger.withDefault(BUDGET.default),
  [FORM_FIELDS.purpose]: parseAsString.withDefault(getDefaultCard<CardProps["value"]>(PURPOSES)),
  [FORM_FIELDS.resolution]: parseAsString.withDefault(getDefaultCard<CardProps["value"]>(RESOLUTIONS)),
  [FORM_FIELDS.features]: parseAsNativeArrayOf(parseAsString).withDefault(getDefaultCard<CardProps["value"][]>(FEATURES))
} as const satisfies BuildQueryProps;

// Get query value of a specific key from the query state at runtime
export function getQueryValue<T extends typeof BUDGET.default | CardProps["value"] | CardProps["value"][]>
  (queryState: Values<BuildQueryProps>, key: keyof BuildQueryProps): T {
  return queryState[key] as T;
}

// Hook to manage query state
export function useBuildQueryState(): UseQueryStatesReturn<BuildQueryProps> {
  return useQueryStates(buildQueryParsers);
}
