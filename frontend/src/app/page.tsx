/*
* File: page.tsx
* Description: Homepage of the app where the user can change build preferences, generate builds, and view the results.
* Author: Ahmed Almoune
* Date: 5/3/2026
* TODO: Add locale setting that ties to format currency,
* Look into adding error handling,
* Add client side validation for budget, etc.
*/

'use client';
import styles from "@/styles/page.module.css";
import BudgetSlider from "@/components/build-form/budget-slider";
import OptionsCardsGroup from "@/components/build-form/options-cards-group";
import GenerateButton from "@/components/build-form/generate-button";
import { submitBuildForm } from "@/services/build";
import { PURPOSES, RESOLUTIONS, FEATURES } from "@/constants/build-preferences";
import { META } from "@/constants/general";
import { useEffect } from "react";
import { FORM_FIELDS } from "@/constants/build-preferences";

export default function Home() {

useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const validKeys = Object.values(FORM_FIELDS);
  
  let urlChanged = false;
  
  for (const [key] of urlParams) {
    // Remove invalid keys
    if (!validKeys.includes(key as any)) {
      urlParams.delete(key);
      urlChanged = true;
      continue;
    }
    
    // Handle repeating values (deduplicate)
    const allValues = urlParams.getAll(key);
    if (allValues.length > 1) {
      // For radio fields, keep only the first valid value
      if (key === FORM_FIELDS.purpose || key === FORM_FIELDS.resolution) {
        urlParams.delete(key);
        urlParams.set(key, allValues[0]);
        urlChanged = true;
      }
      // For checkbox fields, deduplicate
      else if (key === FORM_FIELDS.features) {
        const uniqueValues = [...new Set(allValues)];
        urlParams.delete(key);
        uniqueValues.forEach(value => urlParams.append(key, value));
        urlChanged = true;
      }
    }
  }
  
  if (urlChanged) {
    const newUrl = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  }
}, []);


  return (
    <div className={styles.page}>

      {/* Build Form */}
      <div className={styles.buildForm}>
        <h1 className="text-center display-6 fw-bold mb-4">{META.longName}</h1>
        <form onSubmit={submitBuildForm}>
          <BudgetSlider />
          <OptionsCardsGroup CardsGroup={PURPOSES} />
          <OptionsCardsGroup CardsGroup={RESOLUTIONS} />
          <OptionsCardsGroup CardsGroup={FEATURES} />
          <GenerateButton />
        </form>
      </div>

      {/* Results */}
      <div>
        <p>Results will be displayed here</p>
      </div>


    </div>
  );
}
