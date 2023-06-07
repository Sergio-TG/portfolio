import React from 'react'
import { AiFillHtml5  } from 'react-icons/ai';
import { DiCss3  } from 'react-icons/di';
import { FaBootstrap, FaReact  } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';


const Skills = () => {
  return (
    <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#581845]'>Skills</h1>
    <div className='skills2'>
    <p className='text-1l py-8 text-justify text-[#581845]'>
      <ul>
      <AiFillHtml5  size={40}/>
        <li>HTML5</li>
        <DiCss3 size={40}/>
        <li>CSS3</li>
        <li>SASS</li>
        <IoLogoJavascript size={40}/>
        <li>JavaScript</li>
        <FaReact size={40}/>
      <li>React</li>
      <FaBootstrap size={40}/>
      <li>Bootstrap</li>
      </ul>
       
    </p>
    </div>
    </div>
  )
}

export default Skills