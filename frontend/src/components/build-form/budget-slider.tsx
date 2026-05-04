/*
* File: budget-slider.tsx
* Description: Budget slider for the build form.
* Author: Ahmed Almoune
* Date: 5/4/2026
*/

'use client';
import { useState } from 'react';
import {formatCurrency} from '@/utils/utils'
import { BUDGET } from '@/constants/build-preferences'

export default function BudgetSlider() {

  const [budget, setBudget] = useState<number>(BUDGET.default);
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setBudget(Number(event.currentTarget.value));
  }


  return (
    <>
      <label htmlFor="budgetSlider" className="fs-6 fw-semibold align-self-start">
        Budget: {formatCurrency.format(budget)}
      </label>
      <input type='range' className='form-range' min={BUDGET.min} max={BUDGET.max} 
        step={BUDGET.steps} id='budgetSlider' name='budget' onChange={handleInput} value={budget} 
      />
      
      <span className='d-flex justify-content-between mb-4'>
        <span className='text-muted'>{formatCurrency.format(BUDGET.min)}</span>
        <span className='text-muted'>{formatCurrency.format(BUDGET.max)}</span>
      </span>
    </>
  );
}
