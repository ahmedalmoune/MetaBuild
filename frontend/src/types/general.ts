/*
* File: general.ts
* Description: General types.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

export type MetaProps = {
  appName: string;
  longName: string;
  appDescription: string;
  author: string;
  authorUrl: string;
}

export type ErrorMessagesProps = Record<string, string>;

// Server API endpoint configuration
export type ApiEndpointsProps = {
  baseUrl: string;
  exchangeRates: string;
}

export type ExchangeRatesProps = {
  key: string;
  cacheTime: number;
}
