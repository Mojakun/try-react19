import Link from "next/link";

export default function Home() {
  const pages = [
    { href: "/form-basic", label: "Form Basic" },
    { href: "/form-validation", label: "Form Validation" },
    { href: "/form-with-action-state", label: "Form with Action State" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-700">
        React Forms Playground
      </h1>
      <ul className="space-y-4">
        {pages.map((page) => (
          <li key={page.href}>
            <Link
              href={page.href}
              className="text-blue-500 hover:underline text-xl"
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
