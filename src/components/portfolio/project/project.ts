// @ts-ignore
import TODO from '../../../assets/todo.png';
// @ts-ignore
import SOCNET from '../../../assets/socnet.png';
// @ts-ignore
import CALC from '../../../assets/calc.png';
// @ts-ignore
import CHET from '../../../assets/chet.png';
// @ts-ignore
import WEATHER from '../../../assets/weather.png';
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
        id: 0,
        image:WEATHER,
        title:'Weather',
        github:'https://github.com/vikasatta1/WeatherOpenWeather',
        demo:'https://vikasatta1.github.io/WeatherOpenWeather'
    },
    {
        id: 1,
        image:TODO,
        title:'Todolist',
        github:'https://github.com/vikasatta1/TodolistForPortfolio',
        demo:'https://vikasatta1.github.io/TodolistForPortfolio'
    },

    {
        id: 2,
        image:CALC,
        title:'Pizza',
        github:'https://github.com/vikasatta1/pizza2',
        demo:'https://vikasatta1.github.io/pizza2/'
    },
    {
        id: 4,
        image:CHET,
        title:'Calculator',
        github:'https://github.com/vikasatta1/calculator',
        demo:'https://vikasatta1.github.io/calculator'
    },
    {
        id: 4,
        image:SOCNET,
        title:'Social Network',
        github:'https://github.com/vikasatta1/SocialNetwork',
        demo:'https://vikasatta1.github.io/SocialNetwork/'
    },
]