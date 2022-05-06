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
                            <h5>Experience</h5>
                            <small>Todolist</small>
                        </article>

                        <article className={'about__card'}>
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>No clients</small>
                        </article>

                        <article className={'about__card'}>
                            <TiFolderOpen className="about__icon"/>
                            <h5>Projects</h5>
                            <small>Todolist</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eligendi eos fugiat impedit
                        in iure magni nemo nihil nostrum numquam pariatur, porro provident quasi, quidem rem
                        reprehenderit
                        saepe sit totam.
                    </p>

                    <a href={'#contact'} className={'btn btn-primary'}>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;