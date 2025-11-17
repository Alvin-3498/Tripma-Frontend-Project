import React from 'react'
import { Nunito } from 'next/font/google'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import image1 from '@/app/assets/picture1.jpg'
import image2 from '@/app/assets/picture2.jpg'
import image3 from '@/app/assets/picture3.png'
import image4 from '@/app/assets/picture4.jpg'
import image5 from '@/app/assets/picture5.jpg'
import image6 from '@/app/assets/picture6.jpg'
import image7 from '@/app/assets/picture7.jpg'
import Link from 'next/link'


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const FlightDeals = () => {
    return (
        <div>
            {/* flight-deals-container */}
            <div className='sm:px-5 2xl:px-10'>

                {/* heading */}
                <div className='flex justify-between'>
                    <div className='px-3 md:flex md:gap-1'>
                        <p className={`${nunito.className} text-[15px] text-gray-500 !font-bold sm:text-[16px] lg:text-lg 2xl:text-2xl`}>Find your next adventure with these</p>
                        <p className={`${nunito.className} text-[15px] text-blue-600 !font-bold sm:text-[16px] lg:text-lg 2xl:text-2xl`}>flight deals</p>
                    </div>
                    <Link href='/flightdeals-cards'>
                    <div  className='flex mr-3 cursor-pointer'>
                        <p className={`${nunito.className} text-[15px] text-gray-400 sm:text-[16px] lg:text-lg 2xl:text-2xl`}>All</p>
                        <ArrowRight className='text-gray-400 w-4 h-5 sm:w-5 sm:h-5 lg:w-5 lg:h-7' />
                    </div>
                    </Link>
                </div>

                {/* flight-deals */}
                <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-1 2xl:gap-5'>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[230px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={image1} alt='image1' />
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
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%] overflow-hidden rounded-tl-xl rounded-tr-xl md:h-[70%] lg:h-[65%] xl:h-[80%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={image2} alt='image1' />
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
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%] overflow-hidden rounded-tl-xl rounded-tr-xl lg:h-[73%] xl:h-[80%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-200 hover:scale-125' src={image3} alt='image1' />
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
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:col-span-3 xl:h-[400px]'>
                        {/* image */}
                        <div className='w-full h-[73%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-200 hover:scale-125' src={image4} alt='image1' />
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
                </div>
            </div>


             {/* places-to-stay */}
                    <div className='mt-15 sm:px-5 2xl:px-10'>
                        {/* title */}
                        <div className='flex justify-between mx-3'>
                            <div className='md:flex md:gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold sm:text-[16px] lg:text-lg 2xl:text-2xl`}>Explore unique</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} !font-semibold text-[#5CD6C0] sm:text-[16px] lg:text-lg 2xl:text-2xl`}>places to stay</p>
                                </div>
                            </div>

                            <Link href='/placetostay-cards'>
                            <div className='flex cursor-pointer'>
                                <p className={`${nunito.className} text-gray-400 sm:text-[16px] lg:text-lg 2xl:text-2xl`}>All</p>
                                <ArrowRight className='text-gray-400 w-4 h-5 sm:w-5 sm:h-5 lg:w-5 lg:h-7' />
                            </div>
                            </Link>
                        </div>

                        {/* places-cards */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-3 md:-ml-5 lg:px-5'>

                            {/* individual-card */}
                            <div className='min-w-[280px] h-[490px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                                {/* image */}
                                <div className='w-full h-[75%] overflow-hidden rounded-tl-xl rounded-tr-xl md:h-[60%] xl:h-[75%]'>
                                    <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-200 hover:scale-125' src={image5} alt='image5' />
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
                            <div className='min-w-[280px] h-[400px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                                {/* image */}
                                <div className='w-full h-[75%] overflow-hidden rounded-tl-xl rounded-tr-xl md:h-[60%] xl:h-[75%]'>
                                    <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-200 hover:scale-125' src={image7} alt='image7' />
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
                            <div className='min-w-[280px] h-[400px] mx-3 mt-4 shadow-xl rounded-lg sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                                {/* image */}
                                <div className='w-full h-[75%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                                    <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-200 hover:scale-125' src={image6} alt='image6' />
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
                        </div>

                        <Link href='/placetostay-cards'>
                        <div className='flex justify-center pt-8 sm:pt-12 md:pt-18 lg:pt-25'>
                            <button className={`${nunito.className} bg-[#605DEC] text-white text-[13px] px-3 py-2 rounded-md cursor-pointer transition-all duration-300 hover:-translate-y-4 hover:bg-blue-900 md:text-[15px] xl:text-lg`}>Explore more stays</button>
                        </div>
                        </Link>
                    </div>

        </div>
    )
}

export default FlightDeals