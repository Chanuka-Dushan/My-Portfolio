import { FaGraduationCap, FaCode } from "react-icons/fa"
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'
const About = () => {

  const isMobile = window.innerWidth <= 768;
  const containerMotion = isMobile ? "hidden" : "show";

  return (

    <>
      <motion.div
        id="about"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={containerMotion}
        viewport={{ once: false, amount: 0.7 }}
        className="lg:h-96 my-28 grid grid-cols-3 gap-4 md:pt-0 lg:pt-20">
         <div
    className='
      md:col-span-2 col-span-3 
      border-2 rounded-xl border-fuchsia-300
      md:order-1 order-2 grid place-items-center md:place-items-start
      px-6 py-6 2xl:text-3xl tracking-wide text-center md:text-justify
    '>
    <div className='icon-container text-4xl md:text-5xl text-left md:text-left my-3'>
            <FaCode />
          </div>
    Hi, I'm Dushan Chanuka. I am a second year student at the Sri Lanka Institute of Information Technology. I prefer mobile application development and full stack development and I am currently seeking an internship.
    <br />
    <div className='icon-container text-4xl md:text-5xl text-left md:text-left my-3'>
            <FaGraduationCap />
          </div>
    Education-wise, I am pursuing a Bachelor's degree in Information Technology at SLIIT. I am passionate about learning new technologies and I am always looking for new challenges.
  </div>
        <motion.div
          id="about-title"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='md:col-span-1 col-span-3 md:order-2 order-1 grid place-items-center'>
          <span className='text-3xl md:text-4xl lg:text-5xl 2xl:text-8xl mb-5 font-semibold'>
            About Me
          </span>
        </motion.div>
      </motion.div>
    </>

  )
}

export default About