"use client";

import React from 'react'
import { Nunito } from 'next/font/google'
import image5 from '@/app/assets/picture5.jpg'
import image6 from '@/app/assets/picture6.jpg'
import image7 from '@/app/assets/picture7.jpg'
import Image from 'next/image'
import { motion, spring } from 'motion/react'

const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const PlaceToStayCards = () => {
    return (
        <div>
            {/* placetostaycards */}
            <div>
                {/* title */}
                <motion.div initial={{ opacity: 0,transform:"translateY(-50px)" }} animate={{ opacity: 1,transform:"translateY(0px)" }} transition={{ type: spring }} className='md:mt-5 xl:mt-10'>
                    <p className={`${nunito.className} text-xl !font-bold text-[#605DEC] text-center lg:text-2xl xl:text-3xl`}>Featured Places For Stay</p>
                </motion.div>

                {/* places-cards */}
                <motion.div initial={{ opacity: 0,transform:"translateY(200px)" }} animate={{ opacity: 1,transform:"translateY(0px)" }} transition={{ type: spring }} className='grid grid-cols-1 mt-5 sm:grid-cols-2 sm:px-5 sm:gap-8 md:grid-cols-3 md:gap-3 md:-ml-5 lg:px-5 lg:gap-y-10 lg:ml-3 xl:mt-15'>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[490px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full  h-[75%] md:h-[65%] lg:h-[50%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image5} alt='image5' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Stay among the atolls in</p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Maldives</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] md:h-[60%] lg:h-[50%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image7} alt='image7' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Experience the Ourika Valley in </p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Morocco</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] lg:h-[65%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image6} alt='image6' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Live traditionally in </p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Mongolia</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[490px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] md:h-[65%] lg:h-[50%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image5} alt='image5' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Stay among the atolls in</p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Maldives</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] md:h-[60%] lg:h-[50%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image7} alt='image7' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Experience the Ourika Valley in </p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Morocco</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] lg:h-[65%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image6} alt='image6' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Live traditionally in </p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Mongolia</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[490px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] md:h-[65%] lg:h-[50%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image5} alt='image5' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Stay among the atolls in</p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Maldives</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] md:h-[60%] lg:h-[50%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image7} alt='image7' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Experience the Ourika Valley in </p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Morocco</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] lg:h-[65%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image6} alt='image6' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Live traditionally in </p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Mongolia</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[490px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] md:h-[65%] lg:h-[50%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image5} alt='image5' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Stay among the atolls in</p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Maldives</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] md:h-[60%] lg:h-[50%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-lg rounded-tr-lg' src={image7} alt='image7' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-xl rounded-br-xl px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Experience the Ourika Valley in </p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Morocco</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/60 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] lg:h-[65%] xl:h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={image6} alt='image6' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Live traditionally in </p>
                                    <p className={`${nunito.className} text-[#5CD6C0] !font-semibold text-[13px] lg:text-lg`}>Mongolia</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.</p>
                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
    )
}

export default PlaceToStayCards