import React from 'react';
import './experience.css'
import HardSkill from "./HardSkill";
import SoftSkill from "./Softskill";


const Experience = () => {
    return (
        <section id={'experience'}>
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container experience__container">

                <div className="experience__hard">               {/*coding front*/}
                    <h3>Hard</h3>
                    <div className="experience__content">
                        <HardSkill skill={'JS/TS'} level={'Intermediate'}/>
                        <HardSkill skill={'React'} level={'Intermediate'}/>
                        <HardSkill skill={'Redux'} level={'Intermediate'}/>
                        <HardSkill skill={'Rest API'} level={'Intermediate'}/>
                        <HardSkill skill={'Axios'} level={'Intermediate'}/>
                        <HardSkill skill={'Git'} level={'Intermediate'}/>
                    </div>
                </div>


                <div className="experience__soft">               {/*характер back*/}
                    <h3>Soft</h3>
                    <div className="experience__content">
                        <SoftSkill skill={'Sociable'}/>
                        <SoftSkill skill={'Responsible'}/>
                        <SoftSkill skill={'Ambition'}/>
                        <SoftSkill skill={'Stress tolerance'}/>
                        <SoftSkill skill={'Openness'}/>
                        <SoftSkill skill={'Teamwork skills'}/>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Experience;