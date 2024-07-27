import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Movies from './components/Pages/Movies.jsx'
import Moviedes from './components/Moviedes/Moviedes.jsx'
import Newses, { fetchdata } from './components/Pages/News/Newses.jsx'
import Newsdes from './components/Newsdes/Newsdes.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
 <Route path='/' element={<Layout/>}>
  <Route path="/" element={<Home/>}/>
  <Route path="/movies" element={<Movies/>}/>
  <Route path='/moviedes' element={<Moviedes/>}/>
  <Route  loader={fetchdata} path='/newses' element={<Newses/>}/>
  <Route  path='/newsdes' element={<Newsdes/>}/>

 </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
) 
