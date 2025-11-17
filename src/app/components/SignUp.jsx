"use client";

import React from 'react'
import googleicon from '@/app/assets/google.svg';
import appleicon from '@/app/assets/applemac.svg';
import facebookicon from '@/app/assets/facebook.svg';
import { Nunito } from 'next/font/google';
import Image from 'next/image';
import githublogo from '@/app/assets/github.png'
import { signIn, useSession } from 'next-auth/react';
import { motion } from 'motion/react'

const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
});

const SignUp = () => {

    const { data } = useSession(); 

    return (
        <div>

            {/* Sign-Up Component */}
            <motion.div initial={{ opacity: 0,scale: 0 }} animate={{ opacity: 1,scale: 1 }} exit={{ opacity: 0,scale: 0 }} className='absolute z-999 md:left-[35%]'>
                <div className='w-[280px] h-[480px] ml-5 rounded-md bg-white shadow-lg shadow-gray-400/60 md:w-[350px] md:h-[530px] md:px-4 md:py-2 xl:w-[480px] xl:h-[600px] xl:px-6 2xl:w-[500px] 2xl:h-[640px] 2xl:px-9 2xl:py-6'>
                    {/* signup-para */}
                    <div>
                        <p className={`${nunito.className} text-gray-600 text-lg font-bold px-3 py-3 md:text-xl xl:text-2xl`}>Sign up for Tripma</p>
                        <p className={`${nunito.className} text-gray-400 text-xs px-3 md:text-[15px] xl:text-lg`}>Tripma is totally free to use. Sign up using your email address or phone number below to get started.</p>
                    </div>

                    {/* input-fields */}
                    <div>
                        <input className={`${nunito.className} bg-white ml-3 mt-2 w-63 h-8 px-2 text-xs rounded-md border border-gray-400 outline-none md:w-73 md:h-10 md:text-[15px] xl:w-[400px]`} type="text" placeholder='Email or phone number' />
                        <input className={`${nunito.className} bg-white ml-3 mt-2 w-63 h-8 px-2 text-xs rounded-md border border-gray-400 outline-none md:w-73 md:h-10 md:text-[15px] xl:w-[400px]`} type="text" placeholder='Email or phone number' />
                    </div>

                    {/* checkboxes */}
                    <div>
                        <div className='flex gap-1 px-3 py-3'>
                            <input type="checkbox" />
                            <div className='flex gap-1'>
                                <p className={`${nunito.className} text-xs md:text-[15px] xl:text-lg`}>I agree to the</p>
                                <p className={`${nunito.className} text-xs text-blue-400 md:text-[15px] xl:text-lg cursor-pointer`}>terms and conditions</p>
                            </div>
                        </div>
                        <div className='flex gap-1 px-3'>
                            <input type="checkbox" />
                            <p className={`${nunito.className} text-xs md:text-[15px] xl:text-lg`}>Send me the latest deal alerts</p>
                        </div>
                    </div>

                    {/* submit-button */}
                    <div className='mt-3 ml-3'>
                        <button className={`${nunito.className} text-[15px] text-center bg-[#605DEC] text-white w-63 h-8 rounded-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/60 md:w-73 md:text-[18px] xl:w-[400px] xl:h-10 xl:text-xl`}>Create Account</button>
                    </div>

                    <div className='flex relative mt-5 ml-3 md:pt-3'>
                        <hr className='w-27 bg-gray-300 md:w-32 xl:w-45' />
                        <p className='text-center absolute -top-3.5 left-29 text-gray-400 md:text-[15px] md:-top-1 md:left-34 xl:left-47 xl:text-[18px]'>or</p>
                        <hr className='w-28 ml-8 bg-gray-300 md:w-32 xl:w-46' />
                    </div>

                    {/* next-auth authentication */}
                    <div className='md:pt-3'>
                        <div onClick={() => signIn()} className='flex mt-4 ml-3 border-2 border-blue-500 rounded-md w-63 py-2 px-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/60 md:w-73 xl:w-[400px]'>
                            <Image className='w-3.5 h-3.5 md:ml-3 md:w-4 md:h-4 xl:ml-6 xl:w-5 xl:h-6' src={githublogo} alt="google_icon" />
                            <p className={`${nunito.className} text-xs text-blue-400 pl-9 md:text-[15px] xl:text-[17px] xl:pl-16`}>Continue with Github</p>
                        </div>
                        {data ? (<p>SignUp Successfull</p>) : (<p>SignUp Failed</p>)}
                        <div className='flex mt-4 ml-3 border-2 border-blue-500 rounded-md w-63 py-2 px-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/60 md:w-73 xl:w-[400px]'>
                            <Image className='w-3.5 h-3.5 md:ml-3 md:w-4 md:h-4 xl:ml-6 xl:w-5 xl:h-6' src={appleicon} alt="google_icon" />
                            <p className={`${nunito.className} text-xs text-blue-400 pl-9 md:text-[15px] xl:text-[17px] xl:pl-16`}>Continue with Apple</p>
                        </div>
                        <div className='flex mt-4 ml-3 border-2 border-blue-500 rounded-md w-63 py-2 px-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/60 md:w-73 xl:w-[400px]'>
                            <Image className='w-3.5 h-3.5 md:ml-3 md:w-4 md:h-4 xl:ml-6 xl:w-5 xl:h-6' src={facebookicon} alt="google_icon" />
                            <p className={`${nunito.className} text-xs text-blue-400 pl-9 md:text-[15px] xl:text-[17px] xl:pl-16`}>Continue with Facebook</p>
                        </div>
                    </div>

                </div>
            </motion.div>

        </div>
    )
}

export default SignUp