/*
* File: utils.ts
* Description: Utility/helper functions for the app.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import { BuildFormProps } from "@/types/build-preferences";

export const formatCurrency = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0,
});

export async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const payload: BuildFormProps = {
    budget: Number(formData.get("budget")) as BuildFormProps["budget"],
    purpose: formData.get("purpose") as BuildFormProps["purpose"],
    resolution: formData.get("resolution") as BuildFormProps["resolution"],
    features: formData.getAll("features") as BuildFormProps["features"],
  };

  alert(JSON.stringify(payload));

  const res = await fetch("/api/build", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Request failed");
  const data = await res.json();
  console.log("API response:", data);
}
