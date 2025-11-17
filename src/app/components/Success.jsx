import React, { useState } from 'react'
import { Nunito } from 'next/font/google'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'
import airline1 from '@/app/assets/Airlines3.svg'
import visalogo from '@/app/assets/visa.svg'
import map2image from '@/app/assets/Map2.png'
import hotel1image from '@/app/assets/hotel1.jpg'
import hotel2image from '@/app/assets/hotel2.jpg'
import hotel3image from '@/app/assets/place2.jpg'
import hotel4image from '@/app/assets/place3.jpg'
import hotel5image from '@/app/assets/hotel5.jpg'
import hotel6image from '@/app/assets/hotel6.jpg'
import Link from 'next/link'


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})


const Success = () => {

    const [Booksuccess, setBooksuccess] = useState(true);


    const handleBooksuccess = () => {
        setBooksuccess(!Booksuccess)
    }

    return (
        <div>
            {/* bookingsuccess */}
            <div className='grid grid-cols-1 px-5 md:mt-5 lg:grid-cols-[65%_35%] lg:gap-12 lg:px-15 xl:mt-10 xl:px-20'>
                {/* left-side */}
                <div>
                    {/* success-message */}
                    {Booksuccess ? (
                        <div className='flex gap-2 border-1 px-3 py-4 rounded-lg border-[#007B65] bg-green-50 w-fit'>
                            <div>
                                <p className={`${nunito.className} text-[#007B65] text-[14px] lg:text-[16px]`}>Your flight has been booked successfully! Your confirmation number is #381029404387</p>
                            </div>
                            <div>
                                <XMarkIcon onClick={handleBooksuccess} className='w-5 h-5 text-gray-400 cursor-pointer' />
                            </div>
                        </div>
                    ) : (null)}

                    {/* user-details */}
                    <div className='flex flex-col gap-3 mt-10 xl:gap-6'>
                        <div>
                            <p className={`${nunito.className} text-[#605DEC] text-xl !font-bold lg:text-2xl xl:text-3xl`}>Bon voyage, Sophia!</p>
                        </div>
                        <div>
                            <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg xl:text-xl`}>Confirmation number: #381029404387</p>
                        </div>
                        <div>
                            <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px] lg:pr-10 xl:pr-30 xl:text-lg`}>Thank you for booking your travel with Tripma! Below is a summary of your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your booking confirmation to your email address. You can also find this page again in <span className='text-[#605DEC]'>My trips</span>.</p>
                        </div>
                    </div>

                    {/* flight-summary */}
                    <div className='mt-10'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 !font-bold text-lg lg:text-xl xl:text-2xl`}>Flight summary</p>
                        </div>

                        {/* departure-details */}
                        <div className='mt-5 flex flex-col gap-3'>
                            <div>
                                <p className={`${nunito.className} text-gray-600 text-[16px] lg:text-lg`}>Departing February 25th, 2021</p>
                            </div>

                            <div>

                                {/* individual-row */}
                                <div className='p-5 w-full flex gap-5 border-2 border-gray-200 rounded-lg overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

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
                                            <p className={`${nunito.className} text-[14px] md:text-[16px] text-gray-400`}>value</p>
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
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px]`}>Seat 9F (economy, window), 1 checked bag</p>
                            </div>
                        </div>


                        {/* arrival-details */}
                        <div className='mt-10 flex flex-col gap-3'>
                            <div>
                                <p className={`${nunito.className} text-gray-600 text-[16px] lg:text-lg`}>Arriving March 21st, 2021</p>
                            </div>

                            <div>

                                {/* individual-row */}
                                <div className='p-5 w-full flex gap-5 border-2 border-gray-200 rounded-lg overflow-x-scroll transition-all duration-200 hover:bg-purple-50 md:p-6 lg:gap-10 xl:gap-18 2xl:overflow-hidden'>

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
                                            <p className={`${nunito.className} text-[14px] md:text-[16px] text-gray-400`}>value</p>
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
                            </div>

                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px]`}>Seat 4F (business, window), 1 checked bag</p>
                            </div>
                        </div>

                    </div>


                    {/* price-breakdown */}
                    <div className='mt-15'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 !font-bold text-lg lg:text-xl xl:text-2xl`}>Price breakdown</p>
                        </div>

                        <div className='flex gap-18 mt-5 lg:gap-35'>
                            <div className='flex flex-col gap-3'>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>Departing Flight</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>Arriving Flight</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>Baggage fees</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>Seat upgrade (business)</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>Subtotal</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>Taxes (9.4%)</p>
                            </div>
                            <div className='flex flex-col gap-3 text-right'>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>$251.50</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>$251.50</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>$0</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>$199</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>$702</p>
                                <p className={`${nunito.className} text-[15px] text-gray-600 lg:text-[16px] xl:text-lg`}>$66</p>
                            </div>
                        </div>

                        <hr className='mt-2 border-1 border-gray-300 md:w-[40%] lg:w-[59%] xl:w-[45%] 2xl:w-[46%]' />

                        <div className='flex gap-39 mt-2 md:gap-42 lg:gap-60 xl:gap-64'>
                            <div>
                                <p className={`${nunito.className} text-gray-800 !font-semibold text-[15px] lg:text-[16px] xl:text-lg`}>Amount paid</p>
                            </div>
                            <div>
                                <p className={`${nunito.className} text-gray-800 !font-semibold text-[15px] lg:text-[16px] xl:text-lg`}>$768</p>
                            </div>
                        </div>

                        <hr className='mt-2 border-1 border-gray-300 md:w-[40%] lg:w-[59%] xl:w-[45%] 2xl:w-[46%]' />

                    </div>


                    {/* payment method */}
                    <div className='mt-15 flex flex-col gap-3'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 !font-bold text-lg lg:text-xl xl:text-2xl`}>Payment method</p>
                        </div>

                        <div className='w-[280px] h-[150px] rounded-2xl bg-linear-to-t from-[#ED5E76] to-[#EB568C] relative lg:w-[300px] lg:h-[180px] xl:w-[320px] xl:h-[200px]'>
                            <Image className='absolute top-[25px] left-[20px]' src={visalogo} alt='visalogo' />

                            <div className='mt-20 lg:mt-28 xl:mt-32'>
                                <p className={`${nunito.className} text-white pl-5`}>Sophia Knowles</p>
                            </div>
                            <div className='flex justify-around'>
                                <p className={`${nunito.className} text-white md:-ml-2 lg:-ml-3 xl:-ml-5`}>••••••••••••3456</p>
                                <p className={`${nunito.className} text-white`}>10/23</p>
                            </div>
                        </div>
                    </div>

                    {/* travel-itenary */}
                    <div className='mt-15 flex flex-col gap-5 lg:gap-6'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 !font-bold text-lg lg:text-xl xl:text-2xl`}>Share your travel itinerary</p>
                        </div>

                        {/* single-line */}
                        <div>
                            <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px] xl:text-lg`}>You can email your itinerary to anyone by entering their email address here.</p>
                        </div>

                        {/* input-fields */}
                        <div className='flex flex-col gap-3 lg:gap-6'>
                            <input className={`${nunito.className} border-2 px-2 w-[280px] h-[40px] rounded-md outline-none border-gray-400 lg:w-[330px] lg:h-[45px] xl:w-[400px]`} type="text" placeholder='Email address' />
                            <input className={`${nunito.className} border-2 px-2 w-[280px] h-[40px] rounded-md outline-none border-gray-400 lg:w-[330px] lg:h-[45px] xl:w-[400px]`} type="text" placeholder='Email address' />
                            <input className={`${nunito.className} border-2 px-2 w-[280px] h-[40px] rounded-md outline-none border-gray-400 lg:w-[330px] lg:h-[45px] xl:w-[400px]`} type="text" placeholder='Email address' />
                        </div>

                        <div>
                            <div className='flex gap-6'>
                                <button className={`${nunito.className} px-3 py-2 rounded-md cursor-pointer hover:bg-blue-800 bg-[#605DEC] text-white lg:text-lg xl:text-xl`}>Email itinerary</button>
                                <button className='text-[#605DEC] cursor-pointer hover:bg-blue-100 px-3 rounded-md lg:text-lg xl:text-xl'>Add another</button>
                            </div>
                        </div>
                    </div>


                    {/* flight-route */}
                    <div className='mt-15'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 !font-bold text-lg lg:text-xl xl:text-2xl`}>Flight Route</p>
                        </div>
                        <div className='mt-5'>
                            <Image className='rounded-lg 2xl:w-[900px] 2xl:h-[400px] 2xl:object-cover' src={map2image} alt='map2image' />
                        </div>
                    </div>

                </div>

                {/* right-side */}
                <div className='relative'>

                    {/* shop-hotels */}
                    <div className='mt-15 lg:pl-5 lg:-mt-0'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 !font-bold text-lg lg:text-xl xl:text-2xl`}>Shop <span className='text-[#605DEC]'>hotels</span></p>
                        </div>

                        <div className='mt-3'>
                            <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px] lg:pr-15 xl:text-lg`}>Tripma partners with thousands of hotels to get you the best deal. Save up to 30% when you add a hotel to your trip.</p>
                        </div>

                        {/* hotel-cards */}
                        <div className='mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1'>

                            {/* individual-hotel-cards */}
                            <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[300px] lg:h-[320px] xl:w-[390px] xl:h-[340px]'>
                                {/* image */}
                                <div className='w-full h-[75%] overflow-hidden rounded-tr-xl rounded-tl-xl'>
                                    <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={hotel1image} alt='hotel1image' />
                                </div>
                                {/* text */}
                                <div className='p-3'>
                                    <div className='flex justify-between'>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>Ryokan Japan</p>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>$439</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[15px]`}>Enjoy views of the garden from your room</p>
                                    </div>
                                </div>
                            </div>

                            {/* individual-hotel-cards */}
                            <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[300px] lg:h-[320px] xl:w-[390px] xl:h-[340px]'>
                                {/* image */}
                                <div className='w-full h-[75%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                                    <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={hotel2image} alt='hotel1image' />
                                </div>
                                {/* text */}
                                <div className='p-3'>
                                    <div className='flex justify-between'>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>Bessho SASA</p>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>$529</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px]`}>Japanese ryokan with private onsen bath</p>
                                    </div>
                                </div>
                            </div>

                            {/* individual-hotel-cards */}
                            <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[300px] lg:h-[320px] xl:w-[390px] xl:h-[340px]'>
                                {/* image */}
                                <div className='w-full h-[75%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                                    <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={hotel3image} alt='hotel1image' />
                                </div>
                                {/* text */}
                                <div className='p-3'>
                                    <div className='flex justify-between'>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>HOTEL THE FLAG 大阪市</p>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>$139</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px]`}>Modern hotel in the heart of Osaka</p>
                                    </div>
                                </div>
                            </div>

                            {/* individual-hotel-cards */}
                            <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[300px] lg:h-[320px] xl:w-[390px] xl:h-[340px]'>
                                {/* image */}
                                <div className='w-full h-[75%] overflow-hidden rounded-tr-xl rounded-tl-xl'>
                                    <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={hotel4image} alt='hotel1image' />
                                </div>
                                {/* text */}
                                <div className='p-3'>
                                    <div className='flex justify-between'>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>9 Hours Shinjuku</p>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>$59</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px]`}>A convenient capsule hotel at Shinjuku station</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link className='flex justify-center cursor-pointer mt-10 md:mt-15 md:-ml-5 lg:ml-10 xl:ml-0 2xl:-ml-10' href='/bookingsuccess/shopallhotels'>
                            <button className={`${nunito.className} text-[#605DEC] text-[14px] border-1 px-3 py-2 rounded-md hover:bg-blue-100 md:text-[16px] lg:text-lg`}>Shop all hotels</button>
                        </Link>

                    </div>


                    {/* unique-experiences */}
                    <div className='mt-10 lg:pl-5 lg:mt-15'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 !font-bold text-lg lg:text-xl xl:text-2xl`}>Find unique <span className='text-[#605DEC]'>experiences</span></p>
                        </div>

                        <div className='mt-3'>
                            <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px] lg:pr-5 xl:text-lg`}>Find events and authentic cultrual experiences available exclusively to Tripma users.</p>
                        </div>

                        {/* hotel-cards */}
                        <div className='mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1'>

                            {/* individual-hotel-cards */}
                            <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[300px] lg:h-[320px] xl:w-[390px] xl:h-[340px]'>
                                {/* image */}
                                <div className='w-full h-[75%] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                                    <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={hotel5image} alt='hotel1image' />
                                </div>
                                {/* text */}
                                <div className='p-3'>
                                    <div className='flex justify-between'>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>Nihon Kimono</p>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>$89</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[15px]`}>Wear the national dress of Japan around the city</p>
                                    </div>
                                </div>
                            </div>

                            {/* individual-hotel-cards */}
                            <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[300px] lg:h-[320px] xl:w-[390px] xl:h-[340px]'>
                                {/* image */}
                                <div className='w-full h-[75%] overflow-hidden rounded-tr-xl rounded-tl-xl'>
                                    <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl transition-all duration-300 hover:scale-125' src={hotel6image} alt='hotel1image' />
                                </div>
                                {/* text */}
                                <div className='p-3'>
                                    <div className='flex justify-between'>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>teamLab Borderless</p>
                                        <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-lg`}>$39</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px]`}>A modern sensory experience of light and sound</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                            <Link className='flex justify-center mt-10 md:mt-15 md:-ml-5 lg:ml-10 xl:ml-0 2xl:-ml-10' href='/bookingsuccess/viewallexp'>
                                <button className={`${nunito.className} text-[#605DEC] text-[14px] border-1 px-3 py-2 rounded-md hover:bg-blue-100 md:text-[16px] lg:text-lg`}>View all experiences</button>
                            </Link>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Success