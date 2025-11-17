import React from 'react'
import { Cal_Sans, Nunito } from 'next/font/google'
import user1 from '@/app/assets/user1.jpg'
import user2 from '@/app/assets/user2.jpg'
import user3 from '@/app/assets/user3.jpg'
import star from '@/app/assets/Star.svg'
import starunfilled from '@/app/assets/StarUnfilled.svg'
import Image from 'next/image'


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const UserReviews = () => {
    return (
        <div>
            {/* user-review-container */}
            <div className='pt-20 px-5 2xl:px-10'>
                {/* title */}
                <div>
                    <p className={`${nunito.className} text-[18px] flex gap-1 justify-center text-gray-600 !font-semibold sm:text-lg lg:text-xl xl:text-2xl`}>What <span className='text-[#605DEC]'>Tripma</span> users are saying</p>
                </div>

                {/* user-reviews */}
                <div className='pt-5 grid sm:gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-8'>


                    {/* individual-user-review */}
                    <div className='flex gap-5 w-full pt-10 lg:gap-1 2xl:gap-0'>
                        {/* image */}
                        <div className='w-[20%]'>
                            <Image className='w-[50px] h-[50px] rounded-full object-cover' src={user2} alt='userpic_1' />
                        </div>

                        {/* description */}
                        <div className='w-[80%]'>
                            {/* user-name */}
                            <div>
                                <p className={`${nunito.className} text-gray-500 text-[15px] sm:text-[17px] lg:text-lg !font-semibold`}>Yifei Chen</p>
                            </div>
                            {/* location */}
                            <div className='flex gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-[15px] text-gray-400 sm:text-[17px] lg:text-lg`}>Seoul,South Korea</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[15px] text-gray-300 sm:text-[17px] lg:text-lg`}>|</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[15px] text-gray-400 sm:text-[17px] lg:text-lg`}>April 2019</p>
                                </div>
                            </div>
                            {/* rating */}
                            <div className='flex pt-1.5 gap-1'>
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                            </div>
                            {/* user-experience */}
                            <div>
                                <div>
                                    <div>
                                        <p className={`${nunito.className} text-[15px] pt-2 sm:text-[17px] lg:text-lg`}>
                                            What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-[15px] text-blue-600 sm:text-[17px] lg:text-lg`}>read more...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* individual-user-review */}
                    <div className='flex gap-5 w-full pt-10 lg:gap-1 2xl:gap-0'>
                        {/* image */}
                        <div className='w-[20%]'>
                            <Image className='w-[50px] h-[50px] rounded-full object-cover' src={user1} alt='userpic_1' />
                        </div>

                        {/* description */}
                        <div className='w-[80%]'>
                            {/* user-name */}
                            <div>
                                <p className={`${nunito.className} text-gray-500 text-[15px] sm:text-[17px] lg:text-lg !font-semibold`}>Kaori Yamaguchi</p>
                            </div>
                            {/* location */}
                            <div className='flex gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-[15px] text-gray-400 sm:text-[17px] lg:text-lg`}>Honolulu, Hawaii</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[15px] text-gray-300 sm:text-[17px] lg:text-lg`}>|</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[15px] text-gray-400 sm:text-[17px] lg:text-lg`}>February 2017</p>
                                </div>
                            </div>
                            {/* rating */}
                            <div className='flex pt-1.5 gap-1'>
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={starunfilled} alt='rating' />
                            </div>
                            {/* user-experience */}
                            <div>
                                <div>
                                    <div>
                                        <p className={`${nunito.className} text-[15px] pt-2 sm:text-[17px] lg:text-lg`}>
                                            My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-[15px] text-blue-600 sm:text-[17px] lg:text-lg`}>read more...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* individual-user-review */}
                    <div className='flex gap-5 w-full pt-10 lg:gap-1 2xl:gap-0'>
                        {/* image */}
                        <div className='w-[20%]'>
                            <Image className='w-[50px] h-[50px] rounded-full object-cover' src={user3} alt='userpic_1' />
                        </div>

                        {/* description */}
                        <div className='w-[80%]'>
                            {/* user-name */}
                            <div>
                                <p className={`${nunito.className} text-gray-500 text-[15px] sm:text-[17px] lg:text-lg !font-semibold`}>Anthony Lewis</p>
                            </div>
                            {/* location */}
                            <div className='flex gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-[15px] text-gray-400 sm:text-[17px] lg:text-lg`}>Berlin, Germany</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[15px] text-gray-300 sm:text-[17px] lg:text-lg`}>|</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[15px] text-gray-400 sm:text-[17px] lg:text-lg`}>April 2019</p>
                                </div>
                            </div>
                            {/* rating */}
                            <div className='flex pt-1.5 gap-1'>
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                                <Image className='w-[15px] h-[15px]' src={star} alt='rating' />
                            </div>
                            {/* user-experience */}
                            <div>
                                <div>
                                    <div>
                                        <p className={`${nunito.className} text-[15px] pt-2 sm:text-[17px] lg:text-lg`}>
                                            When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-[15px] text-blue-600 sm:text-[17px] lg:text-lg`}>read more...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default UserReviews