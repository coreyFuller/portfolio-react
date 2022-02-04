import React from "react";
import ImageGrid from "./ImageGrid";

const projects = [
  {
    name : "Video Game Data Visualization",
    content: `React application that uses D3.js to visualize and examine the different factors that affect the sales of video games across
    multiple regions and generations. Styled with Material UI and deployed through AWS using AWS Amplify and S3.
    `,
    path : "%PUBLIC_URL%/Screenshot 2022-02-03 205835.png",
    source : "https://github.com/CPSC-4030-G4/final-visualization"
  },
  {
    name : "Social Media Data Parser",
    content: `Python application that analyzes personal social media metadata requested from Snapchat, Instagram, and
    TikTok and reports information not immediately available through the platform apps, released as open source packages.`,
    path : '%PUBLIC_URL%/Screenshot 2022-02-03 211311.png',
    source : "https://github.com/coreyFuller/Social-Media-Data-Parser"
  },
  {
    name : "Eleos Tech App Integration Service",
    content: `Implementation of Eleos Technologies Client Web Service using Express and Postgres. Deployed through Heroku.`,
    path : '%PUBLIC_URL%/Screenshot 2022-02-03 205455.png',
    source : 'https://github.com/coreyFuller/eleostech-demo-service'
  }, 
  {
    name : "CU-Connect",
    content : `A program that used to connect Clemson University computer science students taking similar classes and have similar hobbies. Made at CUhackit, Clemson's 24 hour hackathon.`,
    path : "%PUBLIC_URL%/IMG_1190.JPG",
    source: 'https://github.com/coreyFuller/ClemsonU-Connect'
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