import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Designer from "@/components/designer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";   // 👈 ADD THIS

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "UNITED COMRADES ALLIANCE - MURANG'A UNIVERSITY",
  description: "Murang'a university campaign site for United Comrades Alliance",
  icons: {
    icon: "/1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4DSX0515JS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4DSX0515JS');
          `}
        </Script>
      </head>

      <body
        className={`${font.className} ${
          process.env.NODE_ENV !== "production" ? "debug-screens" : ""
        } antialiased bg-white text-black`}
      >
        <nav className="w-full bg-white border-4 border-b-secondary rounded-b-md fixed top-0 z-50">
          <Navbar />
        </nav>

        <main className="mt-[68px] sm:mt-16 md:mt-20 lg:mt-28">
          {children}
        </main>

        <footer className="w-full bg-gray-300 rounded-t-xl">
          <Footer />
        </footer>

        <Designer />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
