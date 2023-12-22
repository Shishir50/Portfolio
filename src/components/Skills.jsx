import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Skills = () => {
  return (
   <>
    <div >
        <p className={styles.sectionSubText}>What I have Learned</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </div>

    <div className=' mt-8 flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-20 h-20 flex flex-col justify-center items-center' key={technology.name}>
          <img src={`${technology.icon}`} alt="" />
          <span className="sm:text-[14px] text-[12px] text-secondary tracking-wider">{technology.name}</span>
        </div>
      ))}
    </div>
  </>
  );
};

export default SectionWrapper(Skills, "skills");