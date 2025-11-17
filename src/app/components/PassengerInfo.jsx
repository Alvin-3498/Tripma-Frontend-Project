import React, { useState } from 'react'
import { Nunito } from 'next/font/google'
import airline1 from '@/app/assets/Airlines3.svg'
import Image from 'next/image'
import luggageimage from '@/app/assets/Illustration.png'
import Link from 'next/link'


const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
})

const PassengerInfo = () => {

    const [Bagno, setBagno] = useState(0);
    const [data, setdata] = useState({
        fname: "",
        mname: "",
        lname: "",
        suffix: "",
        dob: "",
        email: "",
        phone: "",
        redressno: "",
        ktno: "",
        efname: "",
        elname: "",
        eemail: "",
        ephone: "",
    });

    const handleBagnoInc = () => {
        setBagno(Bagno + 1);
    }

    const handleBagnoDec = () => {
        setBagno(Bagno - 1);
    }

    const handleData = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    const datafilled = Object.values(data).every(value => String(value).trim() !== "");

    console.log("Data :", data);
    console.log("datafilled :", datafilled);

    return (
        <div>
            {/* passenger-info */}
            <div className='grid lg:grid-cols-[65%_35%] mt-5 lg:mt-10'>

                {/* Dividing-sections-using-grid */}
                <div>

                    {/* title-and-para */}
                    <div className='px-5 flex flex-col gap-3 sm:px-10 lg:px-15 2xl:px-20'>
                        <div>
                            <p className={`${nunito.className} text-xl !font-semibold text-[#605DEC] lg:text-2xl`}>Passenger Information</p>
                        </div>
                        <div>
                            <p className={`${nunito.className} text-[14px] text-gray-400 lg:text-[16px] xl:text-lg`}>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</p>
                        </div>
                    </div>

                    {/* passenger-1 */}
                    <div className='px-5 mt-8 sm:px-10 lg:px-15 2xl:px-20'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 text-[17px] lg:text-lg xl:text-xl`}>Passenger 1 (Adult)</p>
                        </div>
                        <div>
                            <form>
                                <div className='pt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:pt-6 lg:gap-x-20 xl:gap-x-0'>
                                    <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] lg:w-[200px] xl:w-[240px] xl:h-[50px]`} type="text" name='fname' placeholder='First name*' onChange={handleData} />
                                    <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] lg:w-[200px] xl:w-[240px] xl:h-[50px] 2xl:-ml-5`} name='mname' type="text" placeholder='Middle' onChange={handleData} />
                                    <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] lg:w-[200px] xl:w-[240px] xl:h-[50px] 2xl:-ml-10`} name='lname' type="text" placeholder='Last name*' onChange={handleData} />
                                    <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] lg:w-[200px] xl:w-[240px] xl:h-[50px]`} type="text" name='suffix' placeholder='Suffix' onChange={handleData} />
                                    <div className='flex flex-col'>
                                        <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] xl:w-[300px] xl:h-[50px] 2xl:-ml-5`} type="text" name='dob' placeholder='Date of birth' onChange={handleData} />
                                        <span className={`${nunito.className} text-[12px] text-gray-400 ml-1 2xl:-ml-5`}>MM/DD/YY</span>
                                    </div>
                                </div>
                                <div className='pt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:pt-6'>
                                    <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] xl:w-[350px] xl:h-[50px]`} type="text" name='email' placeholder='Email address*' onChange={handleData} />
                                    <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] xl:w-[350px] xl:h-[50px] 2xl:-ml-15`} type="text" name='phone' placeholder='Phone number*' onChange={handleData} />
                                    <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] xl:w-[350px] xl:h-[50px]`} type="text" name='redressno' placeholder='Redress number' onChange={handleData} />
                                    <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] xl:w-[350px] xl:h-[50px] 2xl:-ml-15`} type="text" name='ktno' placeholder='Known traveller number*' onChange={handleData} />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* emergency-contact-info */}
                    <div className='px-5 mt-8 sm:px-10 lg:mt-10 lg:px-15 2xl:px-20'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 text-[17px] lg:text-lg xl:text-xl`}>Emergency contact information</p>
                        </div>
                        <div>
                            <form action="">
                                <div>
                                    <div className='flex gap-2 mt-5 lg:mt-10'>
                                        <input className='xl:w-4 xl:h-4 xl:mt-0.5' type="checkbox" />
                                        <p className={`${nunito.className} text-[14px] text-gray-500 lg:text-[16px]`}>Same as Passenger 1</p>
                                    </div>

                                    <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10'>
                                        <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] xl:w-[350px] xl:h-[50px]`} type="text" name='efname' placeholder='First name*' onChange={handleData}/>
                                        <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] xl:w-[350px] xl:h-[50px] 2xl:-ml-15`} type="text" name='elname' placeholder='Last name*' onChange={handleData}/>
                                        <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] xl:w-[350px] xl:h-[50px]`} type="text" name='eemail' placeholder='Email address*' onChange={handleData}/>
                                        <input className={`${nunito.className} border-2 w-[270px] h-[40px] border-gray-400 rounded-md text-gray-600 pl-2 outline-none md:h-[45px] xl:w-[350px] xl:h-[50px] 2xl:-ml-15`} type="text" name='ephone' placeholder='Phone number*' onChange={handleData}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* bag-information */}
                    <div className='px-5 mt-5 sm:px-10 lg:mt-10 lg:px-15 2xl:px-20'>
                        {/* title */}
                        <div>
                            <p className={`${nunito.className} text-gray-600 text-[17px] lg:text-lg xl:text-xl`}>Bag information</p>
                        </div>
                        <div className='mt-3'>
                            <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px] xl:text-lg`}>Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. See the <span className='text-[#605DEC]'>full bag policy</span>.</p>
                        </div>
                    </div>

                    {/* bag-number */}
                    <div className='px-5 mt-8 flex sm:px-10 lg:px-15 2xl:px-20'>
                        <div>
                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px] xl:text-lg`}>Passenger 1</p>
                            </div>
                            <div>
                                <p className={`${nunito.className} text-gray-600 text-[14px] lg:text-[16px] xl:text-lg`}>First Last</p>
                            </div>
                        </div>
                        <div className='ml-20 md:ml-40 xl:ml-60 2xl:ml-70'>
                            <div>
                                <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px] xl:text-lg`}>Checked bags</p>
                            </div>
                            <div className='flex gap-3'>
                                <button onClick={handleBagnoDec} className={`${nunito.className} bg-gray-100 text-[#605DEC] cursor-pointer px-2 rounded-xs lg:text-[16px] xl:text-lg`}>-</button>
                                <p className={`${nunito.className} text-[14px] text-gray-500 lg:text-[16px] xl:text-lg`}>{Bagno}</p>
                                <button onClick={handleBagnoInc} className={`${nunito.className} bg-gray-100 text-[#605DEC] cursor-pointer px-2 rounded-xs lg:text-[16px] xl:text-lg`}>+</button>
                            </div>
                        </div>
                    </div>

                    {/* save-selectseats */}
                    <div className='px-5 mt-10 flex sm:px-10 lg:px-15 lg:mt-15 xl:mt-20 2xl:px-20'>
                        <button className={`${nunito.className} text-[16px] border-2 border-[#605DEC] text-[#605DEC] cursor-pointer px-3 py-1 rounded-md lg:text-lg xl:text-xl xl:px-4 xl:py-2`}>Save and close</button>
                        <Link href='/passenger-information/seatbooking'>
                            <button className={`${nunito.className} ${!datafilled ? "bg-gray-200 text-gray-500 border-gray-400" : "border-[#605DEC] text-white bg-[#605DEC]"} text-[16px] border-2  cursor-pointer px-3 py-1 rounded-md ml-5 lg:text-lg xl:text-xl xl:px-4 xl:py-2`}>Select seats</button>
                        </Link>
                    </div>

                </div>

                {/* dividing-sections-using-grid */}
                <div>


                    {/* flight-booking */}
                    <div className='max-w-[350px] sm:max-w-[650px] sm:pl-5 md:max-w-[740px] lg:max-w-[850px] lg:mt-44 xl:mt-44 xl:ml-0 xl:mr-10 2xl:mt-45'>
                        <div className='border-2 border-gray-200 rounded-xl mt-10 mx-3'>
                            {/* section-1 */}
                            <div className='flex justify-between px-2 pt-5 md:px-10 xl:px-10'>
                                <div className='flex gap-2'>
                                    <div>
                                        <Image className='w-8 h-8 lg:w-12 lg:h-12' src={airline1} alt='airline1' />
                                    </div>
                                    <div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-900 text-[14px] lg:text-[16px]`}>Hawaiian Airlines</p>
                                        </div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px]`}>FIG4312</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] lg:text-[16px]`}>16h 45m (+1d)</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] lg:text-[16px]`}>7:00 AM - 4:15 PM</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px]`}>2h 45m in HNL</p>
                                    </div>
                                </div>
                            </div><br />

                            <hr className='w-[95%] ml-2 text-gray-200 border' />

                            {/* section-2 */}
                            <div className='flex justify-between px-2 pt-5 md:px-10 xl:px-10'>
                                <div className='flex gap-2'>
                                    <div>
                                        <Image className='w-8 h-8 lg:w-12 lg:h-12' src={airline1} alt='airline1' />
                                    </div>
                                    <div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-900 text-[14px] lg:text-[16px]`}>Hawaiian Airlines</p>
                                        </div>
                                        <div>
                                            <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px]`}>FIG4312</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] lg:text-[16px]`}>16h 45m (+1d)</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-900 text-[14px] lg:text-[16px]`}>7:00 AM - 4:15 PM</p>
                                    </div>
                                    <div>
                                        <p className={`${nunito.className} text-gray-400 text-[14px] lg:text-[16px]`}>2h 45m in HNL</p>
                                    </div>
                                </div>
                            </div><br />
                        </div>

                        <div className='flex gap-6 justify-end mt-5 mr-5'>
                            <div className='text-right flex flex-col gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-[14px] lg:text-[16px]`}>Subtotal</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] lg:text-[16px]`}>Taxes and Fees</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] lg:text-[16px]`}>Total</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div>
                                    <p className={`${nunito.className} text-[14px] lg:text-[16px]`}>$503</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] lg:text-[16px]`}>$121</p>
                                </div>
                                <div>
                                    <p className={`${nunito.className} text-[14px] lg:text-[16px]`}>$624</p>
                                </div>
                            </div>
                        </div>

                        {/* selectseats-button */}
                        <div className='flex justify-end px-5 pt-5'>
                            <Link href='/passenger-information/seatbooking'>
                                <button className={`${nunito.className} ${!datafilled ? "bg-gray-200 text-gray-500 border-gray-400" : "border-[#605DEC] text-white bg-[#605DEC]"} text-[16px] border-2 cursor-pointer px-3 py-1 rounded-md ml-5 lg:text-lg xl:text-xl xl:px-4 xl:py-2`}>Select seats</button>
                            </Link>
                        </div>
                    </div>

                    <div className='flex md:justify-center'>
                        <div>
                            <Image className='w-[300px] ml-3 mt-10 object-cover md:mt-15 xl:w-[400px] xl:mt-25' src={luggageimage} alt='luggage-image' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PassengerInfo