/*
* File: options-cards-group.tsx
* Description: Creates a group of option cards for a specific preference category, e.g. a group of cards with different  
*   resolution options for the build.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

'use client';
import styles from "@/styles/page.module.css";
import type { CardsGroupProps, CardProps } from "@/types/build-preferences"; 
import { useBuildQueryState, getQueryValue } from "@/utils/build-query";
import { useEffect } from "react";

export default function OptionsCardsGroup({CardsGroup}: {CardsGroup: CardsGroupProps}) {
  
  const [queryState, setQueryState] = useBuildQueryState();

  console.count(`OptionsCardsGroup render: ${CardsGroup.name}`);

  useEffect(() => {
    if (CardsGroup.type === "radio") {
      const currentValue = getQueryValue<CardProps['value']>(queryState, CardsGroup.name);
      if (!CardsGroup.cards.some((card) => card.value === currentValue)) {
        setQueryState({ [CardsGroup.name]: CardsGroup.cards[0].value });
      }
    }
    else if (CardsGroup.type === "checkbox") {
      const currentValue = getQueryValue<CardProps['value'][]>(queryState, CardsGroup.name);
      const invalidValues = currentValue.filter(value => !CardsGroup.cards.some(card => card.value === value));
      if (invalidValues.length > 0) {
        const validValues = currentValue.filter(value => CardsGroup.cards.some(card => card.value === value));
        setQueryState({ [CardsGroup.name]: validValues });
      }
    }
  }, [CardsGroup, queryState, setQueryState]);


  function handleChange(cardValue: CardProps['value'], checked: boolean): void {
    // Handle radios e.g. resolution
    if (CardsGroup.type === 'radio') {
      setQueryState({ [CardsGroup.name]: cardValue });
    }

    // Handle checkboxes e.g. special features
    else if (CardsGroup.type === 'checkbox') {
      const checkboxSet = new Set(getQueryValue<CardProps['value'][]>(queryState, CardsGroup.name));
      if (checked) {
        checkboxSet.add(cardValue);
      } else {
        checkboxSet.delete(cardValue);
      }
      const newCheckboxArray = Array.from(checkboxSet);

      setQueryState({ [CardsGroup.name]: newCheckboxArray });
    }
  }

  function isCardChecked(cardValue: CardProps['value']): boolean {
    if (CardsGroup.type === 'radio') {
      return getQueryValue<CardProps['value']>(queryState, CardsGroup.name) === cardValue;
    }
    else if (CardsGroup.type === 'checkbox') {
      return getQueryValue<CardProps['value'][]>(queryState, CardsGroup.name).includes(cardValue);
    }
    return false;
  }

  return (
    <>
      <h6>{CardsGroup.heading}</h6>
      <div className="row mx-0 gap-3 justify-content-center mb-4">

        {CardsGroup.cards.map((card) => (
          <label key={card.id} className={`card p-0 flex-fill ${styles.optionsCard}
            ${CardsGroup.type === 'radio' ? 'col-auto' : 'col-xs-auto col-sm-4'}`}
          >
            <div className="card-body d-flex flex-row align-items-center">
              <div className="form-check me-2">
                <input className="form-check-input" type={CardsGroup.type} name={CardsGroup.name} value={card.value} 
                  id={card.id} checked={isCardChecked(card.value)}
                  onChange={(event) => handleChange(card.value, event.currentTarget.checked)}
                />
              </div>

              <div>
                <h6 className="mb-1">{card.title}</h6>
                <p className="mb-0 text-muted">{card.description}</p>
              </div>
            </div>
          </label>
        ))}

      </div>
    </>
  );
}
