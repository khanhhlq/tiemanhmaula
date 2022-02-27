import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.svg'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' style={{ width: "115px" }} />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Trang chủ</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>Blog</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Dịch vụ</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Liên hệ</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
