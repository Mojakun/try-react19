import { ReactElement } from "react";

export function SubmitButton(): ReactElement {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
    >
      Submit
    </button>
  );
}
