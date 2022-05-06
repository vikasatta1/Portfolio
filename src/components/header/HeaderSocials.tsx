import React from 'react';
import {BsGithub, BsLinkedin, BsTelegram} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className={'header__socials'}>
            <a href={'https://www.linkedin.com/in/viktoriya-morozova-849511214/'} target={'_blank'}><BsLinkedin/></a>
            <a href={'https://github.com/vikasatta1'} target={'_blank'}><BsGithub/></a>
            <a href={'https://t.me/vika_satta'} target={'_blank'}><BsTelegram/></a>

        </div>
    );
};

export default HeaderSocials;