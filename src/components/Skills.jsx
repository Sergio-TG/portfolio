import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap, FaReact, FaSass, FaTrello } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFirebase } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import cv from "../assets/cv.jpg";

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#581845]">
        About & Skills
      </h1>
      <p className="text-center py-8 text-justify">
        I am a highly motivated individual with a passion for technology. As a skilled Frontend Web Developer specializing in React, I bring a wealth of expertise in crafting dynamic and user-friendly interfaces. Additionally, my proficiency extends to Project Management, where I excel in leading teams and overseeing projects. With a proven track record in software companies, IT services, B2B, B2C, and SaaS, as well as ERP, I am adept at navigating diverse landscapes. My collaborative attitude and strong teamwork skills have consistently added value to companies and projects, enabling them to achieve their objectives. I am confident that I can be a great asset to your team.
      </p>
      <div >
        <img src={cv} alt="CV" className="flex justify-center mx-auto rounded-xl group-hover:opacity-10" />
      </div>

      <div className="grid gap-x-8 gap-y-4 grid-cols-5 text-1l ml-8 py-8 text-[#581845] flex justify-center mx-auto ">
        <div>
          <AiFillHtml5 size={50} />
          HTML5
        </div>
        <div>
          <DiCss3 size={50} />
          CSS3
        </div>
        <div>
          <FaSass size={40} />
          SASS
        </div>
        <div>
          <IoLogoJavascript size={40} />
          JavaScript
        </div>
        <div>
          <FaReact size={40} />
          React
        </div>
        <div>
          <FaBootstrap size={40} />
          Bootstrap
        </div>
        <div>
          <SiFirebase size={40} />
          Firebase
        </div>
        <div>
          <GrMysql size={40} />
          MySQL
        </div>
        <div>
          <AiFillGithub size={40} />
          GitHub
        </div>
        <div>
          <FaTrello size={40} />
          Trello
        </div>
      </div>

      <div className="relative flex items-center justify-center shadow-xl shadow-grey-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#581845]">
        <h1 className="text-[#581845]">
          <a
            href="https://drive.google.com/file/d/1Q3XL-1dW_iBADu2c1TTD9oZnOoQe_Z79/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
          >
            Download My CV
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Skills;
