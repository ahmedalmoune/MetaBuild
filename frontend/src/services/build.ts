
import { BuildFormProps } from "@/types/build-preferences";
import { API_ENDPOINT } from "@/constants/general";
import { FORM_FIELDS } from "@/constants/build-preferences";


export async function submitBuildForm(event: React.SubmitEvent<HTMLFormElement>): Promise<void> {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const payload = {
    [FORM_FIELDS.budget]: Number(formData.get(FORM_FIELDS.budget)) as BuildFormProps["budget"],
    [FORM_FIELDS.purpose]: formData.get(FORM_FIELDS.purpose) as BuildFormProps["purpose"],
    [FORM_FIELDS.resolution]: formData.get(FORM_FIELDS.resolution) as BuildFormProps["resolution"],
    [FORM_FIELDS.features]: formData.getAll(FORM_FIELDS.features) as BuildFormProps["features"],
  } as const satisfies BuildFormProps;

  alert(JSON.stringify(payload));

  const res = await fetch(API_ENDPOINT.baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Request failed");
  const data = await res.json();
  console.log("API response:", data);
}