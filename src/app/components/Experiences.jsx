import React from 'react'
import { Nunito } from 'next/font/google'
import Image from 'next/image'
import hotel5image from '@/app/assets/hotel5.jpg'
import hotel6image from '@/app/assets/hotel6.jpg'


const nunito = Nunito({
    subsets : ['cyrillic'],
    weight : ['400']
})

const Experiences = () => {
    return (
        <div>
            {/* experiences-container */}
            <div>
                {/* title */}
                <div className='md:mt-5 xl:mt-10'>
                    <p className={`${nunito.className} text-xl !font-bold text-[#605DEC] text-center lg:text-2xl xl:text-3xl`}>Featured Experiences</p>
                </div>

                {/* hotel-cards */}
                <div className='grid grid-cols-1 justify-items-center px-5 gap-10 mt-5 md:grid-cols-2 lg:px-15 lg:mt-10 xl:mt-15'>

                    {/* individual-hotel-cards */}
                    <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[400px] lg:h-[320px] xl:w-[500px] xl:h-[400px]'>
                        {/* image */}
                        <div className='w-full h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={hotel5image} alt='hotel1image' />
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
                    <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[400px] lg:h-[320px] xl:w-[500px] xl:h-[400px]'>
                        {/* image */}
                        <div className='w-full h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={hotel6image} alt='hotel1image' />
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

                    {/* individual-hotel-cards */}
                    <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[400px] lg:h-[320px] xl:w-[500px] xl:h-[400px]'>
                        {/* image */}
                        <div className='w-full h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={hotel5image} alt='hotel1image' />
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
                    <div className='w-[280px] h-[300px] rounded-xl shadow-xl shadow-gray-500/60 md:w-[340px] lg:w-[400px] lg:h-[320px] xl:w-[500px] xl:h-[400px]'>
                        {/* image */}
                        <div className='w-full h-[75%]'>
                            <Image className='w-full h-full object-cover rounded-tl-xl rounded-tr-xl' src={hotel6image} alt='hotel1image' />
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
            </div>
        </div>
    )
}

export default Experiences