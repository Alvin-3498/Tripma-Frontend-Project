import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Nunito } from 'next/font/google'
import Image from 'next/image';
import place1 from '@/app/assets/place1.jpg'
import place2 from '@/app/assets/place2.jpg'
import place3 from '@/app/assets/place3.jpg'
import image1 from '@/app/assets/picture1.jpg'
import image4 from '@/app/assets/picture4.jpg'
import image8 from '@/app/assets/picture8.jpg'
import Link from 'next/link';


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
});

const Hotelcards = () => {
    return (
        <div>


            {/* places-to-stay */}
            <div className='mt-15 sm:px-5 2xl:px-10'>
                {/* title */}
                <div className='flex justify-between mx-3'>
                    <div className='md:flex md:gap-1'>
                        <div>
                            <p className={`${nunito.className} text-gray-600 !font-semibold sm:text-[16px] lg:text-lg 2xl:text-2xl`}>Find <span className='text-[#605DEC]'>places to stay</span> in Japan</p>
                        </div>
                    </div>

                    <Link href='/hotels/placetostay-cards'>
                        <div className='flex cursor-pointer'>
                            <p className={`${nunito.className} text-gray-400 sm:text-[16px] lg:text-lg 2xl:text-2xl`}>All</p>
                            <ArrowRight className='text-gray-400 w-4 h-5 sm:w-5 sm:h-5 lg:w-5 lg:h-7' />
                        </div>
                    </Link>
                </div>

                {/* places-cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-8 md:gap-6 md:pr-2 lg:gap-25 xl:gap-10 xl:grid-cols-3 2xl:gap-5'>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[490px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={place1} alt='image5' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-[#605DEC] text-[13px] lg:text-lg`}>Hotel Kaneyamaen and Bessho SASA</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={place2} alt='image7' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-[#605DEC] text-[13px] lg:text-lg`}>HOTEL THE FLAG 大阪市</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Make a stop in Osaka and stay at HOTEL THE FLAG, just a few minutes walk to experience the food culture surrounding Dontonbori. Just one minute away is the Shinsaibashi shopping street.</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-card */}
                    <div className='min-w-[280px] h-[400px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[75%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={place3} alt='image6' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-[#605DEC] text-[13px] lg:text-lg`}>9 Hours Shinjuku</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Experience a truly unique stay in an authentic Japanese capsule hotel. 9 Hours Shinjuku is minutes from one of Japan’s busiest train stations. Just take the NEX train from Narita airport!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* flight-deals-container */}
            <div className='mt-35 sm:px-5 2xl:px-10'>

                {/* heading */}
                <div className='flex justify-between'>
                    <div className='px-3 md:flex md:gap-1'>
                        <p className={`${nunito.className} text-[15px] text-gray-500 !font-bold sm:text-[16px] lg:text-lg 2xl:text-2xl`}>People in <span className='text-[#605DEC]'>San Francisco</span> also searched for</p>
                    </div>

                    <Link href='/hotels/flightdeals-cards'>
                        <div className='flex mr-3 cursor-pointer'>
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
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Shanghai, <span className='text-[#605DEC]'>China</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$598</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>An international city rich in culture</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={image4} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Nairobi, <span className='text-[#605DEC]'>Kenya</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$1,248</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>Dubbed the Safari Capital of the World</p>
                            </div>
                        </div>
                    </div>

                    {/* individual-flight-deal */}
                    <div className='min-w-[280px] h-[350px] mx-3 mt-4 shadow-xl rounded-xl sm:min-w-[280px] sm:h-[350px] md:min-w-[240px] lg:min-w-[300px] xl:min-w-[200px] xl:h-[400px] 2xl:min-w-[350px] 2xl:h-[500px]'>
                        {/* image */}
                        <div className='w-full h-[80%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={image8} alt='image1' />
                        </div>
                        {/* description */}
                        <div className='p-3 bg-white rounded-bl-lg rounded-br-lg px-7'>
                            <div className='flex justify-between'>
                                <div className='flex gap-1'>
                                    <p className={`${nunito.className} text-gray-600 !font-semibold text-[13px] lg:text-lg`}>Seoul, <span className='text-[#605DEC]'>South Korea</span></p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-gray-600 text-[13px] lg:text-lg`}>$589</p>
                                </div>
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[11px] lg:text-[16px]`}>This modern city is a traveler’s dream</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hotelcards