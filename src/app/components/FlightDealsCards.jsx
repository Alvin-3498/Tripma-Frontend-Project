"use client"

import React from 'react'
import { Nunito } from 'next/font/google'
import Image from 'next/image'
import image1 from '@/app/assets/picture1.jpg'
import image2 from '@/app/assets/picture2.jpg'
import image3 from '@/app/assets/picture3.png'
import image4 from '@/app/assets/picture4.jpg'
import { motion, spring } from 'motion/react' 

const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const FlightDealsCards = () => {
    return (
        <div>
            {/* flightdealscards */}
            <div>
                {/* title */}
                <motion.div initial={{ opacity: 0,transform:"translateY(-50px)" }} animate={{ opacity: 1,transform:"translateY(0px)" }} transition={{ type:spring }} className='md:mt-5 xl:mt-10'>
                    <p className={`${nunito.className} text-xl !font-bold text-[#605DEC] text-center lg:text-2xl xl:text-3xl`}>Featured Flight Deals</p>
                </motion.div>

                {/* flight-deals */}
                <motion.div initial={{ opacity: 0,transform:"translateY(200px)" }} animate={{ opacity: 1,transform:"translateY(0px)" }} transition={{ type:spring }} className='grid gap-4 mt-5 sm:grid-cols-2 md:gap-y-15 md:mt-10 md:grid-cols-3 md:gap-1 lg:px-10 xl:mt-15 2xl:gap-5'>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[230px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image1} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>The Bund, <span className='text-blue-500'>Shanghai</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$598</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>China's most international city</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%] md:h-[70%] lg:h-[65%] xl:h-[80%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image2} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Sydney Opera House, <span className='text-blue-500'>Sydney</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$981</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Take a stroll along the famous harbour</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%] lg:h-[73%] xl:h-[80%] 2xl:h-[80%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image3} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Kōdaiji Temple, <span className='text-blue-500'>Kyoto</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$633</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Step back in time in the Gion district</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[73%] md:h-[59%] lg:h-[45%] xl:h-[63%] 2xl:h-[70%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image4} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Tsavo East National Park, <span className='text-blue-500'>Kenya</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$1,248</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.</p>
                            </div>
                        </div>
                    </div>


                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:mt-4 md:min-w-[240px] lg:min-w-[230px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image1} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>The Bund, <span className='text-blue-500'>Shanghai</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$598</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>China's most international city</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%] md:h-[70%] lg:h-[65%] xl:h-[80%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image2} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Sydney Opera House, <span className='text-blue-500'>Sydney</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$981</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Take a stroll along the famous harbour</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%] lg:h-[74%] 2xl:h-[80%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image3} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Kōdaiji Temple, <span className='text-blue-500'>Kyoto</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$633</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Step back in time in the Gion district</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[73%] md:h-[59%] lg:h-[45%] xl:h-[63%] 2xl:h-[70%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image4} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Tsavo East National Park, <span className='text-blue-500'>Kenya</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$1,248</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.</p>
                            </div>
                        </div>
                    </div>

                     {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:mt-4 md:min-w-[240px] lg:min-w-[230px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image1} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>The Bund, <span className='text-blue-500'>Shanghai</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$598</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>China's most international city</p>
                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
    )
}

export default FlightDealsCards