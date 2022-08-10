import React from 'react';
import './header.css'
import CTA from "./CTA";
// @ts-ignore
import ME from '../../assets/svgreact.jpg';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1>Vika Morozova</h1>
                <h5 className="text-light">
                    Front-end Developer
                </h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt={'me'}/>
                </div>

                <a href={'#contact'} className={'scroll__down'}>Scroll Down</a>

            </div>
        </header>
    );
};

export default Header;