// import React, { useEffect, useState } from 'react'
// import News from './News'
// import './News.css'
// import { Link, useLoaderData } from 'react-router-dom'
// import Buttongreen from './../../Button/Buttongreen2'
// import Buttongreen2 from './../../Button/Buttongreen2'

// function Newses() {
//     // const [data,setData] = useState([])
//     // useEffect(()=>{
//     //    const fetchdata = async () => {
//     //     try {
//     //         const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-06-04&sortBy=publishedAt&apiKey=cf7b96a715674979bcb1364c2e368904');
//     //         const json = await response.json();

//     //         console.log(json);
//     //         setData(json.articles);
//     //         console.log(json.articles);
//     //         console.log(data);
//     //     } catch (error) {
//     //         console.log(error)
//     //     }
//     //    } 
//     //    fetchdata()

//     // },[])
//     const loaderdata = useLoaderData();

//     //  setData(loaderdata.articles);
//     let data = loaderdata.articles
//      console.log(data)

//     const [search,setSearch] = useState("");

//     const handleSearch = (e) =>{
//       setSearch(e.target.value);


//     }

//     const fetchnews = async () => {
//       console.log(search);
//       try {
//           const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=cf7b96a715674979bcb1364c2e368904`);
//           const json = await response.json();
//           console.log(json);
//           data = json.articles;
//           console.log(data);
//           // console.log(data);


//       } catch (error) {
//           console.log(error)

//       }

//       } 
//     //  fetchnews();

//     const news =   data && data?.map(({urlToImage,author,description,title,publishedAt,content})=>(
//       author == null?null : 
//       <Link
//       to='/newsdes'
//       state={{image:urlToImage, author: author, description: description, title: title, publish: publishedAt, content:content}}
//       >
//        <News image={urlToImage} author={author} title={title} publish={publishedAt}/>
//       </Link>


//   ))

//     return (
//       <>
//         <div className="flex w-full items-center m-auto mt-5 space-x-2 md:w-1/3">
//       <input
//         className="flex h-10 w-full rounded-md border border-white/100 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//         type="search"
//         placeholder="Search"
//         onChange={handleSearch}
//       ></input>
// {/* <Buttongreen2 className="h-10" text={"search"} search={search}  /> */}
// {/* <a onClick={fetchnews}>
//   Search
// </a> */}
//  <button  className='relative bg-white text-white uppercase text-[10px] tracking-wide font-normal py-3 px-10 transition ease-in-out delay-150 hover:tracking-widest hover:bg-green-600 hover:shadow-4xl hover:text-green-600' onClick={fetchnews}><span className='relative z-1'>Search</span><i></i></button> 
//     </div>

//         <div className='flex gap-4 flex-wrap justify-center mt-4 mb-4'>

//     {news}


//         </div>
//       </>


//     )
// }

// export default Newses
// export const fetchdata = async () => {
//     try {
//         const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7b96a715674979bcb1364c2e368904');
//         const json = await response.json();

//         // console.log(json);
//         // setData(json.articles);
//         // console.log(json.articles);
//         // console.log(data);
//         return json;
//     } catch (error) {
//         console.log(error)
//         return null;
//     }
//    } 
import React, { useEffect, useState } from 'react'
import News from './News'
import './News.css'
import { Link, useLoaderData } from 'react-router-dom'
import SearchResultList from './SearchResultList'
import { data as search_data } from "./data"
import dotenv from 'dotenv'


function Newses() {
    console.log(import.meta.env);

    const api_key = import.meta.env.VITE_API_KEY;
    console.log(api_key);
    const loaderdata = useLoaderData();
    const [data, setData] = useState(loaderdata.articles);
    console.log(data)
    const [search, setSearch] = useState("");
    const [header,setHeader] = useState("TOP NEWS");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const fetchnews = async (search) => {
        setSearch(search)
        setHeader(search.toUpperCase())
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}`);
            const json = await response.json();
            setData(json.articles);
        } catch (error) {
            console.log(error);
        }
    }

    const news = data && data.map(({ urlToImage, author, description, title, publishedAt, content, url }) => (
        author == null ? null :
            <Link
                to='/newsdes'
                state={{ image: urlToImage, author: author, description: description, title: title, publish: publishedAt, content: content, url: url }}
                key={title}
            >
                <News image={urlToImage} author={author} title={title} publish={publishedAt} />
            </Link>
    ));

    return (
        <>

            <div className='flex-col w-full items-center m-auto mt-5 space-x-2 md:w-1/3'>
                <div className="flex w-full items-center m-auto mt-5 space-x-2">

                    <input
                        className="flex h-10 w-full rounded-md border border-white/100 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="search"
                        placeholder="Search"
                        onChange={handleSearch}
                        value={search}
                    />
                    <button
                        className='relative bg-white text-white uppercase text-[10px] tracking-wide font-normal py-3 px-10 transition ease-in-out delay-150 hover:tracking-widest hover:bg-green-600 hover:shadow-4xl hover:text-green-600'
                        onClick={() => fetchnews(search)}
                    >
                        <span className='relative z-1'>Search</span>
                    </button>

                </div>


                <div className='w-full flex-col bg-[#242424] border-2 border-green-600 rounded-md max-h-72 overflow-y-scroll '>
                    {search_data.filter(item => {
                        const searchTerm = search.toLowerCase();
                        const keyword = item.keyword.toLowerCase();
                        return searchTerm && keyword.startsWith(searchTerm) && keyword != searchTerm
                    })
                        .map((search, id) => (
                            <div onClick={() => fetchnews(search.keyword)} key={id} className='px-2 py-2 border-green-600 hover:bg-green-600'>
                                <SearchResultList result={search.keyword} />
                            </div>


                        ))}

                </div>


            </div>
         
          
                    <p className='text-4xl font-semibold text-pretty text-green-600 mr-2 flex justify-center mt-4 mb-6'>
                        {header}
                    </p>

                
            

            <div className='flex gap-4 flex-wrap justify-center mt-4 mb-4'>
                {news}
            </div>
        </>
    );
}

export default Newses;

export const fetchdata = async () => {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7b96a715674979bcb1364c2e368904');
        const res = await response.json();
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}
