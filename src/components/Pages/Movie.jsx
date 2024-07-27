import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Movie({image,description,title,rating,genre,year,imdb}) {
    return (
        <div className='flex justify-center items-center'>
              <div className="w-[250px] h-[384px] rounded-md border-2 border-cyan-500 hover:shadow-3xl box-border overflow-y-scroll">
      <img
        src={image}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-l font-semibold text-pretty text-cyan-400">{title}</h1>
        <p className="mt-3 text-sm text-white">
     
          {description}
        </p>  
        <p className="mt-3 text-sm text-white">
         <span className='text-sm font-semibold text-pretty text-cyan-400 mr-2'>
            Rating : 
          </span>
         {rating}
        </p>
        <p className="mt-3 text-sm text-white">
         <span className='text-sm font-semibold text-pretty text-cyan-400 mr-2'>
            Genre : 
          </span>
         {genre}
        </p>

        <p className="mt-3 text-sm text-white">
         <span className='text-sm font-semibold text-pretty text-cyan-400 mr-2'>
            Year : 
          </span>
         {year}
        </p>
        <p className="mt-3 text-sm text-white">
         <span className='text-sm font-semibold text-pretty text-cyan-400 mr-2'>
            IMDB : 
          </span>
         {imdb}
        </p>
        {/* <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button> */}
      </div>
    </div>
        </div>
      
    )
}

export default Movie
