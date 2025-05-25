import React from "react";
import WorkItem from "./WorkItem";
const data = [

  {
    year: "July - September 2023",
    title: "No Country",
    duration: "2 months",
    details:
      "Remote work emulation. I took part in Cohort 12 with my team, we developed a web project in React in one month for a Digital Bank. I accompanied the whole group, as well as generating some of the components in code, also as Project Manager. I acted as Team Leader for 3 responsible teams, which I accompanied so that they could complete their project! In August and September I took part in the second stage of Selected 10, as Project Manager, where we were given the challenge of creating an UBER clone. We focused on redesigning the website, implementing Mercado Pago and the Mapbox API for geolocation.",
  },
  {
    year: "April 2007 - June 2023",
    title: "Holistor S.A. - DataSystem",
    duration: "16 years",
    details:
      "Advice to Professionals · Account management · Marketing of Errepar Systems and Accounting Management Holistor Software for Private and Public Companies · Sales Department · Onboarding · Analytical Skills · Training · Communication · Customer Service · Software as a Service (SaaS) · Presentation Skills · Business Operations · Business Administration · User support · Requirements Analysis",
  },

  {
    year: "February 2006 - March 2007",
    title: "Fundación Aarón Germán",
    duration: "1 year",
    details:
      "Internship at the Stock Market Research Foundation · Purchase and Sale of Shares Public Securities through the Bolsar application · Technical sheet of negotiable obligations · Charts of historical series of prices and volumes · SQL Database Administration · Backup Systems · Data Entry · Creation of reports and graphs in Microsoft Excel · Microsoft VisualBasic · Technical Support · I was in charge of updating and configuring network computers with Windows operating system.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#581845]">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
