import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { contact } from "../constants";

const Contact = () => {

  return (
    <>
      <div className=" bg-black-100 p-5 rounded-2xl" >
        <p className={`${styles.sectionSubText} text-center`}>
          Get in touch
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Contact.
        </h2>

        <div className=' mt-8 flex flex-wrap justify-center gap-10'>
          {contact.map((contacts) => (
            <div className='flex justify-center items-center' key={contacts.name}>
              <img src={`${contacts.icon}`} alt="" className=" xs:w-20 xs:h-20 w-14 h-14 " />
              <div className="sm:text-[18px] text-[14px] text-white tracking-wider"
                   onClick={()=> window.open(contacts.link , "_blank")}>
                    &nbsp;&nbsp; : {contacts.name}</div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");

