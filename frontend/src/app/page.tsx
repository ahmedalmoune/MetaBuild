/*
* File: page.tsx
* Description: Homepage of the app where the user can customize build preferences, generate builds, and view results.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

'use client';
import styles from "@/styles/page.module.css";
import BudgetSlider from "@/components/build-form/budget-slider";
import RadioCardGroup from "@/components/build-form/radio-cards-group";
import FeaturesCheckboxes from "@/components/build-form/features-checkboxes";
import BuildButton from "@/components/build-form/build-button";
import { handleSubmit } from "@/utils/utils";
import { PURPOSES, RESOLUTIONS } from "@/constants/build-preferences";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Build Form */}
      <div className={styles.buildForm}>
        <h1 className="text-center display-6 fw-bold mb-4">MetaBuild PC Builder</h1>
        <form onSubmit={handleSubmit}>
          <BudgetSlider />
          <RadioCardGroup heading="Primary Purpose" cards={PURPOSES} />
          <RadioCardGroup heading="Resolution" cards={RESOLUTIONS} />
          <FeaturesCheckboxes />
          <BuildButton />
        </form>
      </div>

      {/* Results */}
      <div>
        <p>Results will be displayed here</p>
      </div>

     


    </div>
  );
}
