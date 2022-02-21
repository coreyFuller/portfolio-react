import React from "react";
import ImageGrid from "./ImageGrid";
import DataViz  from '../images/Screenshot 2022-02-03 205835.png'
import SocialMedia  from '../images/Screenshot 2022-02-03 211311.png'
import Eleos  from '../images/Screenshot 2022-02-03 205455.png'
import CUConnect  from '../images/IMG_1190.jpg'


const projects = [
  {
    name : "Video Game Data Visualization",
    content: `React application that uses D3.js to visualize and examine the different factors that affect the sales of video games across
    multiple regions and generations. Styled with Material UI and deployed through AWS.`,
    path : DataViz,
    source : "https://github.com/coreyFuller"
  },
  {
    name : "Social Media Data Parser",
    content: `Python application that analyzes personal social media metadata requested from Snapchat, Instagram, and
    TikTok and reports information not immediately available through the platform apps`,
    path : SocialMedia,
    source : "https://github.com/coreyFuller"
  },
  {
    name : "Eleos Tech App Integration Service",
    content: `Implementation of Eleos Technologies Client Web Service using Express and Postgres. Deployed through Heroku.`,
    path : Eleos,
    source : ""
  }, 
  {
    name : "CU-Connect",
    content : `A program that used to connect Clemson University computer science students taking similar classes and have similar hobbies. Made at CUhackit, Clemson's 24 hour hackathon.`,
    path : CUConnect,
    source : "https://github.com/coreyFuller"
  }
]

const Projects = (props) => {
  return (
    <div>
      <ImageGrid data={projects}/>
    </div>
  )
}

export default Projects