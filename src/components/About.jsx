import React from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <div

//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' >

//         <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>

//       </div>
//     </div>
//   </Tilt>
// );

const About = () => {
  return (
    <>
      <div >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >

        I'm a skilled frontend developer having knowledge of HTML, CSS, Tailwind CSS, JavaScript, ReactJS and NextJS. Currently I'm pursuing B.tech from JEC Jabalpur. I have keen interest in coding and looking for opportunity where i can utilize my skills appropriately.
      </p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  )
}

export default SectionWrapper(About, "about");