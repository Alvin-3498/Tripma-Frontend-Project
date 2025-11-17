import React, { useState } from 'react'

const Colorbox = () => {

    const [Colour, setColour] = useState(false);

    const handleColour = () => {
        setColour(!Colour);
    }

    return (
        <div onClick={handleColour} className={`${Colour ? ("bg-[#605DEC]") : ("bg-gray-400")} w-[30px] h-[40px] rounded-lg`}></div>
    )
}

export default Colorbox