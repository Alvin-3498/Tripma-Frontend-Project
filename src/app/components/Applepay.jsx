import React from 'react'
import { Nunito } from 'next/font/google'


const nunito = Nunito({
  subsets : ['cyrillic'],
  weight : ['400']
})

const Applepay = () => {
  return (
    <div>

      {/* title */}
      <div className='mt-5'>
        <p className={`${nunito.className} text-gray-600 md:text-lg`}>Apple pay details</p>
      </div>

      <div className='flex flex-col gap-5'>
        <div className='flex gap-2 mt-5'>
          <input type="checkbox" />
          <p className={`${nunito.className} text-[14px] text-gray-400 md:text-[15px]`}>Billing address is same as Passenger 1</p>
        </div>
        <div>
          <input className={`${nunito.className} border-1 w-[270px] h-[35px] border-gray-300 rounded-md outline-none pl-2 text-[14px] md:w-[400px] md:h-[40] md:text-[15px] xl:w-[500px] xl:h-[45px]`} type="text" placeholder='Enter the name' />
        </div>
        <div>
          <input className={`${nunito.className} border-1 w-[270px] h-[35px] border-gray-300 rounded-md outline-none pl-2 text-[14px] md:w-[400px] md:h-[40] md:text-[15px] xl:w-[500px] xl:h-[45px]`} type="text" placeholder='Enter the Apple ID' />
        </div>
        <div>
          <input className={`${nunito.className} border-1 w-[270px] h-[35px] border-gray-300 rounded-md outline-none pl-2 text-[14px] md:w-[400px] md:h-[40] md:text-[15px] xl:w-[500px] xl:h-[45px]`} type="text" placeholder='Enter the email id' />
        </div>
      </div>

    </div>
  )
}

export default Applepay