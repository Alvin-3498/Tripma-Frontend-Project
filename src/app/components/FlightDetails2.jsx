import Image from 'next/image'
import React from 'react'
import { Nunito } from 'next/font/google'
import airline1 from '@/app/assets/Airlines3.svg'
import airline2 from '@/app/assets/Airlines4.svg'
import airline3 from '@/app/assets/DeltaAirlines.svg'
import airline4 from '@/app/assets/UnitedAirlines.svg'
import pricehistory from '@/app/assets/pricehistory.png'
import map from '@/app/assets/Map.png'
import Link from 'next/link'


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const FlightDetails2 = () => {
    return (
        <div>

            {/* flight-details */}
            <div className='md:px-7'>
                <div className='grid grid-cols-1 xl:grid-cols-[65%_35%] xl:gap-17 2xl:gap-23 2xl:-ml-7'>
                    <div>
                        {/* departing-flight */}
                        <div className=' px-3 py-15 sm:py-0 sm:-mt-15 sm:ml-5 md:ml-6 lg:-mt-25 2xl:-mt-32 2xl:ml-10'>
                            {/* title */}
                            <div>
                                <p className={`${nunito.className} text-[16px] text-gray-600 !font-semibold md:text-lg lg:text-xl`}>Choose a <span className='text-blue-600'>departing</span> flight</p>
                            </div>

                            {/* flight-details-table */}
                            <div className='border-2 mt-3 w-[300px] h-[600px] relative rounded-xl border-gray-200 overflow-y-scroll sm:w-[600px] md:w-[690px] lg:w-[800px] xl:w-[770px] 2xl:w-[900px]'>

                                {/* individual-row */}
                                <div className='p-5 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

                                    <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                                        <div className='w-[45px] h-[45px] '>
                                            <Image className='w-9 h-9 mt-1.5 md:w-11 md:h-11 xl:w-14 xl:h-14 xl:mt-0' src={airline1} alt='airline1' />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>16h 45m</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>Hawaiian Airlines</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                                        <div className='w-[160px]'>
                                            <p className={`${nunito.className} text-[14px] md:text-[16px] `}>7:00 AM - 4:15 PM</p>
                                        </div>
                                        <div className='w-[110px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>1 stop</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>2h 45m in HNL</p>
                                            </div>
                                        </div>
                                        <div className='w-[80px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>$624</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>round trip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr className='w-[95%] ml-2.5 absolute border-1 border-gray-200' />

                                {/* individual-row */}
                                <div className='p-4 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

                                    <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                                        <div className='w-[45px] h-[45px] '>
                                            <Image className='w-9 h-9 mt-1.5 ml-1 md:w-11 md:h-11 xl:w-14 xl:h-14 xl:-mt-2' src={airline2} alt='airline1' />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>18h 22m</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>Japan Airlines</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                                        <div className='w-[160px]'>
                                            <p className={`${nunito.className} text-[14px] md:text-[16px]`}>7:35 AM - 12:15 PM</p>
                                        </div>
                                        <div className='w-[110px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>1 stop</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>50m in HKG</p>
                                            </div>
                                        </div>
                                        <div className='w-[80px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>$663</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>round trip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr className='w-[95%] ml-2.5 absolute border-1 border-gray-200' />


                                {/* individual-row */}
                                <div className='p-4 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

                                    <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                                        <div className='w-[45px] h-[45px] '>
                                            <Image className='w-9 h-9 mt-1.5 ml-1 md:w-11 md:h-11 xl:w-14 xl:h-14' src={airline1} alt='airline1' />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>18h 04m</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>Japan Airlines</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                                        <div className='w-[160px]'>
                                            <p className={`${nunito.className} text-[14px] md:text-[16px]`}>8:20 AM - 2:15 PM</p>
                                        </div>
                                        <div className='w-[110px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px]  md:text-[16px]`}>1 stop</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>1h 50m in PVG</p>
                                            </div>
                                        </div>
                                        <div className='w-[80px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>$690</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>round trip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr className='w-[95%] ml-2.5 absolute border-1 border-gray-200' />

                                {/* individual-row */}
                                <div className='p-4 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

                                    <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                                        <div className='w-[45px] h-[45px] '>
                                            <Image className='w-9 h-9 mt-1.5 ml-1 md:w-11 md:h-11 xl:w-14 xl:h-14' src={airline3} alt='airline1' />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>18h 04m</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>Delta</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                                        <div className='w-[160px]'>
                                            <p className={`${nunito.className} text-[14px] md:text-[16px]`}>9:47 AM - 4:15 PM</p>
                                        </div>
                                        <div className='w-[110px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>1 stop</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>4h 05m in ICN</p>
                                            </div>
                                        </div>
                                        <div className='w-[80px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>$756</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>round trip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr className='w-[95%] ml-2.5 absolute border-1 border-gray-200' />

                                {/* individual-row */}
                                <div className='p-4 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

                                    <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                                        <div className='w-[45px] h-[45px] '>
                                            <Image className='w-9 h-9 mt-1.5 ml-1 md:w-11 md:h-11  xl:w-14 xl:h-14' src={airline4} alt='airline1' />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>18h 04m</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>Hawaiian Airlines</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                                        <div className='w-[160px]'>
                                            <p className={`${nunito.className} text-[14px] md:text-[16px]`}>11:15 AM - 7:45 PM</p>
                                        </div>
                                        <div className='w-[110px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>Nonstop</p>
                                            </div>
                                        </div>
                                        <div className='w-[80px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>$837</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>round trip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr className='w-[95%] ml-2.5 absolute border-1 border-gray-200' />

                                {/* individual-row */}
                                <div className='p-4 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

                                    <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                                        <div className='w-[45px] h-[45px] '>
                                            <Image className='w-9 h-9 mt-1.5 ml-1 md:w-11 md:h-11 xl:w-14 xl:h-14 xl:-mt-2' src={airline2} alt='airline1' />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>18h 22m</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>Japan Airlines</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                                        <div className='w-[160px]'>
                                            <p className={`${nunito.className} text-[14px] md:text-[16px]`}>7:35 AM - 12:15 PM</p>
                                        </div>
                                        <div className='w-[110px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>1 stop</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>50m in HKG</p>
                                            </div>
                                        </div>
                                        <div className='w-[80px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>$663</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>round trip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr className='w-[95%] ml-2.5 absolute border-1 border-gray-200' />


                                {/* individual-row */}
                                <div className='p-4 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

                                    <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                                        <div className='w-[45px] h-[45px] '>
                                            <Image className='w-9 h-9 mt-1.5 ml-1 md:w-11 md:h-11 xl:w-14 xl:h-14' src={airline3} alt='airline1' />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>18h 04m</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>Delta</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                                        <div className='w-[160px]'>
                                            <p className={`${nunito.className} text-[14px] md:text-[16px]`}>9:47 AM - 4:15 PM</p>
                                        </div>
                                        <div className='w-[110px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>1 stop</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>4h 05m in ICN</p>
                                            </div>
                                        </div>
                                        <div className='w-[80px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>$756</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>round trip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr className='w-[95%] ml-2.5 absolute border-1 border-gray-200' />

                                {/* individual-row */}
                                <div className='p-4 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

                                    <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                                        <div className='w-[45px] h-[45px] '>
                                            <Image className='w-9 h-9 mt-1.5 ml-1 md:w-11 md:h-11  xl:w-14 xl:h-14' src={airline4} alt='airline1' />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>18h 04m</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>Hawaiian Airlines</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                                        <div className='w-[160px]'>
                                            <p className={`${nunito.className} text-[14px] md:text-[16px]`}>11:15 AM - 7:45 PM</p>
                                        </div>
                                        <div className='w-[110px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>Nonstop</p>
                                            </div>
                                        </div>
                                        <div className='w-[80px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>$837</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>round trip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <hr className='w-[95%] ml-2.5 absolute border-1 border-gray-200' />

                                {/* individual-row */}
                                <div className='p-4 w-full flex gap-5 overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

                                    <div className='flex gap-5 lg:gap-7 xl:gap-13'>
                                        <div className='w-[45px] h-[45px] '>
                                            <Image className='w-9 h-9 mt-1.5 ml-1 md:w-11 md:h-11 xl:w-14 xl:h-14 xl:-mt-2' src={airline2} alt='airline1' />
                                        </div>
                                        <div className='w-[130px]'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>18h 22m</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>Japan Airlines</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-8 lg:gap-15 xl:gap-22'>
                                        <div className='w-[160px]'>
                                            <p className={`${nunito.className} text-[14px] md:text-[16px]`}>7:35 AM - 12:15 PM</p>
                                        </div>
                                        <div className='w-[110px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>1 stop</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px]`}>50m in HKG</p>
                                            </div>
                                        </div>
                                        <div className='w-[80px] text-right'>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] md:text-[16px]`}>$663</p>
                                            </div>
                                            <div>
                                                <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px] `}>round trip</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            {/* button */}
                            <Link href='/hotels2/showallflights'>
                                <div className='mt-5 ml-20 sm:ml-[480px] md:ml-[535px] lg:ml-[645px] xl:ml-[600px] 2xl:ml-[719px]'>
                                    <button className={`${nunito.className} text-[#605DEC] text-[14px] border-1 rounded-md border-[#605DEC] px-3 py-1 transition-all duration-200 cursor-pointer hover:bg-blue-600 hover:text-white md:py-2 md:px-5 md:text-[16px] xl:text-lg`}>Show all flights</button>
                                </div>
                            </Link>
                        </div>

                        {/* map */}
                        <div>
                            <Image className='flex w-[300px] h-[150px] rounded-md object-cover ml-3 mt-10 sm:w-[450px] md:ml-8 md:w-[670px] lg:w-[800px] xl:w-[770px] xl:h-[200px] 2xl:w-[900px] 2xl:ml-13' src={map} alt='map' />
                        </div>
                    </div>

                    {/* flight-booking */}
                    <div className='max-w-[350px] sm:max-w-[650px] sm:pl-5 md:max-w-[740px] lg:max-w-[850px] xl:-mt-25 xl:-ml-20 xl:mx-20 2xl:-mt-32'>
                        <div className='border-2 border-gray-200 rounded-xl mt-10 mx-3'>
                            {/* section-1 */}
                            <div className='flex justify-between px-2 pt-5 xl:px-10'>
                                <div className='flex gap-2'>
                                    <div>
                                        <Image className='w-8 h-8 xl:w-12 xl:h-12' src={airline1} alt='airline1' />
                                    </div>
                                    <div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>Hawaiian Airlines</p>
                                        </div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-400 text-[14px] xl:text-lg`}>FIG4312</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>16h 45m (+1d)</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>7:00 AM - 4:15 PM</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px] xl:text-lg`}>2h 45m in HNL</p>
                                    </div>
                                </div>
                            </div><br />

                            <hr className='w-[95%] ml-2 text-gray-200 border' />

                            {/* section-2 */}
                            <div className='flex justify-between px-2 pt-5 xl:px-10'>
                                <div className='flex gap-2'>
                                    <div>
                                        <Image className='w-8 h-8 xl:w-12 xl:h-12' src={airline1} alt='airline1' />
                                    </div>
                                    <div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>Hawaiian Airlines</p>
                                        </div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-400 text-[14px] xl:text-lg`}>FIG4312</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>16h 45m (+1d)</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>7:00 AM - 4:15 PM</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px] xl:text-lg`}>2h 45m in HNL</p>
                                    </div>
                                </div>
                            </div><br />
                        </div>

                        <div className='flex gap-6 justify-end mt-5 mr-5'>
                            <div className='text-right flex flex-col gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>Subtotal</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>Taxes and Fees</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>Total</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>$503</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>$121</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>$624</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>





            </div>

        </div>
    )
}

export default FlightDetails2