import React from "react";
import {GiSkills} from "react-icons/gi";

type SoftSkillPropsType = {
    skill: string,
}
const SoftSkill = (props: SoftSkillPropsType) => {
    return (
        <article className='experience__details'>
            <GiSkills className='experience__details-icon'/>
            <div>
                <h4>{props.skill}</h4>
            </div>
        </article>
    );
};
export default SoftSkill;