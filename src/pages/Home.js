import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Skills from '../components/Skills';
import FlowingText from '../components/FlowingText';
import { motion, useScroll } from "framer-motion";
import Edu from '../components/Edu';
import Footer from '../components/Footer';
import Fade from 'react-reveal/Fade';

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Fade bottom>
        <Nav />
        <Hero />
      </Fade>
      <Fade bottom>
        <FlowingText text={'WORK •'} />
        <Skills />
      </Fade>
      <div className='pt-12'></div>
      <Fade bottom>
        <FlowingText text={'EDUCATION •'} />
        <Edu />
      </Fade>
      <Footer />
    </>
  )
}

export default Home;