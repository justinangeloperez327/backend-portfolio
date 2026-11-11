import type { Metadata, Viewport } from "next";

import { Space_Grotesk, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const utility = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-utility",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Justin Angelo Perez | Backend Engineer",
  description:
    "Portfolio of Justin Angelo Perez, a backend engineer specializing in PHP and Laravel, business applications, API integrations, and relational databases.",
  applicationName: "Justin Angelo Perez — Backend Portfolio",
  keywords: [
    "Justin Angelo Perez",
    "Backend Engineer",
    "PHP",
    "Laravel",
    "MySQL",
    "Next.js",
    "Abu Dhabi",
  ],
  authors: [{ name: "Justin Angelo Perez" }],
  openGraph: {
    title: "Justin Angelo Perez | Backend Engineer",
    description:
      "Building reliable software for real-world business operations.",
    type: "website",
    locale: "en_US",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} ${utility.variable} min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
