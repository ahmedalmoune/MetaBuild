/*
* File: budget-slider.tsx
* Description: Budget slider for the build form.
* Author: Ahmed Almoune
* Date: 5/4/2026
*/

'use client';
import {formatCurrency} from '@/utils/general'
import { BUDGET, FORM_FIELDS, DEFAULT_COUNTRY } from '@/constants/build-preferences'
import { useBuildQuery } from '@/hooks/use-build-query';
import { useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { ERROR_MESSAGES } from '@/constants/general';
import { useExchangeRates } from '@/hooks/use-exchange-rates';

export default function BudgetSlider() {
  const [queryState, setQueryState] = useBuildQuery();
  const { data: rates } = useExchangeRates();


  const validateBudget = useCallback((value: number): boolean => {
    return !isNaN(value) && (value >= BUDGET.min && value <= BUDGET.max && value % BUDGET.steps === 0);
  }, []);

  // Validate budget On Mount and when query state changes
  useEffect(() => {
    try {
      const currentBudget = queryState[FORM_FIELDS.budget];

      if (!validateBudget(currentBudget)) {
        setQueryState({ [FORM_FIELDS.budget]: BUDGET.default });
      }
    } catch (error) {
      toast.error(ERROR_MESSAGES.queryValue);
    }
  }, [queryState, setQueryState, validateBudget]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    try {
      const value = Number(event.currentTarget.value); 
      setQueryState({ [FORM_FIELDS.budget]: value }); 
    } catch (error) {
      toast.error(ERROR_MESSAGES.queryValue);
    }
  }

  return (
    <div className="mb-4 mt-2">
      <label htmlFor="budgetSlider" className="fs-6 fw-semibold align-self-start">
        Budget: {formatCurrency(queryState[FORM_FIELDS.budget], DEFAULT_COUNTRY.code, rates)}
        {queryState[FORM_FIELDS.country] !== DEFAULT_COUNTRY.code && 
        ` (${formatCurrency(queryState[FORM_FIELDS.budget], queryState[FORM_FIELDS.country], rates)})`}
      </label>
      <input type='range' className='form-range' min={BUDGET.min} max={BUDGET.max} step={BUDGET.steps}
        id='budgetSlider' name={FORM_FIELDS.budget} onChange={handleChange} value={queryState[FORM_FIELDS.budget]}
      />
      
      <span className='d-flex justify-content-between'>
        <span className="text-muted text-start">
          {formatCurrency(BUDGET.min, DEFAULT_COUNTRY.code, rates)}
          <br />
          <span style={{ visibility: queryState[FORM_FIELDS.country] !== DEFAULT_COUNTRY.code ? 'visible' : 'hidden' }}>
            ({formatCurrency(BUDGET.min, queryState[FORM_FIELDS.country], rates)})
          </span>
        </span>
        <span className="text-muted text-end">
          {formatCurrency(BUDGET.max, DEFAULT_COUNTRY.code, rates)}
          <br />  
          <span style={{ visibility: queryState[FORM_FIELDS.country] !== DEFAULT_COUNTRY.code ? 'visible' : 'hidden' }}>
            ({formatCurrency(BUDGET.max, queryState[FORM_FIELDS.country], rates)})
          </span>
        </span>
      </span>
    </div>
  );
}
