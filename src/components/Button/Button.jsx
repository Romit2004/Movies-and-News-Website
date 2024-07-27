import React from 'react'
import './Button.css'

function Button({text}) {
    return (
        <>
        <button  className='relative bg-white text-white uppercase text-2xl tracking-wide font-normal py-4 px-10 transition ease-in-out delay-150 hover:tracking-widest hover:bg-cyan-500 hover:shadow-3xl hover:text-cyan-500'><span className='relative z-1'>{text}</span><i></i></button>
        </>
    )
}

export default Button
