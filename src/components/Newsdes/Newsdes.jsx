import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

function Newsdes() {
    const location = useLocation();
    const image = location.state?.image;
    const author = location.state?.author;
    const description = location.state?.description;
    const title = location.state?.title;
    const publish = location.state?.publish;
    const content = location.state?.content;
    const url = location.state?.url;
    console.log(image);
    return (
        <div className='flex justify-center items-center mt-10 '>

            <div className="flex rounded-md border-2 border-green-600 hover:shadow-4xl box-border overflow-y-scroll max-w-[70%]">
                <div>
                    {image ?  <img
                        src={image}
                        alt="Laptop"
                        className="max-w-[100%] max-h-[100%] rounded-md object-cover"
                    />: null}
                   

                </div>

                <div>
                    <div className="p-4">

                        <p className="mt-3 text-sm text-white">
                            <span className='text-xl font-semibold text-pretty text-green-600 mr-2'>
                                Title :
                            </span>
                            {title}
                        </p>
                        <p className="mt-3 text-sm text-white">
                            <span className='text-sm font-semibold text-pretty text-green-600 mr-2'>
                                Author :
                            </span>
                            {author}
                        </p>
                        <p className="mt-3 text-sm text-white">
                            <span className='text-sm font-semibold text-pretty text-green-600 mr-2'>
                                Published At :
                            </span>
                            {publish.slice(0, 10)}
                        </p>

                        

                            {content?<p className="mt-3 text-sm text-white">
                            <span className='text-sm font-semibold text-pretty text-green-600 mr-2'>
                                Content :
                            </span>
                            {content}
                            </p>
                            : null}
                        
                        {description?<p className="mt-3 text-sm text-white">
                            <span className='text-sm font-semibold text-pretty text-green-600 mr-2'>
                                Description :
                            </span>
                            {description}
                            </p>
                            : null}
                            <p className="mt-3 text-sm text-white flex justify-center cursor-pointer">
                                <Link to={url}>
                                <span className='text-sm font-semibold text-pretty text-green-600 mr-2 mx-auto'>
                                Click here to see full news
                            </span>
                                </Link>
                            
                           
                        </p>


                        {/*  <p className="mt-3 text-sm text-white">
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
                    </p>  */}
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

export default Newsdes
