import ProjectItem from './ProjectItem'
import citrinostore from '../assets/citrinostore.jpg'
import food from '../assets/food.jpg'
import fullstock from '../assets/fullstock.jpg'
import landing1 from '../assets/landing1.jpg'


const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#581845]'>Projects</h1>
            <p className='text-center py-8 text-justify'>
                These are the projects I did during my career at Coderhouse and the last time was working on AccessBank July 2023 for No Country.
                If you are looking for a Front-End developer who can offer customized and high-quality solutions to your web project,
                don't hesitate to contact me! I am ready to help you in any challenge you face in the world of web programming.
                I have specialized in creating attractive and functional user interfaces that provide exceptional user experiences.
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <a href='https://c12-accessbank.vercel.app//' target="_blank" rel="noopener noreferrer">
                <ProjectItem img={landing1} title='AccessBank' />
                </a>
                <a href='https://citrinostore.vercel.app//' target="_blank" rel="noopener noreferrer">
                <ProjectItem img={citrinostore} title='Citrino Store' />
                </a>
                <a href='https://bongiornopastas.netlify.app/' target="_blank" rel="noopener noreferrer">
                <ProjectItem img={food} title='BonGiorno Pastas' />
                </a>
                <a href='https://sergio-tg.github.io/ProyectoFinal-JS/' target="_blank" rel="noopener noreferrer">
                <ProjectItem img={fullstock} title='Full Stock Indumentaria' />
                </a>
            </div>
        </div>
    )
}

export default Projects