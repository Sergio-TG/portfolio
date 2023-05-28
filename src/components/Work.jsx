import React from "react";
import WorkItem from "./WorkItem";
const data = [
  {
    year: 2007,
    title: "Holistor S.A. - DataSystem",
    duration: "Currently Working",
    details:
      "Advice to Professionals · Account management · Marketing of Errepar Systems and Accounting Management Holistor Software for Private and Public Companies · Sales Department · Onboarding · Analytical Skills · Training · Communication · Customer Service · Software as a Service (SaaS) · Presentation Skills · Business Operations · Business Administration · User support · Requirements Analysis",
  },

  {
    year: 2006,
    title: "Fundación Aarón Germán",
    duration: "7 months",
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
