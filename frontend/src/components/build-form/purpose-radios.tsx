/*
* File: purpose-radios.tsx
* Description: Purpose radios component.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import styles from "@/styles/page.module.css";
import { PURPOSES } from "@/constants/build-preferences";
    
export default function PurposeRadios() {
  return (
    <>
      <h6>Primary Purpose</h6>
      <div className="row mx-0 gap-3 justify-content-center"> 
        {PURPOSES.map((purpose) => (
          <label key={purpose.id} className={`card p-0 col-auto flex-fill ${styles.purposeRadioCard}`}>
            <div className="card-body d-flex flex-row align-items-center">
              <div className="form-check me-2">
                <input className="form-check-input" type="radio" name="purpose" value={purpose.value} 
                  id={purpose.id} defaultChecked={purpose.default} />
              </div>
                        
              <div>
                <h6 className="mb-1">{purpose.title}</h6>
                <p className={`mb-0 text-muted`}>{purpose.description}</p>
              </div>  
            </div>
          </label>
        ))}
      </div>
    </>
  );
}