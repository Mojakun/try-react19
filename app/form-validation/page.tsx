"use client";

import { Container } from "@/components/Container";
import { SubmitButton } from "@/components/SubmitButton";
import { SubmittingButton } from "@/components/SubmittingButton";
import { useActionState } from "react";

type FormState = {
  success: boolean;
  errors?: Record<string, string>;
};
function validateFormData(formData: FormData): Record<string, string> {
  const data = Object.fromEntries(formData.entries());
  const errors: Record<string, string> = {};

  if (!data.name) errors.name = "Name is required.";
  if (!data.email) errors.email = "Email is required.";

  return errors;
}

export default function FormValidation() {
  async function handleSubmit(
    _state: FormState | null,
    formData: FormData
  ): Promise<FormState> {
    const errors = validateFormData(formData);

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }
    return new Promise<FormState>((resolve) => {
      setTimeout(() => resolve({ success: true }), 2000);
    });
  }
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    handleSubmit,
    { success: false }
  );

  const errors = state?.errors || {};

  return (
    <Container>
      <form
        action={formAction}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-gray-700 text-center">
          Form Validation Example
        </h1>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            className={`w-full border rounded-md p-2 focus:ring-2 focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className={`w-full border rounded-md p-2 focus:ring-2 focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        {isPending ? <SubmittingButton /> : <SubmitButton />}
        {state?.success && (
          <p className="text-green-500">Form submitted successfully!</p>
        )}
      </form>
    </Container>
  );
}
