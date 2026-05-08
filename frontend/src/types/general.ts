/*
* File: general.ts
* Description: General types.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

export type MetaProps = {
  appName: string;
  appDescription: string;
  author: string;
  authorUrl: string;
}

export type LocaleProps = {
  locale: string;
  currency: string;
}

export type ServerEndpointProps = {
  baseUrl: string;
}
