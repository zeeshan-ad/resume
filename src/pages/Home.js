import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Skills from '../components/Skills';
import FlowingText from '../components/FlowingText';
import { motion, useScroll, useIsPresent } from "framer-motion";
import Edu from '../components/Edu';
import Footer from '../components/Footer';
import Fade from 'react-reveal/Fade';

const Home = () => {
  const { scrollYProgress } = useScroll();

  const isPresent = useIsPresent();
  const Tskills = [
    'Proficiency in modern JavaScript (ES6+), including features like arrow functions, classes, modules, destructuring, template literals, closures, event loop, scopes and execution context',
    'Experience with asynchronous programming, including async/await, promises',
    'Expertise in building reusable and maintainable React components using functional and JSX',
    'Experience with React Hooks (useState, useEffect etc.) and Redux toolkit for state management',
    'Experience with React Router for client-side routing and navigation',
    'Strong knowledge of HTML5 semantics and best practices',
    'Proficiency in CSS3, including features like Flexbox',
    'Expertise in creating responsive and adaptive designs using media queries and mobile-first methodologies',
    'Familiarity with popular CSS frameworks like Bootstrap or Tailwind CSS or Material UI',
    'Knowledge of typescript and prop-types in react',
    'Practicing Agile software development methodologies',
    'Experience with RESTful APIs and Axios',
    'Experience with GIT for version control',
    'Familiarity with Sonarqube',
    'Familiarity with TDD and writing tests using Jest and react testing library',
    'Browser dev tools and browser APIs',
  ];
  const Sskills = ['Strong Communication',
    'Attention to detail',
    'Teamwork',
    'Self-management',
    'Team-management',
    'Highly Motivated'
  ]
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
      <Fade bottom>
        <div>
          <p className="text-xl font-bold my-2 mx-5 text-indigo-700">Technical Skills</p>
          <div className='flex flex-row overflow-scroll pr-5'>
            {Tskills.map((skill, index) => (
              <div key={index} className='whitespace-nowrap text-indigo-700 border-2 ml-5 px-5 py-3 border-indigo-700'>{skill}</div>
            ))}
          </div>
        </div>
      </Fade >
      <Fade bottom>
        <div>
          <p className="text-xl font-bold my-2 mx-5 text-indigo-700">Soft Skills</p>
          <div className='flex flex-row overflow-scroll pr-5'>
            {Sskills.map((skill, index) => (
              <div key={index} className='whitespace-nowrap text-indigo-700 border-2 ml-5 px-5 py-3 border-indigo-700'>{skill}</div>
            ))}
          </div>
        </div>
      </Fade >
      <Fade bottom>
        <Footer />
      </Fade>
    </>
  )
}

export default Home;