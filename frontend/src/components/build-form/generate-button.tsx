/*
* File: generate-button.tsx
* Description: The button that triggers the generation process.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import styles from "@/styles/page.module.css";

export default function GenerateButton() {
  return (
    <button type="submit" className={`btn btn-primary btn-lg mt-5 ${styles.growOnHover}`}>Build It! 🚀</button>
  );
}