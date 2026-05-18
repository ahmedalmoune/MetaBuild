/*
* File: general.ts
* Description: General constants for the app.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import { convertHoursToMilliSeconds } from "@/utils/general";
import type { MetaProps, ApiEndpointsProps, ErrorMessagesProps, ExchangeRatesProps } from "@/types/general";

// Meta data for the app
export const META = {
  appName: "MetaBuild",
  longName: "MetaBuild PC Builder",
  appDescription: "PC builder app by Ahmed Almoune",
  author: "Ahmed A",
  authorUrl: "https://ahmed-almouna.com"
} as const satisfies MetaProps;

export const API_ENDPOINTS = {
  baseUrl: "/api/build/something",
  exchangeRates: "https://open.er-api.com/v6/latest/USD"
} as const satisfies ApiEndpointsProps;

export const EXCHANGE_RATES = {
  key: "exchangeRates",
  cacheTime: convertHoursToMilliSeconds(24),
} as const satisfies ExchangeRatesProps;

export const ERROR_MESSAGES = {
  unknown: "Error: Unknown error",
  queryKey: "Error: Query key error",
  queryValue: "Error: Query value error",
  exchangeRates: "Error: Failed to fetch exchange rates, using fallback rates",
} as const satisfies ErrorMessagesProps;
