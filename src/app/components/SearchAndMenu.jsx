import React from 'react'
import arrrivalpic from '@/app/assets/arrival.png';
import departurepic from '@/app/assets/departure.png';
import calenderpic from '@/app/assets/calender.png';
import person from '@/app/assets/person.png';
import Image from 'next/image';
import { Nunito } from 'next/font/google';
import arrowdown from '@/app/assets/chevrondown.svg'

const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const SearchAndMenu = () => {
    return (
        <div>
            <div className='w-full min-h-[400px] flex flex-col relative'>

                {/* passenger-input-fields */}
                <div className='absolute top-[5%] left-[20%] sm:top-[-15%] md:ml-5 lg:left-[0%] lg:top-[0%] xl:top-[1%] xl:left-[0%] 2xl:top-[-10%]'>
                    <div className='grid gap-5 sm:grid-cols-2 sm:ml-8 sm:mt-25 lg:grid-cols-6'>
                        <div className='flex w-[200px] h-[30px] border border-gray-200 bg-white hover:border-[#605DEC] shadow-lg shadow-gray-300 rounded-xs outline-none lg:w-[200px] lg:h-[45px]'>
                            <Image src={departurepic} alt='departure-image' className='w-4 h-4 mt-1 ml-2 lg:w-5 lg:h-5 lg:mt-2' />
                            <input type="text" className={`${nunito.className} outline-none pl-2 text-xs w-full lg:text-lg`} placeholder='SFO' />
                        </div>
                        <div className='flex w-[200px] h-[30px] border border-gray-200 bg-white hover:border-[#605DEC] shadow-lg shadow-gray-300 rounded-xs outline-none lg:w-[200px] lg:h-[45px] lg:ml-7 xl:-ml-5 2xl:-ml-13'>
                            <Image src={arrrivalpic} alt='arrival-image' className='w-4 h-4 mt-1 ml-2 lg:w-5 lg:h-5 lg:mt-2' />
                            <input type="text" className={`${nunito.className} outline-none pl-2 text-xs w-full lg:text-lg`} placeholder='NRT' />
                        </div>
                        <div className='flex w-[200px] h-[30px] border border-gray-200 bg-white hover:border-[#605DEC] shadow-lg shadow-gray-300 rounded-xs outline-none lg:w-[200px] lg:h-[45px] lg:ml-14 xl:-ml-10 xl:w-[220px] xl:h-[45px] 2xl:-ml-26'>
                            <Image src={calenderpic} alt='calender-image' className='w-6 h-6 mt-0.5 ml-2 lg:w-8 lg:h-8 lg:mt-1' />
                            <input type="text" className={`${nunito.className} outline-none pl-2 text-xs w-full lg:text-lg`} placeholder='Depart - Return' />
                        </div>
                        <div className='flex w-[200px] h-[30px] border border-gray-200 bg-white hover:border-[#605DEC] shadow-lg shadow-gray-300 rounded-xs outline-none lg:w-[200px] lg:h-[45px] lg:ml-21 xl:-ml-10 xl:w-[220px] xl:h-[45px] 2xl:-ml-27'>
                            <Image src={person} alt='departure-image' className='w-6 h-6 mt-0.5 ml-2 lg:w-8 lg:h-8 lg:mt-1' />
                            <input type="text" className={`${nunito.className} outline-none pl-2 text-xs w-full lg:text-lg`} placeholder='1 adult' />
                        </div>
                    </div>
                    <div className='ml-16 mt-8 sm:ml-51 sm:mt-10 lg:ml-[480px] lg:mt-20 lg:absolute lg:top-[14%] lg:left-[33%] xl:left-[27%] 2xl:left-[310px] 2xl:top-[22px]'>
                        <button className={`${nunito.className} bg-[#605DEC] py-1 px-3 text-white cursor-pointer rounded-md lg:py-2 lg:px-5 lg:text-lg 2xl:py-1.5`}>Search</button>
                    </div>
                </div>


                {/* menu-options */}
                <div className='absolute top-[75%] grid grid-cols-2 gap-3 pl-12 sm:grid-cols-6 sm:top-[60%] sm:pl-8 sm:gap-0 md:left-[5%] lg:top-[50%] lg:left-[2%] xl:left-[1.5%] 2xl:top-[40%] 2xl:left-[1.5%]'>
                    <div className='flex gap-2 border-2 border-gray-300 transition-all duration-300 hover:border-gray-400 w-[115px] px-3 py-1 rounded-md cursor-pointer lg:w-[135px] lg:h-[38px] lg:px-4 2xl:w-[145px]'>
                        <p className={`${nunito.className} text-gray-900 text-[13px] lg:text-[16px] 2xl:text-lg`}>Max price</p>
                        <Image className='w-5 h-5 mt-0 2xl:mt-1' src={arrowdown} alt='arrowdown-image'/>
                    </div>
                    <div className='flex gap-2 border-2 border-gray-300 transition-all duration-300 hover:border-gray-400 w-[90px] px-3 py-1 rounded-md cursor-pointer sm:ml-2.5 lg:w-[105px] lg:h-[38px] lg:px-4 lg:ml-3 2xl:w-[110px] 2xl:ml-4'>
                        <p className={`${nunito.className} text-gray-900 text-[13px] lg:text-[16px] 2xl:text-lg`}>Shops</p>
                        <Image className='w-5 h-5 mt-0 2xl:mt-1' src={arrowdown} alt='arrowdown-image'/>
                    </div>
                    <div className='flex gap-2 border-2 border-gray-300 transition-all duration-300 hover:border-gray-400 w-[90px] px-3 py-1 rounded-md cursor-pointer lg:w-[100px] lg:h-[38px] lg:px-4 2xl:w-[110px] 2xl:ml-1'>
                        <p className={`${nunito.className} text-gray-900 text-[13px] lg:text-[16px] 2xl:text-lg`}>Times</p>
                        <Image className='w-5 h-5 mt-0 2xl:mt-1' src={arrowdown} alt='arrowdown-image'/>
                    </div>
                    <div className='flex gap-2 border-2 border-gray-300 transition-all duration-300 hover:border-gray-400 w-[95px] px-3 py-1 rounded-md cursor-pointer sm:-ml-3 lg:w-[110px] lg:h-[38px] lg:px-4 lg:-ml-5 2xl:w-[120px] 2xl:-ml-2'>
                        <p className={`${nunito.className} text-gray-900 text-[13px] lg:text-[16px] 2xl:text-lg`}>Airlines</p>
                        <Image className='w-5 h-5 mt-0 2xl:mt-1' src={arrowdown} alt='arrowdown-image'/>
                    </div>
                    <div className='flex gap-2 border-2 border-gray-300 transition-all duration-300 hover:border-gray-400 w-[115px] px-3 py-1 rounded-md cursor-pointer sm:-ml-5 lg:w-[140px] lg:h-[38px] lg:px-4 lg:-ml-7 2xl:w-[145px] 2xl:-ml-3'>
                        <p className={`${nunito.className} text-gray-900 text-[13px] lg:text-[16px] 2xl:text-lg`}>Seat class</p>
                        <Image className='w-5 h-5 mt-0 2xl:mt-1' src={arrowdown} alt='arrowdown-image'/>
                    </div>
                    <div className='flex gap-2 border-2 border-gray-300 transition-all duration-300 hover:border-gray-400 w-[85px] px-3 py-1 rounded-md cursor-pointer sm:-ml-3.5 lg:w-[100px] lg:h-[38px] lg:px-4 2xl:w-[1`0px] 2xl:ml-2'>
                        <p className={`${nunito.className} text-gray-900 text-[13px] lg:text-[16px] 2xl:text-lg`}>More</p>
                        <Image className='w-5 h-5 mt-0 2xl:mt-1' src={arrowdown} alt='arrowdown-image'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchAndMenu