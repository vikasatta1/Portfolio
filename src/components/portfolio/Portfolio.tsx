import React from 'react';
import './portfolio.css'
// @ts-ignore
import TODO from '../../assets/todo.png';
// @ts-ignore
import SOCNET from '../../assets/socnet.png';
// @ts-ignore
import CALC from '../../assets/chet.png';
import {Projects} from "./project/project";

const Portfolio = () => {
    return (
        <section id={'portfolio'}>
            <h5>My Projects</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    Projects.map(pr=>
                        <article className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={pr.image} alt={pr.title}/>
                        </div>
                        <h3>{pr.title}</h3>
                        <div className="portfolio_item-cta">
                            <a href={pr.github} className='btn' target='_blank'>Github</a>
                            <a href={pr.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>

                    </article>)
                }
            </div>
        </section>
    );
};

export default Portfolio;