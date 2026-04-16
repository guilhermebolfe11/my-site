import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import { ThemeProvider } from "./components/theme-switch";
import { metaData } from "./config";
import { Analytics } from "@vercel/analytics/react";
import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  keywords: metaData.keywords,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
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
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const cx = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cx(GeistSans.variable, GeistMono.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: metaData.name,
              url: metaData.baseUrl,
              image: `${metaData.baseUrl}/profile.png`,
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/guilhermebolfe11",
                "https://www.linkedin.com/in/guilherme-bolfe",
              ],
              knowsAbout: [
                "Node.js",
                "TypeScript",
                "Backend Development",
                "API Design",
                "Cloud Computing",
                "AWS",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:dark:bg-neutral-900 focus:text-black focus:dark:text-white focus:rounded focus:shadow-lg"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main id="main-content" className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-160 w-full">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
