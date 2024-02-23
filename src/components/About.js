import React from 'react'
import {
  Link
} from "react-router-dom";
import { animate, motion} from "framer-motion"

const About = () => {
  return (
    <motion.div className='HomePage' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,transition:{duration:0.1}}}>
      <div className='container'>
      <img src='https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JpbGxlZCUyMFNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D' />
      </div>
    </motion.div>
  )
}

export default About
