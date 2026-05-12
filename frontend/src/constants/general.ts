/*
* File: general.ts
* Description: General constants for the app.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import type { MetaProps, ApiEndpointProps, ErrorMessagesProps } from "@/types/general";

// Meta data for the app
export const META = {
  appName: "MetaBuild",
  longName: "MetaBuild PC Builder",
  appDescription: "PC builder app by Ahmed Almoune",
  author: "Ahmed A",
  authorUrl: "https://ahmed-almouna.com"
} as const satisfies MetaProps;

export const API_ENDPOINT = {
  baseUrl: "/api/build/something"
} as const satisfies ApiEndpointProps;

export const ERROR_MESSAGES = {
  unknown: "Error: Unknown error",
  queryKey: "Error: Query key error",
  queryValue: "Error: Query value error",
} as const satisfies ErrorMessagesProps;