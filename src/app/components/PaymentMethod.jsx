import React from 'react'
import { Nunito } from 'next/font/google'

import Image from 'next/image'
import applemac2 from '@/app/assets/applemac2.svg'
import google2 from '@/app/assets/google2.svg'
import paypal from '@/app/assets/paypal.svg'
import bitcoin from '@/app/assets/bitcoin.svg'
import creditcard from '@/app/assets/creditcard.svg'
import Link from 'next/link'


const nunito = Nunito({
  subsets: ['cyrillic'],
  weight: ['400']
})

const PaymentMethod = () => {
  return (
    <div>
      {/* payment-method */}
      <div>

        {/* links */}
        <div className='hidden md:flex md:w-[600px] md:h-[45px] md:border-2 md:rounded-md md:my-5 md:border-[#605DEC] md:items-center md:justify-between'>

          <div className='md:transition-all md:duration-200 md:hover:bg-[#605DEC] md:rounded-xs md:h-full md:px-3 md:py-2'>
            <Link href='/payments' >
            <div className='md:flex md:gap-1'>
              <Image src={creditcard} alt='linklogo1' />
              <p className={`${nunito.className} text-[#605DEC] md:hover:text-white`}>Credit card</p>
              </div>
            </Link>
          </div>


          <div className='md:transition-all md:duration-200 md:hover:bg-[#605DEC] md:rounded-xs md:h-full md:px-3 md:py-2'>
            <Link href='/payments/gpay'>
            <div className='md:flex md:gap-1'>
              <Image src={google2} alt='linklogo2'/>
              <p className={`${nunito.className} text-[#605DEC] md:hover:text-white`}>Google Pay</p>
              </div>
            </Link>
          </div>


          <div className='md:transition-all md:duration-200 md:hover:bg-[#605DEC] md:rounded-xs md:h-full md:px-3 md:py-2'>
            <Link href='/payments/applepay'>
            <div className='md:flex md:gap-1'>
              <Image src={applemac2} alt='linklogo3' />
              <p className={`${nunito.className} text-[#605DEC] md:hover:text-white`}>Apple pay</p>
              </div>
            </Link>
          </div>


          <div className='md:transition-all md:duration-200 md:hover:bg-[#605DEC] md:rounded-xs md:h-full md:px-3 md:py-2'>
            <Link href='/payments/paypal'>
            <div className='md:flex md:gap-1'>
              <Image src={paypal} alt='linklogo4' />
              <p className={`${nunito.className} text-[#605DEC] md:hover:text-white`}>Paypal</p>
              </div>
            </Link>
          </div >


          <div className='md:transition-all md:duration-200 md:hover:bg-[#605DEC] md:rounded-xs md:h-full md:px-3 md:py-2'>
            <Link href='/payments/crypto'>
            <div className='md:flex md:gap-1'>
              <Image src={bitcoin} alt='linklogo5' />
              <p className={`${nunito.className} text-[#605DEC] md:hover:text-white`}>Crypto</p>
              </div>
            </Link>
          </div >

        </div >

      </div >
    </div >
  )
}

export default PaymentMethod