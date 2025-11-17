import React from 'react'
import Image from 'next/image';
import { Nunito } from 'next/font/google';
import airline1 from '@/app/assets/Airlines3.svg'
import airline2 from '@/app/assets/Airlines4.svg'
import airline3 from '@/app/assets/DeltaAirlines.svg'
import airline4 from '@/app/assets/UnitedAirlines.svg'
import pricehistory from '@/app/assets/pricehistory.png'
import map from '@/app/assets/Map.png'
import Link from 'next/link';


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})


const FlightDetails = () => {
    return (
        <div>
            {/* flight-details */}
            <div>
                <div className='grid grid-cols-1 xl:grid-cols-[65%_35%]'>
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
                                            <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px] `}>round trip</p>
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

                        <Link href='/hotels/showallflights'>
                        <div className='mt-5 ml-20 sm:ml-[480px] md:ml-[535px] lg:ml-[645px] xl:ml-[600px] 2xl:ml-[730px]'>
                            <button className={`${nunito.className} text-[#605DEC] text-[14px] border-1 rounded-md border-[#605DEC] px-3 py-1 cursor-pointer transition-all duration-200 hover:text-white hover:bg-blue-600 md:py-2 md:px-5 md:text-[16px] xl:text-lg`}>Show all flights</button>
                        </div>
                        </Link>
                    </div>

                    <div className='md:flex xl:flex-col'>
                        {/* price-grid */}
                        <div className='px-2 -ml-1 sm:px-8 sm:mt-15 xl:-mt-25 xl:-ml-15 2xl:-mt-32 2xl:-ml-4'>
                            <div className='px-2'>
                                <p className={`${nunito.className} text-gray-500 !font-semibold text-[16px] lg:text-xl`}>Price grid <span className='text-gray-400'>(flexible dates)</span></p>
                            </div>
                            <div className='mt-4 mr-6'>
                                <table className='ml-1.5'>
                                    <thead>
                                        <tr>
                                            <th className='border-2 rounded-lg border-gray-200 p-1 sm:p-4'></th>
                                            <th className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 p-1 sm:p-4`}>2/12</th>
                                            <th className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 p-1 sm:p-4`}>2/13</th>
                                            <th className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 p-1 sm:p-4`}>2/14</th>
                                            <th className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 p-1 sm:p-4`}>2/15</th>
                                            <th className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 p-1 sm:p-4`}>2/16</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 p-1 sm:p-4`}>3/7</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$837</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$597</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$592</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$1,308</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$837</td>
                                        </tr>
                                        <tr>
                                            <td className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 p-1 sm:p-4`}>3/8</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$837</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$597</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$592</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$837</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$1,308</td>
                                        </tr>
                                        <tr>
                                            <td className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 p-1 sm:p-4`}>3/9</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$624</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$592</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$624</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$592</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$592</td>
                                        </tr>
                                        <tr>
                                            <td className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 p-1 sm:p-4`}>3/10</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$1,308</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$624</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$624</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$837</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$837</td>
                                        </tr>
                                        <tr>
                                            <td className={`${nunito.className} text-gray-700 !font-bold border-2 border-gray-200 rounded-tl-lg p-1 sm:p-4`}>3/11</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$592</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$624</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$1,308</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$837</td>
                                            <td className='border-2 border-gray-200 p-1 sm:p-4'>$624</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* price-history */}
                        <div className='px-3 mt-10 sm:ml-8 sm:px-0 sm:mt-15 md:-ml-6 xl:mt-10 xl:-ml-5 2xl:mt-10 2xl:ml-4'>
                            <div>
                                <p className={`${nunito.className} text-gray-600 !font-semibold text-[16px] lg:text-xl`}>Price history</p>
                            </div>

                            {/* image */}
                            <div className='mt-4'>
                                <Image className='w-[300px] object-cover sm:w-[450px]' src={pricehistory} alt='price-history' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* map-and-pricerating */}
                <div className='grid grid-cols-1 md:grid-cols-[60%_40%] gap-5 sm:px-5 xl:mt-5'>
                    {/* map */}
                    <div>
                        <Image className='flex w-[300px] h-[150px] rounded-md object-cover ml-3 mt-10 sm:w-[450px] md:w-[460px] lg:w-[460px] xl:w-[770px] xl:h-[200px] 2xl:w-[1220px] 2xl:ml-9' src={map} alt='map' />
                    </div>

                    {/* pricerating */}
                    <div className='mt-5 md:pl-5 lg:-ml-33 lg:mt-7 xl:ml-1 2xl:ml-10'>
                        {/* title */}
                        <div className='flex gap-2 ml-3'>
                            <div>
                                <p className={`${nunito.className} text-gray-600 !font-semibold text-[16px] lg:text-xl`}>Price rating</p>
                            </div>
                            <div>
                                <p className={`${nunito.className} bg-[#5CD6C0] w-[90px] px-2 text-[16px] text-white rounded-md`}>Buy soon</p>
                            </div>
                        </div>

                        {/* paragraphs */}
                        <div className='flex flex-col gap-2 mt-4 xl:px-8 xl:-ml-7'>
                            {/* para1 */}
                            <div>
                                <p className={`${nunito.className} text-gray-600 px-3`}>
                                    We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.
                                </p>
                            </div>
                            {/* para2 */}
                            <div>
                                <p className={`${nunito.className} text-gray-400 px-3`}>
                                    Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default FlightDetails