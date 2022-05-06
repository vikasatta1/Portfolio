import React from 'react';
import './experience.css'
import {GiSkills} from "react-icons/gi";
import {MdMiscellaneousServices} from "react-icons/md";

const Experience = () => {
    return (
        <section id={'experience'}>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__hard">  {/*coding*/}
                    <h3>Hard Skills</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <MdMiscellaneousServices/>
                        </article>
                    </div>
                </div>
                <div className="experience__soft">{/*характер*/}
                    <h3>Soft Skills</h3>
                    <GiSkills/>
                </div>
            </div>
        </section>
    );
};

export default Experience;