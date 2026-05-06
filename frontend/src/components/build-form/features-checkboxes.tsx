import styles from "@/styles/page.module.css";
import { FEATURES } from "@/constants/build-preferences";

export default function FeaturesCheckboxes() {
  return (
    <>
      <h6>Special Features (beta)</h6>
      <div className="row mx-0 gap-3 justify-content-center mb-4"> 

        {FEATURES.map((feature) => (
          <label key={feature.id} className={`card p-0 col-xs-auto col-sm-4 flex-fill ${styles.radioCard}`}>
            <div className="card-body d-flex flex-row align-items-center">
              <div className="form-check me-2">
                <input className="form-check-input" type="checkbox" name={feature.name} value={feature.value} 
                  id={feature.id} 
                />
              </div>
            
              <div>
                <h6 className="mb-1">{feature.title}</h6>
                <p className="mb-0 text-muted">{feature.description}</p>
              </div>  
            </div>
          </label>
        ))}
      </div>
    </>
  );
}