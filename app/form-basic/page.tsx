"use client";

export default function SimpleForm() {
  async function handleSubmit(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data Submitted:", data);
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        action={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-gray-700 text-center">
          Simple Form
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
