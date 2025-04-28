// src/app/layout.tsx

import "./globals.css";

export const metadata = {
  title: "Mon Panier",
  description: "Test des endpoints du panier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-100 p-6">{children}</body>
    </html>
  );
}
