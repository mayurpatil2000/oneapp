import React from 'react'
import { Link } from 'react-router-dom'
import  logo  from "../asset/logo.svg";

function Navbar() {
  return (
    <div className='flex'> 
       
       <Link to="/">
           <img src={logo} alt="Logo" width={160} height={40} loading="lazy " />
       </Link>

       <nav className='flex m-23'>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/singup">Singup</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
       </nav>

       {/* button login and singup */}

       <div>
        {
            //  
            <>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/singup">
                    <button>Singup</button>
                </Link>
            </>
        }
       </div>



    </div>
  )
}

export default Navbar
