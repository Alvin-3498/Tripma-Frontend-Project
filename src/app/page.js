"use client";

import FlightDeals from "./components/FlightDeals";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import UserReviews from "./components/UserReviews";

export default function Home() {
  return (  
    <>
  
      <HeroSection/>
      <FlightDeals/>
      <UserReviews/>
      <Footer/>

    </>
  );
}
