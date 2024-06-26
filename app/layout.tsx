import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "./components/footer";
import "./global.css";

const baseUrl = "https://guilhermebolfe.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "Guilherme Bolfe",
  authors: {
    name: "Guilherme Bolfe",
  },
  creator: "Guilherme Bolfe",
  title: {
    default: "Guilherme Bolfe",
    template: "%s | Guilherme Bolfe",
  },
  icons: '/favicon.ico',
  keywords: ["software", "engineer", "software engineer"],
  description: "This is my site.",
  openGraph: {
    title: "Guilherme Bolfe",
    description: "This is my site.",
    url: baseUrl,
    siteName: "Guilherme Bolfe",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
