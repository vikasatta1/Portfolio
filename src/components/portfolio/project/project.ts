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
        github:'https://github.com/vikasatta1/TodoDone',
        demo:'https://vikasatta1.github.io/TodoForPortfolio'
    },
    {
        id: 2,
        image:SOCNET,
        title:'Social Network',
        github:'https://github.com/vikasatta1/SocialNetwork',
        demo:'https://vikasatta1.github.io/SocialNetwork/'
    },
    {
        id: 3,
        image:CALC,
        title:'Pizza',
        github:'https://github.com/vikasatta1/pizza2',
        demo:'https://vikasatta1.github.io/pizza2/'
    }
]