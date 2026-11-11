import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Angelo Perez | Backend Engineer",
  description:
    "Portfolio of Justin Angelo Perez, a backend engineer specializing in PHP and Laravel, business applications, API integrations, and relational databases.",
  applicationName: "Justin Angelo Perez — Backend Portfolio",
  keywords: ["Justin Angelo Perez", "Backend Engineer", "PHP", "Laravel", "MySQL", "Next.js", "Abu Dhabi"],
  authors: [{ name: "Justin Angelo Perez" }],
  openGraph: {
    title: "Justin Angelo Perez | Backend Engineer",
    description: "Building reliable software for real-world business operations.",
    type: "website",
    locale: "en_US",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#090d15",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
