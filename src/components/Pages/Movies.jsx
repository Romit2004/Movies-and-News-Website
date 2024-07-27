import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { Link,NavLink } from 'react-router-dom';

function Movies() {
    const url='https://imdb-top-100-movies.p.rapidapi.com/';
    
    const [data,setData] = useState([])
   
 
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response =  await fetch(url,{
                    method:'GET',
                    headers: {
         		'x-rapidapi-key': import.meta.env.VITE_MOVIE_API_KEY,
		        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
                    }
                });
                 const json = await response.json();
               
                setData(json)
                console.log(data);

                console.log(json);
              } catch (error) {
                  console.log(error)
              }
        }
        fetchData()
    },[])
   
  
    return (
        <>
        
        <p className='text-4xl font-semibold text-pretty text-cyan-500 mr-2 flex justify-center mt-4 mb-6'>
                        TOP 100 MOVIES
                    </p>
        <div className='flex gap-4 flex-wrap justify-center mt-4 mb-4'>
        {data && data?.map(({image,description,title,rating,genre,year,imdb_link})=>{
             return( 
                <NavLink to="/moviedes" state={{image :image, description :description, title : title, rating :rating, genre:genre, year :year, imdb: imdb_link}}>
                  <Movie image={image} description={description} title={title} rating={rating} genre={genre} year={year} imdb={imdb_link}/>
                </NavLink>
              
            )
        }) 
    }
        </div>
      
      
        </>
    )
}

export default Movies
