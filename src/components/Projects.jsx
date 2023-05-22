import React from 'react'
import ProjectItem from './ProjectItem'
import citrinostore from '../assets/citrinostore.jpg'
import food from '../assets/food.jpg'
import fullstock from '../assets/fullstock.jpg'


const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#581845]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ullam saepe
                porro, sit corrupti facere?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea id maxime illo
                consequuntur reprehenderit necessitatibus ratione, labore officiis dolore unde.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={citrinostore} title='Citrino Store' />
                <ProjectItem img={food} title='BonGiorno Pastas Caseras' />
                <ProjectItem img={fullstock} title='Full Stock Indumentaria' />
                <ProjectItem img={citrinostore} title='Citrino Store' />
            </div>
        </div>
    )
}

export default Projects