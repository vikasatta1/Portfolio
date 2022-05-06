import React from 'react';
import {MdMiscellaneousServices} from "react-icons/md";
type HardSkillPropsType = {
    skill:string,
    level:string
}
const HardSkill = (props:HardSkillPropsType) => {
    return (
        <article className='experience__details'>
            <MdMiscellaneousServices className='experience__details-icon'/>
            <div>
            <h4>{props.skill}</h4>
            <small className='text-light'>{props.level}</small>
            </div>
        </article>
    );
};

export default HardSkill;