import React from 'react'
import Image from "next/image";
import { Nunito } from "next/font/google";
import { departingflights } from '@/app/_JSONData/departingflights'
import Link from 'next/link';


const nunito = Nunito({
    subsets : ['cyrillic'],
    weight : ['400']
});



const FlightID = ({ID}) => {

    const flightsdata = departingflights;

    const flight = flightsdata.find((f) => f.id === parseInt(ID));
    

  return (
    <div>

        {!flight ? (
            <div>   
               <h1 className={`${nunito.className} text-center text-xl !font-semibold text-[#605DEC] md:pt-10 lg:text-2xl lg:pt-10 xl:text-3xl`}>Sorry,data not found.Please come back later and try again.</h1> 
            </div>
        ) : (

            <div className="border-2 border-gray-300 rounded-xl w-[300px] min-h-fit py-5 ml-2.5 shadow-xl shadow-gray-500/60 md:w-[700px] md:ml-10 md:mt-10 lg:ml-40 xl:w-[1000px] xl:ml-60">
                {/* logoandtitle */}
                <div className="flex gap-4 px-3 md:px-6 md:py-1">
                    <div>
                        <Image className="w-10 h-10 xl:w-12 xl:h-12" src={flight.image} alt="airline2" />
                    </div>
                    <div>
                        <p className={`${nunito.className} text-xl text-[#605DEC] !font-bold xl:text-2xl`}>{flight.Airline}</p>
                    </div>
                </div>

                <hr className="w-[95%] border border-gray-300 ml-2 mt-3"></hr>

                {/* flight-info */}
                <div className="px-6 pt-5 md:px-15">
                    {/* section-1 */}
                    <div className='flex flex-col md:gap-3'>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg`}>Flight Number :</p>
                            <p className={`${nunito.className}`}>{flight.flightno}</p>
                        </div>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg`}>Aircraft :</p>
                            <p className={`${nunito.className}`}>{flight.aircrafttype}</p>
                        </div>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg`}>Departure :</p>
                            <p className={`${nunito.className}`}>{flight.departure}</p>
                        </div>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg`}>Arrival :</p>
                            <p className={`${nunito.className}`}>{flight.arrival}</p>
                        </div>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg`}>Departure Terminal :</p>
                            <p className={`${nunito.className}`}>{flight.departterminal}</p>
                        </div>
                    </div>

                    <br />

                    {/* section-2 */}
                    <div className='flex flex-col md:gap-3 md:mt-3'>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg`}>Arrival Terminal :</p>
                            <p className={`${nunito.className} xl:text-lg`}>{flight.arrterminal}</p>
                        </div>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg`}>Time :</p>
                            <p className={`${nunito.className} xl:text-lg`}>{flight.time}</p>
                        </div>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg`}>Timezone :</p>
                            <p className={`${nunito.className} xl:text-lg`}>{flight.timerange}</p>
                        </div>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg`}>Stops :</p>
                            <p className={`${nunito.className} xl:text-lg`}>{flight.stops}</p>
                        </div>
                    </div>

                    <br />

                    {/* section-3 */}
                    <div className='md:flex-col md:gap-3 md:mt-5'>
                        <div className="flex gap-3">
                            <p className={`${nunito.className} !font-semibold xl:text-lg text-[#605DEC]`}>Payable Amount : </p>
                            <p className={`${nunito.className} xl:text-lg`}>{flight.price}</p>
                        </div>
                        <div className="ml-15 pt-5 md:ml-60 xl:ml-90">
                            <Link href="/passenger-information"><button className={`${nunito.className} border border-[#605DEC] px-4 py-1 rounded-md text-[#605DEC] cursor-pointer transition-all duration-200 hover:bg-[#605DEC] hover:text-white hover:scale-125 xl:text-lg`}>Book Now</button></Link>
                        </div>
                    </div>
                </div>


            </div>

        )}

    </div>
  )
}

export default FlightID