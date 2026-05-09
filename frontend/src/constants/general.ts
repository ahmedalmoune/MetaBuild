/*
* File: general.ts
* Description: General constants for the app.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import { MetaProps, ServerEndpointProps } from "@/types/general";

// Meta data for the app
export const META: MetaProps = {
  appName: "MetaBuild",
  longName: "MetaBuild PC Builder",
  appDescription: "PC builder app by Ahmed Almoune",
  author: "Ahmed A",
  authorUrl: "https://ahmed-almouna.com"
};

export const API_ENDPOINT: ServerEndpointProps = {
  baseUrl: "/api/build/something"
};