import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      date={education.date}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {education.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <div >
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done academically
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((education, index) => (
            <ExperienceCard
              key={`education-${index}`}
              education={education}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "work");