"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logoText from '@/app/assets/round.svg'
import { Menu } from 'lucide-react'
import { Nunito } from 'next/font/google'
import { SidebarClose } from 'lucide-react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const Navbar = ({onSignupClick}) => {

    const [MenuOpen,setMenuOpen] = useState(false);

    const handleToggleOpen = () => {
        setMenuOpen(!MenuOpen);
    }

    const handleToggleClose = () => {
        setMenuOpen(!MenuOpen);
    }

    return (
        <div>
            <div className='w-full h-[100px] flex flex-col relative'>


                {/* header */}
                <div className='w-full h-[100px] absolute bg-white'>
                    {/* website-logo */}
                    <div className='absolute mx-4 md:mx-8'>
                        <Image src={logoText} alt='logo' className='w-20 h-20 md:w-25 md:h-25 xl:w-30 xl:h-30' />
                    </div>
                    
                    {/* main-navbar */}
                    <div className='justify-end pr-6 hidden md:flex md:py-2.5 xl:py-4 xl:pr-8'>
                        <div>
                        <ul className='flex gap-7 py-7 pr-5'>
                            <Link href='/'><li className={`${nunito.className} text-[#7C8DB0] hover:text-[#605DEC] md:text-lg xl:text-xl cursor-pointer`}>Flights</li></Link>
                            <Link href='/hotels2'><li className={`${nunito.className} text-[#7C8DB0] hover:text-[#605DEC] md:text-lg xl:text-xl cursor-pointer`}>Hotels</li></Link>
                            <Link href='/hotels'><li className={`${nunito.className} text-[#7C8DB0] hover:text-[#605DEC] md:text-lg xl:text-xl cursor-pointer`}>Packages</li></Link>
                            <Link href='/passenger-information'><li className={`${nunito.className} text-[#7C8DB0] hover:text-[#605DEC] md:text-lg xl:text-xl cursor-pointer`}>Sign in</li></Link>
                        </ul>
                        </div>
                        <div className='py-4'>
                            <p onClick={onSignupClick} className={`${nunito.className} bg-[#605DEC] text-white px-6 py-3 rounded-lg md:text-lg xl:text-xl cursor-pointer shadow-xl transition-all duration-300 hover:bg-blue-900`}>Sign up</p>
                        </div>
                    </div>

                    {/* sidebar-menu */}
                    <div className='absolute right-6 top-6 flex md:hidden'>
                        <Menu onClick={handleToggleOpen} size={30} />
                    </div>
                </div>

                {/* sidebar */}
                <div className={`${MenuOpen ? "translate-x-0" : "translate-x-full"} z-[9999] fixed top-0 right-0 w-full bg-blue-50 p-12 min-h-screen transition-all duration-300`}>

                    <div className='absolute -mt-5'>
                       <XMarkIcon onClick={handleToggleClose} className='w-8 h-8 !font-semibold' />
                    </div>

                    <ul className='mt-15'>
                        <Link href='/'><li onClick={handleToggleClose} className={`${nunito.className} text-lg transition-all duration-200 hover:text-indigo-400`}>Flights</li><br /><br /></Link>
                        <Link href='/hotels2'><li onClick={handleToggleClose} className={`${nunito.className} text-lg transition-all duration-200 hover:text-indigo-400`}>Hotels</li><br /><br /></Link>
                        <Link href='/hotels'><li onClick={handleToggleClose} className={`${nunito.className} text-lg transition-all duration-200 hover:text-indigo-400`}>Packages</li><br /><br /></Link>
                        <Link href='/passenger-information'><li onClick={handleToggleClose} className={`${nunito.className} text-lg transition-all duration-200 hover:text-indigo-400`}>Sign in</li><br /><br /></Link>
                        <li onClick={() => {handleToggleClose(),onSignupClick()}} className={`${nunito.className} text-lg bg-[#605DEC] w-[110px] px-5 py-3 rounded-lg text-white transiton-all duration-300 hover:-translate-y-3`}>Sign up</li><br /><br />
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Navbar