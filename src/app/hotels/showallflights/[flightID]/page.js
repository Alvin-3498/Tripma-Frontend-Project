import FlightID from "@/app/components/FlightID";
import Footer from "@/app/components/Footer";

export default async function flightID({params}) {

    console.log("params received:",params);

    const { flightID } = await params;

    return (
        <>
        
        <FlightID ID = {flightID}/>
        <Footer/>
        
        </>
    )
}