/*
* File: page.tsx
* Description: Homepage of the app where the user can change build preferences, generate builds, and view the results.
* Author: Ahmed Almoune
* Date: 5/3/2026
* TODO: Add locale setting that ties to format currency,
* Look into adding error handling,
*/

'use client';
import styles from "@/styles/page.module.css";
import BudgetSlider from "@/components/build-form/budget-slider";
import OptionsCardsGroup from "@/components/build-form/options-cards-group";
import GenerateButton from "@/components/build-form/generate-button";
import { submitBuildForm } from "@/services/build";
import { PURPOSES, RESOLUTIONS, FEATURES, FORM_FIELDS, BUDGET } from "@/constants/build-preferences";
import { META } from "@/constants/general";
import { useEffect } from "react";

export default function Home() {

  // Clean up URL parameters on page load
  useEffect(() => {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const validKeys = Object.values(FORM_FIELDS);
    let urlChanged = false;
    


    // First pass: identify invalid keys
    const invalidKeys: string[] = [];
    for (const [key] of urlParams) {
      if (!validKeys.includes(key as keyof typeof FORM_FIELDS)) {
        invalidKeys.push(key);
      }
    }
    
    // Delete invalid keys
    invalidKeys.forEach(key => {
      urlParams.delete(key);
      urlChanged = true;
    });

    // Check budget value
    const budgetValue = urlParams.get(FORM_FIELDS.budget);
    if (budgetValue) {
      const budgetNum = parseInt(budgetValue, 10);
      if (isNaN(budgetNum) || budgetNum < BUDGET.min || budgetNum > BUDGET.max) {
        urlParams.delete(FORM_FIELDS.budget);
        urlChanged = true;
      }
    }
    
    // Second pass: handle deduplication for valid keys
    for (const key of validKeys) {
      const allValues = urlParams.getAll(key);
      if (allValues.length > 1) {
        if (key === FORM_FIELDS.purpose || key === FORM_FIELDS.resolution || key === FORM_FIELDS.budget) {
          urlParams.delete(key);
          urlParams.set(key, allValues[0]);
          urlChanged = true;
        }
        else if (key === FORM_FIELDS.features) {
          const uniqueValues = Array.from(new Set(allValues));
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
