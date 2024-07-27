import React from 'react'
import { useLocation } from 'react-router';

function Moviedes() {
    const location = useLocation();
    const title = location.state?.title;
    const image = location.state?.image;
    const description = location.state?.description;
    const rating = location.state?.rating;
    const genre = location.state?.genre;
    const year = location.state?.year;
    const imdb = location.state?.imdb;
console.log(imdb);
    console.log(title);
    // console.log(props);
    return (

        <div className='flex justify-center items-center mt-10 '>

            <div className="flex rounded-md border-2 border-cyan-500 hover:shadow-3xl box-border overflow-y-scroll">
                <div>
                    <img
                        src={image}
                        alt="Laptop"
                        className="h-[300px] w-[250px] rounded-md object-cover"
                    />

                </div>

                <div>
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold  text-pretty text-cyan-400">{title}</h1>
                        <p className="mt-3 text-sm text-white">
                        <span className='text-sm font-semibold text-pretty text-cyan-400 mr-2'>
            Description : 
          </span>
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
        </div>
      

    )
}

export default Moviedes
