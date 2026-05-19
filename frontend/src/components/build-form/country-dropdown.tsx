/*
* File: country-dropdown.tsx
* Description: Country dropdown component for the build form
* Author: Ahmed Almoune
* Date: 5/3/2026
* TODO: Finish this
*/

'use client';
import { COUNTRIES, DEFAULT_COUNTRY, FORM_FIELDS } from "@/constants/build-preferences";
import { ERROR_MESSAGES } from "@/constants/general";
import styles from "@/styles/page.module.css";
import { useBuildQuery } from "@/hooks/use-build-query";
import * as Flags from "country-flag-icons/react/3x2";
import { useCallback, useEffect } from "react";
import { toast } from "sonner";

export default function CountryDropdown() {
  const [queryState, setQueryState] = useBuildQuery();
  const CountryFlag = Flags[queryState[FORM_FIELDS.country] as keyof typeof Flags] || Flags[DEFAULT_COUNTRY.code];

  const validateCountry = useCallback(() => {
    return COUNTRIES.some(country => country.code === queryState[FORM_FIELDS.country]);
  }, [queryState]);

  // Validate country On Mount and when query state changes
  useEffect(() => {
    try {
      if (!validateCountry()) {
        setQueryState({ [FORM_FIELDS.country]: DEFAULT_COUNTRY.code });
      }
    } catch (error) {
      toast.error(ERROR_MESSAGES.queryValue);
    }
  }, [setQueryState, validateCountry]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      setQueryState({ [FORM_FIELDS.country]: event.target.value });
    } catch (error) {
      toast.error(ERROR_MESSAGES.queryValue);
    }
  };

  return (
    <div className="mb-4 mt-2 align-self-end">
      {<CountryFlag className="me-2 border border-secondary d-inline-block" style={{ width: "2rem" }} />}

      <select className={`form-select form-select-sm w-auto d-inline-block shadow-sm ${styles.lightScrollbar}`} 
        name={FORM_FIELDS.country} value={queryState[FORM_FIELDS.country]} onChange={handleChange}>
          
        {COUNTRIES.map((country) => (
          <option key={country.code} value={country.code} disabled={country.code === queryState[FORM_FIELDS.country]}>
            {country.value}
          </option>
        ))}
      </select>
    </div>
  );
}