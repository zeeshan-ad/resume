import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="container">
      <article className="episode">
        <div className="episode__number">01</div>
        <div className="episode__content">
          <div className="title">Indus Net Technologies, Software Engineer (May 2022 - Present)</div>
          <div className="story">
            <p>Worked on multiple dashboards for the world's largest capsule manufacturer to monitor their plant’s day-to-day operations. Implemented Formik with Yup, used react charts to display data in the dashboard, integrated RESTful APIs using Axios, used redux toolkit for state management,  react navigation for routing. Implemented features such as  role based user authentication, user authorization, CRUD operations on master data,  made responsive designs using tailwind css, used material ui components and used third packages from npm and git for version control.</p>
            <p>Used common web app features such as hooks, states, props, code splitting using react lazy, components, virtual DOM, state management, lifecycle methods, browser APIs, HTML and CSS.</p>
            <p>Develop and maintain responsive web applications, collaborating with cross functional teams in an agile environment, diagnose and solve technical problems related to webapps,  implement high quality software solutions, pProduce quality code that is readable and maintainable by the team.</p>
            <p>Took part in other responsibilities from day one which led me to act as a team lead within the project. I assisted the PM with project hour estimations, figma design, communicated with the clients on the daily scrum call to understand requirements, guided juniors with their tasks, started writing tests for the components using react testing library, implemented sonarqube usage to ensure quality code delivery. Started learning node and SQL and built a few stored procedures and APIs.</p>
          </div>
        </div>
      </article>

      <article className="episode">
        <div className="episode__number">02</div>
        <div className="episode__content">
          <div className="title">Distronix, Software Engineer (July 2021 - May 2022)</div>
          <div className="story">
            <p>Worked on  more than 15 dashboards for the state government and for the company's internal use</p>
            <p>Implemented JWT authentication in the dashboards.</p>
            <p>Worked with Google Map APIs to implement maps on the dashboard and to live track vehicles and IoT devices using MQTT websocket.</p>
            <p>Identified and created Key Performance Indicators on the dashboard.</p>
            <p>Implemented data grids, charts, and graphs on the dashboard for analysis of the IoT devices.</p>
            <p>Worked with the UX/UI team to convert requirements into design leads.</p>
            <p>Implemented and built several functional components on react.</p>
            <p>Implemented redux toolkit for state management.</p>
            <p>Worked with RESTful APIs. Used get, post, put, and delete methods.</p>
            <p>Made responsive designs with the use of CSS and tailwind.css.</p>
            <p>Used NPM packages for quick development.</p>
            <p>Worked on React Native application to fix bugs with existing features.</p>
            <p>Integrated react-navigation in both react and react native.</p>
            <p>Implemented API endpoints using Axios in both react and react native platforms to implement CRUD operations.</p>
            <p>Used other features of React framework like hooks, states, functional components, JSX and virtual DOM.</p>
            <p>Built applications on both javascript and typescript.</p>
            <p>Used MQTT sockets to get live data from IoT devices.</p>
          </div>
        </div>
      </article>

      <article className="episode">
        <div className="episode__number">03</div>
        <div className="episode__content">
          <div className="title">Wipro Technologies, Project Engineer (May 2019 - July 2021)</div>
          <div className="story">
            <p>Attended training on web development - Frontend and Backend</p>
            <p>Worked on HTML, CSS, and javascript on building the front end.</p>
            <p>Used Bootstrap library during development.</p>
            <p>Started working on React.js with CSS and redux toolkit. </p>
            <p>Built front-end components, integrated REST APIs, and worked on the responsiveness of the application.</p>
            <p>Used Material UI and NPM package manager for fast development.</p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Skills