import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


 


const wantedSans = localFont({
  src: [
    {
      path: "../../public/fonts/WantedSans-Regular-BF65baf13579965.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/WantedSans-Medium-BF65baf1388963b.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/WantedSans-SemiBold-BF65baf13722853.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/WantedSans-Bold-BF65baf135d5a25.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-wanted-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"], // <-- Add this line
  display: "swap",
});

export const metadata: Metadata = {
  title: "Take Off Website",
  description: "Take Off - Elevate your business with our creative solutions.",
  icons: {
    icon: "/take-off.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  ${wantedSans.variable} ${dmSerif.variable} antialiased relative`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
