import React from 'react';
// @ts-ignore
import Loki from '../../assets/loki.jpg'
import "./about.css"
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {TiFolderOpen} from "react-icons/ti";

const About = () => {
    return (
        <section id={'about'}>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Loki} alt={'withLoki'}/>
                    </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className={'about__card'}>
                            <FaAward className="about__icon"/>
                            <h5>Education</h5>
                            <div><small>It-Incubator</small></div>
                            <small>College of Electrical Engineering</small>
                        </article>

                       {/* <article className={'about__card'}>
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>No clients</small>
                        </article>*/}

                        <article className={'about__card'}>
                            <TiFolderOpen className="about__icon"/>
                            <h5>Language</h5>
                            <div><small>English</small></div>
                            <small>Russian</small>
                        </article>
                    </div>
                    <p>Hello, I am front-end developer.
                        Every day I improve my skills and expand them learning new technologies.
                        I have experience in creating SPA, using(JS/TS), Redux, HTML, CSS.
                        My free time is dedicated to programming tutorials, codewars. I'm looking for a full-
                        time job and I'm open to new opportunities.
                    </p>

                    <a href={'#contact'} className={'btn btn-primary'}>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;