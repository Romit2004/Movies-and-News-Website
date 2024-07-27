import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import Buttongreen from '../Button/Buttongreen';

function Home() {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center min-h-screen gap-10'>
            <Link
            to="movies"
            >
                 <Button text={"Movies"}/>
            </Link>
       <Link to = "./newses">
       <Buttongreen text={"news"}/>
       </Link>
       
        </div>
    )
}

export default Home
