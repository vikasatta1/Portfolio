import React from 'react';
import './footer.css'
import {FaTelegramPlane} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Vika</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="http://t.me/vika_satta" target='_blank'> <FaTelegramPlane/></a>
                <a href="https://vikasatta1998@gmail.com"target='_blank'><FiMail/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; VIKA MOROZOVA. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;