/*
* File: budget-slider.tsx
* Description: Budget slider for the build form.
* Author: Ahmed Almoune
* Date: 5/4/2026
*/

'use client';
import {formatCurrency} from '@/utils/utils'
import { BUDGET, FORM_FIELDS } from '@/constants/build-preferences'
import { useBuildQueryState } from '@/utils/use-build-query-state';

export default function BudgetSlider() {
  const [queryState, setQueryState] = useBuildQueryState();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setQueryState({ [FORM_FIELDS.budget]: Number(event.currentTarget.value) });
  }

  return (
    <div className="mb-4">
      <label htmlFor="budgetSlider" className="fs-6 fw-semibold align-self-start">
        Budget: {formatCurrency.format(queryState[FORM_FIELDS.budget])}
      </label>
      <input type='range' className='form-range' min={BUDGET.min} max={BUDGET.max} step={BUDGET.steps}
        id='budgetSlider' name={FORM_FIELDS.budget} onChange={handleChange} value={queryState[FORM_FIELDS.budget]}
      />
      
      <span className='d-flex justify-content-between'>
        <span className='text-muted'>{formatCurrency.format(BUDGET.min)}</span>
        <span className='text-muted'>{formatCurrency.format(BUDGET.max)}</span>
      </span>
    </div>
  );
}
