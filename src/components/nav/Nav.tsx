import React, {useState} from 'react';
import './nav.css'
import {AiFillProject, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {GiBlackBook} from "react-icons/gi";

import {BiMessageRoundedDots} from "react-icons/bi";

const Nav = () => {
    const [activeNav, setActiveNav] = useState<string>('#')
    return (
        <nav>
            <a href={'#'}  onClick={() => {
                setActiveNav('#')
            }} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>

            <a href={'#about'}
               onClick={() => {
                   setActiveNav('#about')
               }}
               className={activeNav === "#about" ?'active' : ''}
            ><AiOutlineUser/>
            </a>

            <a href={'#experience'}
               onClick={() => {
                   setActiveNav('#experie')
               }}
               className={activeNav === "#experie" ?'active' : ''}
            ><GiBlackBook/></a>

            <a href={'#portfolio'}
               onClick={() => {
                   setActiveNav('#portfolio')
               }}
               className={activeNav === "#portfolio" ?'active' : ''}
            ><AiFillProject/></a>

            <a href={'#contact'}
               onClick={() => {
                   setActiveNav('#contact')
               }}
               className={activeNav === "#contact" ?'active' : ''}
            ><BiMessageRoundedDots/></a>

        </nav>
    );
};

export default Nav;