import React from 'react';

// @ts-ignore
import CV from '../../assets/forGomel.jpg';

const CTA = () => {
    return (
        <div className={'cta'}>
            <a href={CV} download className={'btn'}>Download CV</a>
            <a href={'#contact'} className={'btn btn-primary' }>Let's Talk</a>
        </div>
    );
};

export default CTA;