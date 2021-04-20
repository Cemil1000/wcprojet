import React from 'react'
import {FaCaretDown}from 'react-icons/fa'

export default function Layout() {
    return (
        <>
            <header>
                <div class="container">
                    <img src="./img/logo.png" alt="Logo du site" class="logo"/>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropbtn">Pages <FaCaretDown /></a>
                                <div class="dropdown-content">
                                    <a href="#">404 Page</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
