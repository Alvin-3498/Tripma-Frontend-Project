import React from 'react'
import { Nunito } from 'next/font/google'
import Image from 'next/image'
import infoimage from '@/app/assets/information.svg'


const nunito = Nunito({
  subsets: ['cyrillic'],
  weight: ['400']
})

const Creditcard = () => {
  return (
    <div className='mt-5'>
      {/* title */}
      <div>
        <p className={`${nunito.className} text-gray-600 md:text-lg`}>Credit card details</p>
      </div>

      <div className='flex flex-col gap-5'>
        <div className='flex gap-2 mt-5'>
          <input type="checkbox" />
          <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[15px]`}>Billing address is same as Passenger 1</p>
        </div>
        <div className='flex flex-col gap-5'>
          <div>
            <input className={`${nunito.className} border-1 w-[270px] h-[35px] border-gray-300 rounded-md outline-none pl-2 text-[14px] md:w-[400px] md:h-[40] md:text-[15px] xl:w-[500px] xl:h-[45px]`} type="text" placeholder='Name on card' />
          </div>
          <div>
            <input className={`${nunito.className} border-1 w-[270px] h-[35px] border-gray-300 rounded-md outline-none pl-2 text-[14px] md:w-[400px] md:h-[40] md:text-[15px] xl:w-[500px] xl:h-[45px]`} type="text" placeholder='Card number' />
          </div>
          <div className='lg:flex lg:gap-5'>
            <div className='flex flex-col'>
              <input className={`${nunito.className} border-1 w-[270px] h-[35px] border-gray-300 rounded-md outline-none pl-2 text-[14px] md:w-[400px] md:h-[40] md:text-[15px] lg:w-[190px] xl:w-[240px]`} type="text" placeholder='Expiration date' />
              <span className={`${nunito.className} text-gray-400 text-[12px]`}>MM/YY</span>
            </div>
            <div>
              <div className={`${nunito.className} border-1 w-[270px] h-[35px] flex justify-between border-gray-300 rounded-md outline-none pl-2 text-[14px] md:w-[400px] md:h-[40] md:text-[15px] lg:w-[190px] xl:w-[240px]`}>
                  <input className='outline-none'  type="text" placeholder='CVV' />
                  <Image src={infoimage} alt='infoimage'/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Creditcard