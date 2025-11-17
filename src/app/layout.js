"use client";

import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Navbar from "./components/Navbar"; 
import { XMarkIcon } from '@heroicons/react/24/outline'
import SignUp from "./components/SignUp";
import Providers from "@/Providers";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ['cyrillic'],
  weight: ['400']
});

const metadata = {
  title: "Tripma",
  description: "",
};

export default function RootLayout({ children }) {

  const pathname = usePathname();
  const hidenavbarroutes = ["/passenger-information/seatbooking"]
  
  const shouldhidenavbar = hidenavbarroutes.includes(pathname);

  const [Ad, setAd] = useState(false);
  const handleAd = () => {
    setAd(!Ad);
  }

  const [Signup,setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(!Signup);
  }

  return (
    <html lang="en">
      <Providers>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* ad-content */}
        {Ad ? (null) : (
          <div className={`${Ad && "-translate-y-20"} w-full h-[60px] bg-[#605DEC] flex relative justify-center transition-all duration-300`}>
            <p className={`${nunito.className} text-white text-xs px-10 py-1 md:py-4 lg:text-[15px] xl:text-lg`}>Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout.Promotion valid for new users only.</p>
            <p><XMarkIcon onClick={handleAd} className='absolute w-6 h-6 right-2 top-4 text-white cursor-pointer md:right-10' /></p>
          </div>
        )
        }
        {!shouldhidenavbar && <Navbar onSignupClick={handleSignup}/>}

        {Signup ? (<SignUp/>) : (null)}

        {children}
      </body>
      </Providers>
    </html>
  );
}
