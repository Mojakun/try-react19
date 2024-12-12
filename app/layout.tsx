import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title: "My App",
  description: "This is a simple Next.js app",
  icons: {
    icon: "/favicon.ico", // `public/favicon.ico`を参照
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/form-basic", label: "Form Basic" },
    { href: "/form-validation", label: "Form Validation" },
    { href: "/form-with-action-state", label: "Form with Action State" },
  ];
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-700 text-white p-4 shadow-md">
          <nav className="container mx-auto flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-2">
          <p>&copy; 2024 React Forms Playground</p>
        </footer>
      </body>
    </html>
  );
}
