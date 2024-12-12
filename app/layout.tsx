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
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
