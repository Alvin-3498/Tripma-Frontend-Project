"use client";
import airline1 from '@/app/assets/Airlines3.svg'
import Image from 'next/image';
import googleicon from '@/app/assets/google.svg';
import appleicon from '@/app/assets/applemac.svg';
import facebookicon from '@/app/assets/facebook.svg';
import { Nunito } from 'next/font/google';
import Footer from '../components/Footer';
import Link from 'next/link';


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})


export default function paymentslayout({ children, transactions }) {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[65%_35%]">
                <div className='px-5 md:px-10 md:mt-5 lg:px-15 xl:mt-10 2xl:px-20'>

                    {/* titleandpara */}
                    <div>
                        <div>
                            <p className={`${nunito.className} text-lg text-[#605DEC] !font-bold md:text-xl xl:text-2xl`}>Payment method</p>
                        </div>
                        <div>
                            <p className={`${nunito.className} text-gray-400 text-[14px] md:text-[15px] xl:text-lg xl:pr-40`}>Select a payment method below. Tripma processes your payment securely with end-to-end encryption.</p>
                        </div>
                    </div>

                    {children}

                    {transactions}

                    {/* create-account */}
                    <div className='mt-10'>
                        {/* title */}
                        <div className='flex flex-col gap-3'>
                            <div>
                                <p className={`${nunito.className} text-gray-600 text-[16px] md:text-lg`}>Create an account</p>
                            </div>
                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[14px] md:text-[15px]`}>Tripma is free to use as a guest, but if you create an account today, you can save and view flights, manage your trips, earn rewards, and more.</p>
                            </div>
                        </div>

                        {/* form */}
                        <div className='flex flex-col gap-5 mt-5'>
                            <div className='flex gap-2'>
                                <input type='checkbox' />
                                <p className={`${nunito.className} text-gray-600 text-[14px] md:text-[15px]`}>Save card and create account for later</p>
                            </div>

                            <div className='flex flex-col gap-5'>
                                <input className={`${nunito.className} border-1 border-gray-300 w-[270px] h-[35px] text-[14px] rounded-md px-2 md:text-[15px] md:w-[400px] md:h-[40] xl:w-[500px] xl:h-[45px]`} type='text' placeholder='Email address or phone number' />
                                <input className={`${nunito.className} border-1 border-gray-300 w-[270px] h-[35px] text-[14px] rounded-md px-2 md:textx-[15px] md:w-[400px] md:h-[40] xl:w-[500px] xl:h-[45px]`} type='text' placeholder='Password' />
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-10'>
                        <hr className='border-1 w-[41%] border-gray-200 md:w-[26%] xl:w-[28%]' />
                        <p className={`${nunito.className} text-gray-500 -mt-3.5 bg-white px-3`}>or</p>
                        <hr className='border-1 w-[41%] border-gray-200 md:w-[26%] xl:w-[28%]' />
                    </div>

                    {/* next-auth authentication */}
                    <div className='md:pt-3'>
                        <div className='flex mt-4 border-2 border-[#605DEC] rounded-md w-[270px] py-2 px-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/60 md:w-[400px] md:h-[50px] md:py-3 xl:w-[500px]'>
                            <Image className='w-3.5 h-3.5 md:ml-3 md:w-4 md:h-4 xl:ml-6 xl:w-5 xl:h-6' src={googleicon} alt="google_icon" />
                            <p className={`${nunito.className} text-xs text-[#605DEC] pl-12 md:text-[15px] md:pl-20 xl:text-[17px] xl:pl-26`}>Sign up with Google</p>
                        </div>
                        <div className='flex mt-4 border-2 border-[#605DEC] rounded-md w-[270px] py-2 px-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/60 md:w-[400px] md:h-[50px] md:py-3 xl:w-[500px]'>
                            <Image className='w-3.5 h-3.5 md:ml-3 md:w-4 md:h-4 xl:ml-6 xl:w-5 xl:h-6' src={appleicon} alt="google_icon" />
                            <p className={`${nunito.className} text-xs text-[#605DEC] pl-12 md:text-[15px] md:pl-20 xl:text-[17px] xl:pl-26`}>Continue with Apple</p>
                        </div>
                        <div className='flex mt-4 border-2 border-[#605DEC] rounded-md w-[270px] py-2 px-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/60 md:w-[400px] md:h-[50px] md:py-3 xl:w-[500px]'>
                            <Image className='w-3.5 h-3.5 md:ml-3 md:w-4 md:h-4 xl:ml-6 xl:w-5 xl:h-6' src={facebookicon} alt="google_icon" />
                            <p className={`${nunito.className} text-xs text-[#605DEC] pl-12 md:text-[15px] md:pl-20 xl:text-[17px] xl:pl-26`}>Continue with Facebook</p>
                        </div>
                    </div>


                    <div className='mt-10 flex flex-col gap-5'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 text-[16px] md:text-lg`}>Cancellation policy</p>
                        </div>
                        <div>
                            <p className={`${nunito.className} text-gray-400 text-[14px] pr-10 md:text-[15px]`}>This flight has a flexible cancellation policy. If you cancel or change your flight up to 30 days before the departure date, you are eligible for a free refund. All flights booked on Tripma are backed by our satisfaction guarantee, however cancellation policies vary by airline. See the <span className='text-[#605DEC]'>full cancellation policy</span> for this flight.</p>
                        </div>
                    </div>

                    {/* buttons */}
                    <div className='flex gap-3 mt-10 md:gap-5 xl:gap-8'>
                        <div>
                            <button className={`${nunito.className} border-2 text-[14px] cursor-pointer text-[#605DEC] px-1.5 py-2 rounded-md md:text-lg xl:px-3`}>Back to seat select</button>
                        </div>
                        <div>
                            <Link href='/bookingsuccess'>
                            <button className={`${nunito.className} border-2 text-[14px] cursor-pointer bg-[#605DEC] text-white px-2.5 py-2 rounded-md md:text-lg xl:px-4`}>Confirm and pay</button>
                            </Link>
                        </div>
                    </div>

                </div>
                <div>


                    {/* flight-booking */}
                    <div className='max-w-[350px] sm:max-w-[650px] sm:pl-5 md:max-w-[740px] lg:mt-28 lg:max-w-[850px] xl:mt-36 xl:-ml-20 xl:mx-20 2xl:mt-36'>
                        <div className='border-2 border-gray-200 rounded-xl mt-10 mx-3'>
                            {/* section-1 */}
                            <div className='flex justify-between px-2 pt-5 xl:px-10'>
                                <div className='flex gap-2'>
                                    <div>
                                        <Image className='w-8 h-8 xl:w-12 xl:h-12' src={airline1} alt='airline1' />
                                    </div>
                                    <div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>Hawaiian Airlines</p>
                                        </div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-400 text-[14px] xl:text-lg`}>FIG4312</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>16h 45m (+1d)</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>7:00 AM - 4:15 PM</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px] xl:text-lg`}>2h 45m in HNL</p>
                                    </div>
                                </div>
                            </div><br />

                            <hr className='w-[95%] ml-2 text-gray-200 border' />

                            {/* section-2 */}
                            <div className='flex justify-between px-2 pt-5 xl:px-10'>
                                <div className='flex gap-2'>
                                    <div>
                                        <Image className='w-8 h-8 xl:w-12 xl:h-12' src={airline1} alt='airline1' />
                                    </div>
                                    <div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>Hawaiian Airlines</p>
                                        </div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-400 text-[14px] xl:text-lg`}>FIG4312</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>16h 45m (+1d)</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] xl:text-lg`}>7:00 AM - 4:15 PM</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px] xl:text-lg`}>2h 45m in HNL</p>
                                    </div>
                                </div>
                            </div><br />
                        </div>


                        <div className='flex gap-5 justify-end mr-5 mt-5'>
                            <div>
                                <p className={`${nunito.className} text-[14px] xl:text-lg`}>Seat upgrade</p>
                            </div>
                            <div>
                                <p className={`${nunito.className} text-[14px] xl:text-lg`}>$199</p>
                            </div>
                        </div>

                        <div className='flex gap-6 justify-end mt-5 mr-5'>
                            <div className='text-right flex flex-col gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>Subtotal</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>Taxes and Fees</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>Total</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>$702</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg text-right`}>$66</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] xl:text-lg`}>$768</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <Footer/>

        </>
    )
}