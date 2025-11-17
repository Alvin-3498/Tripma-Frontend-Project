import React from 'react'
import logoText from '@/app/assets/round.svg'
import { Nunito } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import applelogo from '@/app/assets/icon.svg'
import playstorelogo from '@/app/assets/playstorelogo.png'
import twitterlogo from '@/app/assets/twitter.svg'
import instagramlogo from '@/app/assets/instagram.svg'
import facebooklogo from '@/app/assets/facebook1.svg'



const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const Footer = () => {
    return (
        <div>
            {/* footer-container */}
            <div className='w-full'>
                <div className='pt-20 grid md:grid-cols-[20%_80%] 2xl:px-5'>

                    {/* website-logo */}
                    <div className='w-[100px] ml-8 md:ml-15 xl:ml-25'>
                        <Image src={logoText} alt='logo' className='w-20 h-20 md:w-25 md:h-25 xl:w-30 xl:h-30' />
                    </div>



                    <div className='grid grid-cols-2 mr-5 md:grid-cols-4 md:mt-6'>

                        {/* link-group-1 */}
                        <div className='flex flex-col gap-4 mt-5 ml-8'>
                            <p className={`${nunito.className} text-gray-600 text-[14px] !font-semibold cursor-pointer md:text-[15px] xl:text-lg`}>About</p>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>About Tripma</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>How it works</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Careers</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Press</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Blog</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Forum</Link>
                        </div>

                        {/* link-group-2 */}
                        <div className='flex flex-col gap-4 mt-5 ml-8'>
                            <p className={`${nunito.className} text-gray-600 text-[14px] !font-semibold cursor-pointer md:text-[15px] xl:text-lg`}>Partner with us</p>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Partnership programs</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Affiliate programs</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Connectivity partners</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Promotions and events</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Integrations</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Community</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Loyalty program</Link>
                        </div>

                        {/* link-group-3 */}
                        <div className='flex flex-col gap-4 mt-5 ml-8'>
                            <p className={`${nunito.className} text-gray-600 text-[14px] !font-semibold cursor-pointer md:text-[15px] xl:text-lg`}>Support</p>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Help Center</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Contact us</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Privacy policy</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Terms of service</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Trust and safety</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Accessibility</Link>
                        </div>

                        {/* link-group-4 */}
                        <div className='flex flex-col gap-4 mt-5 ml-8'>
                            <p className={`${nunito.className} text-gray-600 text-[14px] !font-semibold cursor-pointer md:text-[15px] xl:text-lg`}>Get the app</p>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Tripma for Android</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Tripma for iOS</Link>
                            <Link href={''} className={`${nunito.className} text-gray-400 text-[14px] cursor-pointer md:text-[15px] xl:text-lg`}>Mobile site</Link>
                            <Link className='bg-black px-2 py-2 rounded-md w-[130px] xl:w-[150px]' href='https://www.apple.com/in/app-store/'>
                                <div className='flex gap-1.5'>
                                    {/* logo */}
                                    <div>
                                        <Image className='w-8 h-8' src={applelogo} alt='applelogo' />
                                    </div>
                                    {/* text */}
                                    <div>
                                        <p className='text-white text-[8px] xl:text-[10px]'>Download on the</p>
                                        <p className='text-white !font-bold text-[13px] xl:text-[15px]'>App Store</p>
                                    </div>
                                </div>
                            </Link>

                            <Link className='bg-black px-2 py-2 rounded-md w-[130px] xl:w-[150px]' href='https://play.google.com/store/games'>
                                <div className='flex gap-1.5'>
                                    {/* logo */}
                                    <div>
                                        <Image className='w-8 h-8' src={playstorelogo} alt='applelogo' />
                                    </div>
                                    {/* text */}
                                    <div>
                                        <p className='text-white text-[8px] xl:text-[10px]'>GET IT ON</p>
                                        <p className='text-white !font-bold text-[11px] xl:text-[15px]'>Google Play</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className='w-full border-gray-300 mt-15' /><br />

                <div className='flex justify-around'>
                    <div className='flex gap-3 md:gap-6'>
                        <Link href='https://x.com/'><Image src={twitterlogo} alt='twitterlogo' /></Link>
                        <Link href='https://www.instagram.com/' className='mt-0.5'><Image src={instagramlogo} alt='instagramlogo' /></Link>
                        <Link href='https://www.facebook.com/' className='mt-1'><Image src={facebooklogo} alt='facebooklogo' /></Link>
                    </div>
                    <div className=''>
                        <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[16px] xl:text-lg`}>© 2020 Tripma incorporated</p>
                    </div>
                </div>

                <br /><br />

            </div>
        </div>
    )
}

export default Footer