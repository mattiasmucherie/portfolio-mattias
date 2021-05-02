import React from "react"
import "./App.css"
import BeenMap from "./assets/pictures/been-map.png"
import SnakeCalendar from "./assets/pictures/snake-calendar.png"
import ButtonComp from "./assets/pictures/button-component.png"
import MF from "./assets/pictures/microfronts.png"
import ScaniaTruck from "./assets/pictures/scania-truck-online.png"
import MattiasPortrait from "./assets/pictures/portrait.jpg"
import Card from "./components/Card"

export interface Project {
  title: string
  description: string
  img: string
  demo?: string
  sourceCode?: string
}
const projects: Project[] = [
  {
    title: "Been Map",
    description:
      "A map where you can fill in where you have been. Saves to localstorage. Built with React, Typescript and styled-components.",
    img: BeenMap,
    demo: "https://elated-bassi-347395.netlify.app/",
    sourceCode:
      "https://github.com/mattiasmucherie/been-map/tree/master/client",
  },
  {
    title: "Button Component",
    description:
      "A reusable button component following a figma design. Built with React, Typescript and styled-components",
    img: ButtonComp,
    demo: "https://peaceful-turing-ae0694.netlify.app/",
    sourceCode: "https://github.com/mattiasmucherie/button-comp",
  },
  {
    title: "Microfronts",
    description:
      "A example of microfrontends (This was more of a technical project, the content is placeholder). Built with webpack 5 module federation. Hosted and handled on AWS.",
    img: MF,
    sourceCode: "https://github.com/mattiasmucherie/dashboard-project",
    demo: "https://d3uobd61j963jo.cloudfront.net/",
  },
  {
    title: "Trucks online",
    description:
      "Shows if a truck is online or not. Built with React and Express.",
    img: ScaniaTruck,
    sourceCode: "https://github.com/mattiasmucherie/devtestKSEO",
    demo: "https://arcane-fjord-86837.herokuapp.com/",
  },
  {
    title: "Snake Calendar",
    description:
      "A Calendar where you can track progression day by day. Built with React/Redux and Typescript. Firebase database and function used as backend.",
    img: SnakeCalendar,
    sourceCode: "https://github.com/MLNProjects/SnakeCalendar",
    demo: "https://snakecalender.firebaseapp.com/#/",
  },
]

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a className="nav-link" href="/">
            mattias mucherie
          </a>
        </div>
        <div className="portrait">
          <img src={MattiasPortrait} alt="Mattias portrait" />
        </div>
      </nav>
      <main>
        <div className="container">
          <p className="intro-text">
            Welcome to my portfolio! I am Mattias Mucherie - currently a
            frontend developer for Scania in Stockholm. My expertise is
            currently React with Typescript with accesories however I am always
            looking to expand my skill set.
            <br />
            Other then coding, my other passions include rugby, cycling and
            painting.
            <br /> <br />
            Contact me via <a href="mailto:mattias.mucherie@gmail.com">
              email
            </a>{" "}
            or via{" "}
            <a
              href="https://www.linkedin.com/in/mattias-mucherie/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="container" id="projects">
          <h1>projects</h1>
          <div className="card-container">
            {projects.map((proj) => (
              <Card proj={proj} key={proj.title} />
            ))}
          </div>
        </div>
      </main>
      <footer>
        Mattias Mucherie 2021 -{" "}
        <a href="https://google.com" target="_blank" rel="noreferrer">
          Source
        </a>
      </footer>
    </>
  )
}

export default App
