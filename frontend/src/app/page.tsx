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
import { handleSubmit } from "@/utils/utils";
import { PURPOSES, RESOLUTIONS, FEATURES } from "@/constants/build-preferences";
import { META } from "@/constants/general";

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Build Form */}
      <div className={styles.buildForm}>
        <h1 className="text-center display-6 fw-bold mb-4">{META.longName}</h1>
        <form onSubmit={handleSubmit}>
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
