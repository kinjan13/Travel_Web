import React,{useState} from 'react'
import './navbar.css'
import {MdOutlineModeOfTravel} from 'react-icons/md';
import { IoCloseCircleOutline } from "react-icons/io5"
import { PiDotsNine } from "react-icons/pi";
const Navbar = () => {
    const [active, setActive] = useState('navBar')
//function to toggle navBar//
const showNav=()=>{
    setActive('navBar activeNavbar')
}

//function to remove navBar//
const removeNavbar=()=>{
    setActive('navBar Navbar')
}
  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1><MdOutlineModeOfTravel className="icon"/>Travel.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Shop</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Pages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">News</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>
                    <button className='btn'>
                        <a href="#">BOOK NOW</a>
                    </button>
                </ul>
                <div onClick={removeNavbar}className="closeNavbar"><IoCloseCircleOutline className='icon'/></div>

            
            </div>
            <div onClick={showNav}className="toggleNavbar">
                <PiDotsNine className="icon"/>
            </div>
        </header>
    </section>
  )
}

export default Navbar
