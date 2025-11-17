import React, { useEffect, useReducer, useRef, useState } from 'react'
import worldmap from '@/app/assets/world_map.png';
import Image from 'next/image';
import { Manrope, Nunito } from 'next/font/google';
import arrrivalpic from '@/app/assets/arrival.png';
import departurepic from '@/app/assets/departure.png';
import calenderpic from '@/app/assets/calender.png';
import person from '@/app/assets/person.png';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion, spring } from "motion/react"



const manrope = Manrope({
    subsets: ['cyrillic'],
    weight: ['800']
})

const nunito = Nunito({
    subsets: ['cyrillic'],
    weight: ['400']
});

const HeroSection = () => {

    const windowRef1 = useRef(null);
    const windowRef2 = useRef(null);
    const windowRef4 = useRef(null);

    const [Cookie, setCookie] = useState(true);
    const [Input1, setInput1] = useState(false);
    const [Input2, setInput2] = useState(false);
    const [Adult, setAdult] = useState(0);
    const [Minor, setMinor] = useState(0);
    const [Input4, setInput4] = useState(false);
    const [Calender,setCalender] = useState(false);
    const [Selected,setSelected] = useState('');
    const [Selected2,setSelected2] = useState('');
    const [Radio,setRadio] = useState('');
    

    const handleCookie = () => {
        setCookie(!Cookie);
    }

    const handleInput1 = () => {
        setInput1(!Input1);
    }

    const handleInput2 = () => {
        setInput2(!Input2);
    }

    const handleAdultInc = () => {
        setAdult(Adult + 1);
    }

    const handleAdultDec = () => {
        setAdult(Adult - 1);
    }

    const handleMinorInc = () => {
        setMinor(Minor + 1);
    }

    const handleMinorDec = () => {
        setMinor(Minor - 1);
    }

    const handleInput4 = () => {
        setInput4(!Input4);
    }

    const handleCalender = () => {
        setCalender(!Calender);
    }
    
    const handleRadio = (e) => {
        setRadio(e.target.value);
    }
   

    useEffect(() => {
        const handleClickOutside = (e) => {
            
            if(windowRef1.current && !windowRef1.current.contains(e.target)){
                setInput1(false);
            }
            if(windowRef2.current && !windowRef2.current.contains(e.target)){
                setInput2(false);
            }
            if(windowRef4.current && !windowRef4.current.contains(e.target)) {
                setInput4(false);
            }

        }

            document.addEventListener("mousedown",handleClickOutside);

            return () => {
                document.removeEventListener("mousedown",handleClickOutside);
            }
    },[])

    return (
        <div>
            <div className='w-full min-h-[300px] z-10 flex flex-col relative'>
                <Image className='w-full min-h-[500px]' src={worldmap} alt='world map' />

                {/* main-title */}
                <div className='absolute top-[20%] left-[5%] text-center px-15 lg:top-[13%]  xl:top-[15%] xl:left-[0%]'>
                    <p className={`${manrope.className} font-bold text-2xl sm:text-4xl sm:px-40 md:text-6xl md:px-30 lg:text-7xl lg:px-50 xl:text-8xl xl:px-90 bg-[url("/color-gradient.png")] text-transparent bg-clip-text`}>It's more than just a trip</p>
                </div>

                {/* passenger-input-fields */}
                <div className='absolute top-[40%] left-[20%] md:ml-5 lg:left-[3%] xl:top-[50%] xl:left-[9%] 2xl:top-[40%]'>
                    <div className='grid gap-5 sm:grid-cols-2 sm:ml-8 sm:mt-25 lg:grid-cols-6'>
                        <div className='flex w-[200px] h-[30px] border border-gray-200 bg-white hover:border-[#605DEC] shadow-lg shadow-gray-300 rounded-xs outline-none lg:w-[250px] lg:h-[40px] xl:ml-2'>
                            <Image src={departurepic} alt='departure-image' className='w-4 h-4 mt-1 ml-2 lg:w-5 lg:h-5 lg:mt-1.5' />
                            <input onClick={handleInput1} type="text" value={Selected} className={`${nunito.className} outline-none pl-2 text-xs w-full lg:text-lg`} placeholder='From where?' readOnly />
                        </div>
                        <div className='flex w-[200px] h-[30px] border border-gray-200 bg-white hover:border-[#605DEC] shadow-lg shadow-gray-300 rounded-xs outline-none lg:w-[250px] lg:h-[40px] lg:ml-18 xl:ml-11 2xl:ml-6'>
                            <Image src={arrrivalpic} alt='arrival-image' className='w-4 h-4 mt-1 ml-2 lg:w-5 lg:h-5 lg:mt-1.5' />
                            <input onClick={handleInput2} type="text" value={Selected2} className={`${nunito.className} outline-none pl-2 text-xs w-full lg:text-lg`} placeholder='Where to?' readOnly />
                        </div>
                        <div className='flex w-[200px] h-[30px] border border-gray-200 bg-white hover:border-[#605DEC] shadow-lg shadow-gray-300 rounded-xs outline-none lg:w-[250px] lg:h-[40px] lg:ml-36 xl:ml-12'>
                            <Image src={calenderpic} alt='calender-image' className='w-6 h-6 mt-0.5 ml-2 lg:w-8 lg:h-8' />
                            <input onClick={handleCalender} type="text" value={Radio} className={`${nunito.className} outline-none pl-2 text-xs w-full lg:text-lg`} placeholder='Depart - Return' readOnly />
                        </div>
                        <div className='flex w-[200px] h-[30px] border border-gray-200 bg-white hover:border-[#605DEC] shadow-lg shadow-gray-300 rounded-xs outline-none lg:w-[250px] lg:h-[40px] lg:ml-54 xl:ml-20 2xl:ml-18'>
                            <Image src={person} alt='departure-image' className='w-6 h-6 mt-0.5 ml-2 lg:w-8 lg:h-8' />
                            <input onClick={handleInput4} type="text" value={Adult} className={`${nunito.className} outline-none pl-2 text-xs w-full lg:text-lg`} placeholder='1 adult' readOnly />
                        </div>
                    </div>
                    <div className='ml-16 mt-8 sm:ml-51 sm:mt-10 lg:ml-[480px] lg:mt-20 2xl:absolute 2xl:left-[546px] 2xl:top-[20px]'>
                        <button className={`${nunito.className} bg-[#605DEC] py-1 px-3 text-white cursor-pointer rounded-md lg:py-2 lg:px-5 lg:text-lg 2xl:py-1.5`}>Search</button>
                    </div>
                </div>

                {/* input-field-1-options */}
                <AnimatePresence>
                {Input1 ? (
                    <motion.div ref={windowRef1} initial={{ opacity : 0 }} animate={{ opacity : 1,transform: 'translateY(10px)' }} exit={{ opacity : 0,transform:'translateY(-3px)'}} transition={{ type: spring, damping: 11 }} className='absolute top-[46%] left-[28%] w-[173px] h-[100px] text-[12px] bg-white shadow-lg shadow-gray-400/60 overflow-y-scroll flex flex-col gap-0.5 rounded-xs sm:top-[66%] sm:left-[28%] lg:left-[10%] lg:w-[220px] lg:gap-2 lg:h-[220px] lg:rounded-lg xl:left-[14%] xl:top-[72%] 2xl:left-[14%] 2xl:top-[59%]'>
                        <p onClick={() => (handleInput1(),setSelected("SFO"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`} >SFO</p>
                        <p onClick={() => (handleInput1(),setSelected("ATL"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`} >ATL</p>
                        <p onClick={() => (handleInput1(),setSelected("LAX"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`} >LAX</p>
                        <p onClick={() => (handleInput1(),setSelected("STL"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`} >STL</p>
                        <p onClick={() => (handleInput1(),setSelected("PVG"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`} >PVG</p>
                        <p onClick={() => (handleInput1(),setSelected("MSP"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`} >MSP</p>
                        <p onClick={() => (handleInput1(),setSelected("NRT"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`} >NRT</p>
                    </motion.div>
                ) : (null)
                }
                </AnimatePresence>

                {/* input-field-2-options */}
                <AnimatePresence>
                {Input2 ? (
                    <motion.div ref={windowRef2} initial={{ opacity : 0 }} animate={{ opacity : 1,transform: 'translateY(10px)' }} exit={{ opacity : 0,transform:'translateY(-3px)'}} transition={{ type: spring, damping: 11 }} className='absolute top-[56%] left-[28%] w-[173px] h-[100px] text-[12px] bg-white shadow-lg shadow-gray-400/60 overflow-y-scroll flex flex-col gap-0.5 rounded-xs sm:top-[66%] sm:left-[58%] lg:left-[31%] lg:w-[228px] lg:gap-2 lg:h-[220px] lg:rounded-lg xl:top-[71%] xl:w-[210px] 2xl:left-[30%] 2xl:top-[59%] 2xl:w-[228px]'>
                        <p onClick={() => (handleInput2(),setSelected2("NRT"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`}>NRT</p>
                        <p onClick={() => (handleInput2(),setSelected2("PVG"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`}>PVG</p>
                        <p onClick={() => (handleInput2(),setSelected2("STL"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`}>STL</p>
                        <p onClick={() => (handleInput2(),setSelected2("ATL"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`}>ATL</p>
                        <p onClick={() => (handleInput2(),setSelected2("MSP"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`}>MSP</p>
                        <p onClick={() => (handleInput2(),setSelected2("SFO"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`}>SFO</p>
                        <p onClick={() => (handleInput2(),setSelected2("JFK"))} className={`${nunito.className} px-4 py-0.5 mx-3  transition-all duration-200 hover:bg-[#605DEC] hover:text-white rounded-xs lg:text-[16px] lg:rounded-md cursor-pointer`}>JFK</p>
                    </motion.div>
                ) : (null)
                }
                </AnimatePresence>

                {/* input-field-4-options    */}
                <AnimatePresence>
                {Input4 ? (
                    <motion.div ref={windowRef4} initial={{ opacity : 0 }} animate={{ opacity : 1,transform: 'translateY(10px)' }} exit={{ opacity : 0,transform:'translateY(-3px)'}} transition={{ type: spring, damping: 11 }} className='absolute flex flex-col gap-4 bg-white shadow-lg shadow-gray-400/60 py-3 w-[170px] h-[80px] px-4 rounded-md top-[76%] left-[30%] sm:left-[60%] lg:w-[210px] lg:h-[100px] lg:py-5 lg:top-[66%] lg:left-[77%] xl:left-[66%] xl:top-[71%] 2xl:left-[65%] 2xl:top-[59%]'>
                        {/* adults */}
                        <div className='flex gap-7 lg:gap-10'>
                            <div>
                                <p className={`${nunito.className} !font-semibold text-gray-400 text-[12px] lg:text-[16px]`}>Adults:</p>
                            </div>
                            <div className='flex -mt-1 gap-2 lg:gap-3'>
                                <button onClick={handleAdultInc} className='bg-gray-100 text-[#605DEC] cursor-pointer px-1 rounded-xs lg:text-[16px]'>+</button>
                                <div>
                                    <p className={`${nunito.className} text-[12px] pt-1 lg:text-[16px]`}>{Adult}</p>
                                </div>
                                <button onClick={handleAdultDec} className='bg-gray-100 text-[#605DEC] cursor-pointer px-1.5 rounded-xs lg:text-[16px]'>-</button>
                            </div>
                        </div>

                        {/* minors */}
                        <div className='flex gap-7 lg:gap-10'>
                            <div>
                                <p className={`${nunito.className} !font-semibold text-gray-400 text-[12px] lg:text-[16px]`}>Minors:</p>
                            </div>
                            <div className='flex -mt-1 gap-2 lg:gap-3'>
                                <button onClick={handleMinorInc} className='bg-gray-100 text-[#605DEC] cursor-pointer px-1 rounded-xs lg:text-[16px]'>+</button>
                                <div>
                                    <p className={`${nunito.className} text-[12px] pt-1 lg:text-[16px]`}>{Minor}</p>
                                </div>
                                <button onClick={handleMinorDec} className='bg-gray-100 text-[#605DEC] cursor-pointer px-1.5 rounded-xs lg:text-[16px]'>-</button>
                            </div>
                        </div>
                    </motion.div>
                ) : (null)
                }
                </AnimatePresence>

                 <AnimatePresence>
                {Calender ? (
                <motion.div initial={{ opacity: 0,scale:0 }} animate={{ opacity: 1,scale: 1 }} exit={{ opacity: 0,scale: 0 }} className='absolute top-[45%] left-[20%] w-[200px] h-[200px] border border-gray-300 rounded-lg bg-white shadow-lg shadow-gray-400/50 md:w-[450px] lg:w-[500px] lg:left-[40%]'>

  
                    <div className='md:flex md:gap-2'>
                        {/* radio-buttons */}
                        <div className='ml-4 flex gap-2 mt-5 md:w-[40%] lg:gap-4 xl:gap-4'>
                            <div className='flex gap-1'>
                                <input className='lg:-mt-6' type="radio" name='trip' value="Round trip" onChange={handleRadio} checked={Radio === "Round trip"} />
                                <p className={`${nunito.className} text-[14px]`}>Round trip</p>
                            </div>
                            <div className='flex gap-1'>
                                <input className='lg:-mt-6' type="radio" name='trip' value="One way" onChange={handleRadio} checked={Radio === "One way"} />
                                <p className={`${nunito.className} text-[14px]`}>One way</p>
                            </div>
                        </div>

                        {/* input */}
                        <div className='md:flex'>
                            <div className='flex border border-[#605DEC] rounded-md w-[90%] h-[40px] m-3 md:ml-5 xl:w-[60%]'>
                                <Image src={calenderpic} alt='calenderpic' />
                                <input className={`${nunito.className} w-full h-full pl-2 outline-none text-[14px]`} type="text" placeholder='Depart - Return' />
                            </div>
                            <div>
                                <button onClick={handleCalender} className={`${nunito.className} text-[14px] rounded-md px-3 py-1 ml-18 bg-[#605DEC] text-white cursor-pointer md:ml-0 md:text-[15px] md:py-2 md:px-4 md:mt-3 md:mr-2`}>Done</button>
                            </div>
                        </div>
                    </div>

                    <hr className=' mt-2 border border-gray-200' />
                    <div>
                        
                    </div>

                </motion.div>

                ) : (null) }
                 </AnimatePresence>

                {/* cookie */}
                {Cookie && (
                    <div className='fixed border-2 border-[#605DEC] rounded-xl w-[230px] h-[90px] bg-purple-50 bottom-1 left-1 lg:w-[300px] lg:h-[130px] lg:bottom-1 2xl:w-[330px] 2xl:h-[150px] 2xl:left-1 2xl:bottom-1'>
                        <div className='flex'>
                            <p className={` ${nunito.className} font-bold text-blue-700 text-xs px-5 py-3 lg:text-lg 2xl:py-6 2xl:px-20 2xl:-ml-15 2xl:text-lg`}>By using our site,you agree to eat our cookies.</p>
                            <XMarkIcon onClick={handleCookie} className='absolute cursor-pointer w-4 h-4 right-1 top-3 lg:w-5 lg:h-5 lg:top-4 2xl:w-6 2xl:h-6 2xl:right-5 2xl:top-7' />
                        </div>

                        <div className='flex pl-5 gap-2 2xl:gap-6 2xl:-mt-3'>
                            <button onClick={handleCookie} className={`${nunito.className} bg-[#605DEC] rounded-md text-white text-xs cursor-pointer px-2 py-1 lg:text-lg 2xl:px-3 2xl:py-1.5`}>Accept cookies</button>
                            <p className={`${nunito.className} text-blue-600 pt-1 text-xs cursor-pointer lg:text-lg 2xl:pt-1`}>Go to settings</p>
                        </div>
                    </div>
                )}




            </div>
        </div>
    )
}

export default HeroSection