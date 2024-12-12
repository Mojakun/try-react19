"use client";

import { Container } from "@/components/Container";
import { SubmitButton } from "@/components/SubmitButton";
import { SubmittingButton } from "@/components/SubmittingButton";
import { useActionState } from "react";

export default function FormWithActionState() {
  async function handleSubmit(): Promise<{ success: boolean }> {
    return new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => resolve({ success: true }), 2000);
    });
  }

  const [state, formAction, isPending] = useActionState(handleSubmit, {
    success: false,
  });

  return (
    <Container>
      <form
        action={formAction}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-gray-700 text-center">
          Form with Action State
        </h1>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {isPending ? <SubmittingButton /> : <SubmitButton />}
        {state.success && (
          <p className="text-green-500">Form submitted successfully!</p>
        )}
      </form>
    </Container>
  );
}
