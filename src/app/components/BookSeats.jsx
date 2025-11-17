import React, { useState } from 'react'
import flight from '@/app/assets/Plane.png'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Nunito } from 'next/font/google'
import BusinessSeats from '@/app/assets/BusinessSeats.svg'
import EconomySeats from '@/app/assets/EconomySeats.svg'
import { Dot } from 'lucide-react'
import { Check } from 'lucide-react'
import infoimage from '@/app/assets/information.svg'
import Link from 'next/link'
import Colorbox from './Colorbox'
import Menuicon from '@/app/assets/menu.svg'
import logoText from '@/app/assets/round.svg'
import arrowactive from '@/app/assets/activechevron.svg'
import { AnimatePresence, motion } from 'motion/react'

const nunito = Nunito({
  subsets: ['cyrillic'],
  weight: ['400']
})

const BookSeats = () => {

    const [Seat,setSeat] = useState(false);
  
    const handleSeat = () => {
      setSeat(!Seat);
    }


  return (
    <div>
      {/* seat-booking-container */}
      <div className='relative w-full min-h-screen'>
        {/* seat-selection */}
        <div>
          <Image src={flight} alt='flight' />
        </div>

        {/* menu-and-logo */}
        <div className='absolute top-[2%] left-[2%] flex gap-5'>
          <div>
               <Image src={Menuicon} alt='menu'/>
          </div>
          <div>
            <Image src={logoText} alt='logotext'/>
          </div>
        </div>
    
        <div>
          {/* seat-details */}
          <div className='absolute border-2 border-gray-300 w-[50%] h-[900px] right-0 top-0'>
            {/* location */}
            <div className='flex h-[90px] w-full'>

              <div className='flex w-[40%] h-full bg-[#27273F]'>

                <div className='p-5'>
                  <div>
                    <p className={`${nunito.className} text-white !font-bold text-2xl`}>SFO</p>
                  </div>
                  <div>
                    <p className={`${nunito.className} text-white text-[14px]`}>California,US</p>
                  </div>
                </div>

                {/* arrow-right */}
                <div className='flex items-center'>
                  <div>
                    <ArrowRight className='text-white w-8 h-8' />
                  </div>
                </div>

                <div className='p-5'>
                  <div>
                    <p className={`${nunito.className} text-white !font-bold text-2xl`}>NRT</p>
                  </div>
                  <div>
                    <p className={`${nunito.className} text-white text-[14px]`}>Tokyo,Japan</p>
                  </div>
                </div>

              </div>

              <div className='w-[30%] h-full bg-[#27273F] p-5'>
                <div>
                  <div className='flex gap-2'>
                    <div>
                      <p className={`${nunito.className} text-white text-lg`}>Feb 25</p>
                    </div>
                    <div>
                      <p className={`${nunito.className} text-gray-400 text-lg`}>|</p>
                    </div>
                    <div>
                      <p className={`${nunito.className} text-white text-lg`}>7:00AM</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className={`${nunito.className} text-white`}>Departing</p>
                </div>
              </div>

              <div className='relative w-[30%] h-full bg-[#605DEC] p-5'>
                <div>
                  <div className='flex gap-2'>
                    <div>
                      <p className={`${nunito.className} text-white text-lg`}>Mar 21</p>
                    </div>
                    <div>
                      <p className={`${nunito.className} text-gray-400 text-lg`}>|</p>
                    </div>
                    <div>
                      <p className={`${nunito.className} text-white text-lg`}>12:15PM</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className={`${nunito.className} text-white`}>Arriving</p>
                </div>
                <div className='absolute top-[91%] left-[50%]'>
                  <Image src={arrowactive} alt='arrowactive'/>
                </div>
              </div>

            </div>

            {/* seat-type */}
            <div className='grid grid-cols-2 w-full h-[720px] bg-white/40 backdrop-blur-md'>
              {/* left-side */}
              <div className='p-5'>
                <div>
                  <Image src={EconomySeats} alt='economyseatsimage' />
                </div>
                {/* description */}
                <div className='p-8'>
                  {/* title */}
                  <div className='flex gap-5'>
                    <div>
                      <p className={`${nunito.className} text-gray-600 text-xl`}>Economy</p>
                    </div>
                    <div className='bg-linear-to-t from-[#2A26D9] to-[#605DEC] w-[80px] h-[25px] rounded-lg '>
                      <p className={`${nunito.className} text-white px-2`}>Selected</p>
                    </div>
                  </div>
                  {/* paragraph */}
                  <div className='mt-5'>
                    <p className={`${nunito.className} text-gray-400`}>Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service</p>
                  </div>

                  <hr className='mt-5 border-2 w-[40px] border-[#605DEC]' />

                  {/* list */}
                  <div>
                    {/* individual-data */}
                    <div className='flex -ml-5'>
                      <div>
                        <Dot className='w-20 h-20 text-[#605DEC]' />
                      </div>
                      <div>
                        <p className={`${nunito.className} text-gray-600 pt-7`}>Built-in entertainment system</p>
                      </div>
                    </div>

                    {/* individual-data */}
                    <div className='flex -ml-5 -mt-8'>
                      <div>
                        <Dot className='w-20 h-20 text-[#605DEC]' />
                      </div>
                      <div>
                        <p className={`${nunito.className} text-gray-600 pt-7`}>Complimentary snacks and drinks</p>
                      </div>
                    </div>

                    {/* individual-data */}
                    <div className='flex -ml-5 -mt-8'>
                      <div>
                        <Dot className='w-20 h-20 text-[#605DEC]' />
                      </div>
                      <div>
                        <p className={`${nunito.className} text-gray-600 pt-7`}>One free carry-on and personal item</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* right-side */}
              <div className='p-5'>
                <div>
                  <Image src={BusinessSeats} alt='economyseatsimage' />
                </div>
                {/* description */}
                <div className='p-8'>
                  {/* title */}
                  <div className='flex gap-5'>
                    <div>
                      <p className={`${nunito.className} text-gray-600 text-xl`}>Business class</p>
                    </div>
                  </div>
                  {/* paragraph */}
                  <div className='mt-5'>
                    <p className={`${nunito.className} text-gray-400`}>Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service</p>
                  </div>

                  <hr className='mt-5 border-2 w-[40px] border-[#5CD6C0]' />

                  {/* list */}
                  <div className='flex flex-col gap-11 pt-7'>
                    {/* individual-data */}
                    <div className='flex ml-2 gap-3'>
                      <div>
                        <Check className='w-5 h-5 text-[#5CD6C0]' />
                      </div>
                      <div>
                        <p className={`${nunito.className} text-gray-600`}>Extended leg room</p>
                      </div>
                    </div>

                    {/* individual-data */}
                    <div className='flex -mt-5 ml-2 gap-3'>
                      <div>
                        <Check className='w-5 h-5 text-[#5CD6C0]' />
                      </div>
                      <div>
                        <p className={`${nunito.className} text-gray-600`}>First two checked bags free</p>
                      </div>
                    </div>

                    {/* individual-data */}
                    <div className='flex -mt-5 ml-2 gap-3'>
                      <div>
                        <Check className='w-5 h-5 text-[#5CD6C0]' />
                      </div>
                      <div>
                        <p className={`${nunito.className} text-gray-600`}>Priority boarding</p>
                      </div>
                    </div>

                    {/* individual-data */}
                    <div className='flex -mt-5 ml-2 gap-3'>
                      <div>
                        <Check className='w-5 h-5 text-[#5CD6C0]' />
                      </div>
                      <div>
                        <p className={`${nunito.className} text-gray-600`}>Personalized service</p>
                      </div>
                    </div>

                    {/* individual-data */}
                    <div className='flex -mt-5 ml-2 gap-3'>
                      <div>
                        <Check className='w-5 h-5 text-[#5CD6C0]' />
                      </div>
                      <div>
                        <p className={`${nunito.className} text-gray-600`}>Enhanced food and drink service</p>
                      </div>
                    </div>

                    {/* individual-data */}
                    <div className='flex -mt-5 ml-2 gap-3'>
                      <div>
                        <Check className='w-5 h-5 text-[#5CD6C0]' />
                      </div>
                      <div>
                        <p className={`${nunito.className} text-gray-600`}>Seats that recline 40% more than economy</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* next-flight */}
            <div className='w-full h-[90px] grid grid-cols-2 bg-white border-2 border-gray-300'>
              {/* left-side */}
              <div className='p-3 flex gap-20'>

                <div>
                  <div>
                    <p className={`${nunito.className} text-gray-400`}>Passenger 1</p>
                  </div>
                  <div>
                    <p className={`${nunito.className} text-gray-600 !font-bold text-xl`}>Sofia Knowles</p>
                  </div>
                </div>

                <div>
                  <div>
                    <p className={`${nunito.className} text-gray-400`}>Seat number</p>
                  </div>
                  <div>
                    <p className={`${nunito.className} text-gray-600 !font-bold text-xl`}>9F</p>
                  </div>
                </div>

              </div>

              {/* right-side */}
              <div className='p-4 flex gap-5 pl-15'>

                <div>
                  <button className={`${nunito.className} border-2 border-[#605DEC] rounded-md text-[#605DEC] px-4 py-3 cursor-pointer text-[14px]`}>Save and close</button>
                </div>

                <div>
                  <button onClick={handleSeat} className={`${nunito.className} bg-[#605DEC] rounded-md text-white px-4 py-3 cursor-pointer text-[14px]`}>Payment method</button>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* available-seats */}
        <div className='absolute top-0 left-[235px] w-[250px] h-[900px] bg-gray-200'>
          <div className='absolute w-[230px] h-[900px] bg-white left-[10px]'>

            <div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>6</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>7</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>8</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>9</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>10</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>11</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>12</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>13</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

            </div>

            <div className='flex gap-1'>
              <div>
                <Image src={infoimage} alt='infoimage' />
              </div>
              <div>
                <p className={`${nunito.className} text-gray-400 pt-1`}>Exit row</p>
              </div>
            </div>

            <div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>14</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>15</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>16</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>17</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

              {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>18</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

            </div>

             <div className='flex gap-1'>
              <div>
                <Image src={infoimage} alt='infoimage' />
              </div>
              <div>
                <p className={`${nunito.className} text-gray-400 pt-1`}>Exit row</p>
              </div>
            </div>

            <div>

               {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>19</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

               {/* row */}
              <div className='p-2 flex gap-1'>
                <Colorbox/>
                <Colorbox/>
                <Colorbox/>

                <div className={`${nunito.className} w-[30px] h-[40px]`}>
                  <p className='text-center pt-2'>19</p>
                </div>

                <Colorbox/>
                <Colorbox/>
                <Colorbox/>
              </div>

            </div>


          </div>

        </div>

        {/* upgrade-seats */}
        <AnimatePresence>
        {Seat ? (
        <motion.div initial={{ opacity: 0,scale: 0 }} animate={{ opacity: 1,scale: 1 }} exit={{ opacity: 0,scale: 0 }} className='absolute top-[40%] left-[40%] w-[450px] h-[240px] bg-white rounded-lg shadow-lg shadow-gray-400/60 p-8'>

          <div className='flex flex-col gap-3'>
            {/* title */}
            <div>
              <p className={`${nunito.className} text-gray-600 text-xl !font-bold`}>Upgrade seat</p>
            </div>
            <div>
              <p className={`${nunito.className} text-gray-400`}>Upgrade your seat for only $199, and enjoy 45 percent more leg room, and seats that recline 40 percent more than economy.</p>
            </div>
          </div>

          {/* buttons */}
          <div className='flex gap-3 justify-end pt-5'>
            <div>
              <button onClick={handleSeat} className={`${nunito.className} border border-[#605DEC] text-[#605DEC] rounded-md px-4 py-2`}>Cancel</button>
            </div>
            <div>
              <Link href='/payments'>
              <button className={`${nunito.className} px-4 py-2 rounded-md bg-[#605DEC] text-white`}>Upgrade for $199</button>
              </Link>
            </div>
          </div>

        </motion.div>

        ) : (null) }
        </AnimatePresence>


      </div>
    </div>
  )
}

export default BookSeats