import React from 'react';
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';


const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover scale-x-[1]' src="/bgr_main.jpg"></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Sergio Torres Guaymasi</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        I'm
                        <TypeAnimation
                            sequence={[
                                'a Frontend Web Developer', // Types 'One'
                                1000, // Waits 1s
                                'a Tech Lover', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                            ]}
                            wrapper='div'
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <a href="https://www.linkedin.com/in/sergiotg2022/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className='cursor-pointer' size={20} /> 
                        </a>
                        <a href="https://github.com/Sergio-TG" target='_blank' rel="noopener noreferrer">
                        <FaGithub className='cursor-pointer' size={20} />
                        </a>
                        <FaBehance className='cursor-pointer' size={20} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;