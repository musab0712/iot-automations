import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Playfair_Display_SC,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const playfairSc = Playfair_Display_SC({
  variable: "--font-playfair-sc",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "IOT Auto Hub",
  description:
    "At IoT Auto Hub, we don’t just provide automation products, we redefine how infrastructure operates",
  openGraph: {
    title: "IOT Auto Hub",
    description:
      "At IoT Auto Hub, we don’t just provide automation products, we redefine how infrastructure operates",
    url: "https://iotautohub.com",
    siteName: "IOT Auto Hub",
    images: [
      {
        url: "/services/fully-automation.webp",
        width: 1200,
        height: 630,
        alt: "IOT Auto Hub - Automate your systems with IoT solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "IoT",
    "Automation",
    "Smart Devices",
    "Industrial IoT",
    "Home Automation",
    "Cloud Sync",
    "Real-time Analytics",
    "Custom Development",
    "Smart Energy Solutions",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  creator: "Musab Hassan",
  authors: [
    {
      name: "Musab Hassan",
      url: "https://www.linkedin.com/in/musab0712/",
    },
  ],
};
// This is the root layout for your Next.js application.
// It wraps all pages and components in your app.
// You can use it to set global styles, metadata, and other settings.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${playfairSc.variable}`}>
      <body>
        {/* <Topbar/> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
