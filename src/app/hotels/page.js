"use client";

import FlightDetails from "../components/FlightDetails";
import Footer from "../components/Footer";
import Hotelcards from "../components/Hotelcards";
import SearchAndMenu from "../components/SearchAndMenu";


export default function hotels() {
    return (
        <>
        <SearchAndMenu/>
        <FlightDetails/>
        <Hotelcards/>
        <Footer/>
        </>
    )
}