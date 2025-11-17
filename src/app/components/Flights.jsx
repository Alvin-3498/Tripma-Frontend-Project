import React from 'react'
import { Nunito } from 'next/font/google'
import Image from 'next/image'
import { departingflights } from '@/app/_JSONData/departingflights'
import Link from 'next/link'


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const Flights = () => {

    const flightsdata = departingflights;



    return (
        <div>
            {/* flights */}
            <div>
                {/* title */}
                <div className='md:mt-5 xl:mt-10'>
                    <p className={`${nunito.className} text-xl !font-bold text-[#605DEC] text-center lg:text-2xl xl:text-3xl`}>Departing Flights</p>
                </div>

                {/* flight-details-table */}
                <div className=' mt-3 w-[300px] h-fit relative sm:w-[600px] md:mt-10 md:ml-7 md:w-[690px] lg:ml-10 lg:w-[900px] xl:w-[1200px] xl:ml-20 xl:mt-15 2xl:w-[1300px]'>

                    {/* individual-row */}

                    {flightsdata.map((data) => {

                    return <Link key={data.id} href={`/hotels/showallflights/${data.id}`}><div className='p-5 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-15 lg:ml-10 xl:gap-18 xl:pl-15 2xl:pl-20 2xl:overflow-hidden'>

                        <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                            <div className='w-[45px] h-[45px]'>
                                <Image className='w-9 h-9 mt-1.5 md:w-11 md:h-11 xl:w-20 xl:h-20 xl:-mt-3' src={data.image} alt='airline1' />
                            </div>
                            <div className='w-[130px] xl:w-[160px]'>
                                <div>
                                    <p className={`${nunito.className} text-[14px] md:text-[16px] xl:text-xl`}>{data.time}</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px] xl:text-xl`}>{data.Airline}</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                            <div className='w-[160px] xl:w-[190px]'>
                                <p className={`${nunito.className} text-[14px] md:text-[16px] xl:text-xl`}>{data.timerange}</p>
                            </div>
                            <div className='w-[110px] text-right xl:w-[200px]'>
                                <div>
                                    <p className={`${nunito.className} text-[14px] md:text-[16px] xl:text-xl`}>{data.stops}</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px] xl:text-xl`}>{data.loc}</p>
                                </div>
                            </div>
                            <div className='w-[80px] text-right xl:w-[150px]'>
                                <div>
                                    <p className={`${nunito.className} text-[14px] md:text-[16px] xl:text-xl`}>{data.price}</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px] xl:text-xl`}>{data.triptype}</p>
                                </div>
                            </div>
                        </div>

                    </div></Link>

                    })}

                </div>
            </div>
        </div>
    )
}

export default Flights