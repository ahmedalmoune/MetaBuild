/*
* File: country-dropdown.tsx
* Description: Country dropdown component for the build form
* Author: Ahmed Almoune
* Date: 5/3/2026
* TODO: Finish this
*/

import { COUNTRIES, FORM_FIELDS } from "@/constants/build-preferences";
import styles from "@/styles/page.module.css";
import { useBuildQueryState } from "@/utils/build-query";


export default function CountryDropdown() {
  const [queryState, setQueryState] = useBuildQueryState();
  // const selectedCountry = COUNTRIES.find(c => c.code === queryState[FORM_FIELDS.country]);
  
  return (
    <div className="mb-4 mt-2 align-self-end">
      <label htmlFor="country" className="fs-6 fw-semibold">
        {queryState[FORM_FIELDS.country]}
      </label>
      <select name="country" id="country" className={`form-select form-select-sm w-auto d-inline-block shadow-sm 
        ${styles.lightScrollbar}`} onChange={(e) => setQueryState({ [FORM_FIELDS.country]: e.target.value })} 
        value={queryState[FORM_FIELDS.country]}
      >
        {COUNTRIES.map((country) => (
          <option key={country.code} value={country.code} disabled={country.code === queryState[FORM_FIELDS.country]}>
            {country.value}
          </option>
        ))}
      </select>
    </div>
  );
}