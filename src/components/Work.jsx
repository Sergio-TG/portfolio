import React from "react";
import WorkItem from "./WorkItem";
const data = [
  {
    year: 2023,
    title: "Citrino Store",
    duration: "2 months",
    details: "lorem ipsum dolor  sit amet, consectetur adip lorem eu loremut",
  },
  {
    year: 2022,
    title: "FullStock Indumentaria",
    duration: "2 months",
    details: "lorem ipsum dolor  sit amet, consectetur adip lorem eu loremut",
  },

  {
    year: 2022,
    title: "Bon Giorno",
    duration: "2 months",
    details: "lorem ipsum dolor  sit amet, consectetur adip lorem eu loremut",
  },
  {
    year: 2021,
    title: "Egg Cooperation",
    duration: "7 months",
    details: "lorem ipsum dolor  sit amet, consectetur adip lorem eu loremut",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
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
