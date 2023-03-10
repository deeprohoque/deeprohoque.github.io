import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am currently a fourth year undergraduate at Carnegie Mellon University 
    earning my B.S. in Statistics and Machine Learning with a minor in Computer Science. 
    Through my coursework, I have developed a solid foundation in 
    data structures, algorithms, computer systems, and 
    statistical methods for data science and machine learning. <br className='sm:block hidden' />
    <br className='sm:block hidden' />

    As an engineer, my mission is to use my technical 
    expertise and problem-solving skills to develop 
    innovative software solutions that meet the needs of users and organizations. 
    I am committed to delivering high-quality code that is scalable, efficient, and maintainable,
     and to continually improving my skills and knowledge through ongoing learning and collaboration
     with others. I strive to work synergistically with cross-functional teams, communicate effectively, 
      and deliver results that exceed expectations.
      Through my work, I aim to create intelligent software solutions that drive innovation and
      create value in the digital world. <br className='sm:block hidden' />
      <br className='sm:block hidden' />

    I will be joining Slack as a full-time software engineer in August 2023. 


      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about")