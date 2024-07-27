import React from 'react'

function News({image,author,title,publish}) {

    
        return (
          
            <div className='flex justify-center items-center'>
              
                  <div className="w-[250px] h-[384px] rounded-md border-2 border-green-600 hover:shadow-4xl box-border overflow-y-auto">
          <img
            src={image==null?"https://img.freepik.com/free-vector/newspaper-concept-illustration_114360-22666.jpg":image}
            alt="News"
            className="h-[200px] w-full rounded-md object-cover"
          />
          
          <div className="p-4">
          <p className="mt-3 text-sm text-white">
             <span className='text-sm font-semibold text-pretty text-green-600 mr-2'>
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
             {publish.slice(0,10)}
            </p>
            {/* <p className="mt-3 text-sm text-white">
             <span className='text-sm font-semibold text-pretty text-green-600 mr-2'>
                Description : 
              </span>
              
              {description.slice(0,150)}....
            </p>  */}
    
            {/* <p className="mt-3 text-sm text-white">
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
            </p> */}
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

export default News
