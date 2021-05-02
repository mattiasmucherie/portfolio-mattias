import React from "react"
import { Project } from "../App"

interface CardProps {
  proj: Project
}
const Card: React.VFC<CardProps> = ({ proj }) => {
  return (
    <div className="card" key={proj.title}>
      <h2>{proj.title}</h2>
      <img src={proj.img} alt={proj.title} className="card-image" />
      <p>{proj.description}</p>
      {proj.demo && (
        <div className="card-link">
          <a href={proj.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        </div>
      )}
      {proj.sourceCode && (
        <div className="card-link">
          <a href={proj.sourceCode} target="_blank" rel="noreferrer">
            Source Code
          </a>
        </div>
      )}
    </div>
  )
}

export default Card
