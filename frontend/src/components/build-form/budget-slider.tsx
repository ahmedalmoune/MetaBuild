/*
* File: budget-slider.tsx
* Description: Budget slider for the build form.
* Author: Ahmed Almoune
* Date: 5/4/2026
*/

'use client';
import {formatCurrency} from '@/utils/utils'
import { BUDGET } from '@/constants/build-preferences'
import { useBuildQueryState } from '@/utils/use-build-query-state';

export default function BudgetSlider() {
  const [queryState, setQueryState] = useBuildQueryState();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setQueryState({ budget: Number(event.currentTarget.value) });
  }

  return (
    <div className="mb-4">
      <label htmlFor="budgetSlider" className="fs-6 fw-semibold align-self-start">
        Budget: {formatCurrency.format(queryState.budget)}
      </label>
      <input type='range' className='form-range' min={BUDGET.min} max={BUDGET.max} 
        step={BUDGET.steps} id='budgetSlider' name='budget' onChange={handleInput} value={queryState.budget} 
      />
      
      <span className='d-flex justify-content-between'>
        <span className='text-muted'>{formatCurrency.format(BUDGET.min)}</span>
        <span className='text-muted'>{formatCurrency.format(BUDGET.max)}</span>
      </span>
    </div>
  );
}
