/*
* File: page.tsx
* Description: Homepage of the app where the user can change build preferences, generate builds, and view the results.
* Author: Ahmed Almoune
* Date: 5/3/2026
* TODO: add loading to generate button
* look into react-hook-form (if not used put nuqs in provider file and move exchange-equry to hook)
*/

'use client';
import styles from "@/styles/page.module.css";
import CountryDropdown from "@/components/build-form/country-dropdown";
import BudgetSlider from "@/components/build-form/budget-slider";
import OptionsCardsGroup from "@/components/build-form/options-cards-group";
import GenerateButton from "@/components/build-form/generate-button";
import { submitBuildForm } from "@/services/build";
import { PURPOSES, RESOLUTIONS, FEATURES, FORM_FIELDS } from "@/constants/build-preferences";
import { META, ERROR_MESSAGES } from "@/constants/general";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {

  // Clean up URL parameters (keys) on page load
  useEffect(() => {
    try {
      const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
      const validKeys = Object.values(FORM_FIELDS);
      let urlChanged = false;
      
      // Find invalid keys
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
      
      // Delete duplicate valid keys
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

      // Delete budget if it has invalid value (special case because its int type)
      const budgetValue = urlParams.get(FORM_FIELDS.budget);
      if (budgetValue) {
        const budgetNum = parseInt(budgetValue, 10);
        if (isNaN(budgetNum)) {
          urlParams.delete(FORM_FIELDS.budget);
          urlChanged = true;
        }
      }
    
      // Update URL if changes were made
      if (urlChanged) {
        const newUrl = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
        window.history.replaceState({}, '', newUrl);
      }
    } catch (error) {
      toast.error(ERROR_MESSAGES.queryKey);
    }
  }, []);

  return (
    <div className={styles.page}>

      {/* Build Form */}
      <div className={styles.buildForm}>
        <h1 className="text-center display-6 fw-bold mb-4">{META.longName}</h1>
        <form onSubmit={submitBuildForm}>
          <CountryDropdown />
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
