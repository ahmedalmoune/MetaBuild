/*
* File: options-cards-group.tsx
* Description: Creates a group of option cards for a specific preference category, e.g. a group of cards with different  
*   resolution options for the build.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

'use client';

import { CardsGroupProps } from "@/types/build-preferences"; 
import styles from "@/styles/page.module.css";
import { useBuildQueryState } from "@/utils/use-build-query-state";

export default function OptionsCardsGroup({CardsGroup}: {CardsGroup: CardsGroupProps}) {
  const [queryState, setQueryState] = useBuildQueryState();

  function handleChange(cardValue: string, checked: boolean) {
    if (CardsGroup.type === "radio") {
      if (CardsGroup.name === "purpose") {
        setQueryState({ purpose: cardValue });
      } else if (CardsGroup.name === "resolution") {
        setQueryState({ resolution: cardValue });
      }
      return;
    }

    const nextFeatures = checked
      ? [...new Set([...queryState.features, cardValue])]
      : queryState.features.filter((feature) => feature !== cardValue);

    setQueryState({ features: nextFeatures });
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
                  id={card.id}
                  checked={CardsGroup.type === "radio"
                    ? (CardsGroup.name === "purpose" ? queryState.purpose === card.value : queryState.resolution === card.value)
                    : queryState.features.includes(card.value)
                  }
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
