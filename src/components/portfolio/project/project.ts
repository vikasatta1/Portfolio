// @ts-ignore
import TODO from '../../../assets/todo.png';
// @ts-ignore
import SOCNET from '../../../assets/socnet.png';
// @ts-ignore
import CALC from '../../../assets/calc.png';
import React from "react";
type projectType = {
    id: number,
    image:string,
    title:string,
    github:string,
    demo:string,
}
export const Projects:Array<projectType> = [
    {
        id: 1,
        image:TODO,
        title:'Todolist',
        github:'http://github.com',
        demo:'http://github.com'
    },
    {
        id: 2,
        image:SOCNET,
        title:'Social Network',
        github:'http://github.com',
        demo:'http://github.com'
    },
    {
        id: 3,
        image:CALC,
        title:'Counter',
        github:'https://github.com/vikasatta1/Counter',
        demo:'https://vikasatta1.github.io/Counter/'
    }
]