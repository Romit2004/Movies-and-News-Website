import React from 'react'
import "./Buttongreen2.css"
function Buttongreen2({text}) {
    
    return (
        <>
        <button  className='relative bg-white text-white uppercase text-[10px] tracking-wide font-normal py-3 px-10 transition ease-in-out delay-150 hover:tracking-widest hover:bg-green-600 hover:shadow-4xl hover:text-green-600'><span className='relative z-1'>{text}</span><i></i></button> 
        </>
    )
}

export default Buttongreen2
