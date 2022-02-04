import * as React from "react";
import { useState } from "react";
import {
  Button,
  Stack,
  Grid,
  Divider,
  Box,
  IconButton,
  Link,
  Accordion
} from "@mui/material";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Hobbies from './components/Hobbies'
import ArticleIcon from '@mui/icons-material/Article';
import  GitHubIcon  from "@mui/icons-material/GitHub";
import  LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram'



// 1. import `ChakraProvider` component

function App() {
  const [currentView, setCurrentView] = useState("default");
  const views = {
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />,
    about: <About />,
    default: <div></div>,
  };
  const today = new Date();
  const hour = today.getHours();
  const time_period =
    hour >= 0 && hour < 12
      ? "morning"
      : hour >= 13 && hour < 18
      ? "afternoon"
      : "evening";
  // 2. Use at the root of your app
  return (
    <div>
      <body>
        <img src="me-rounded.png" alt="me" />
        <h1>Good {time_period}! I'm Corey Fuller.</h1>
        <p>
          <strong> </strong>
        </p>
        <p>
          👋 Hi! I am a full stack software developer with emphases in business
          operations, devops, and cloud computing.
        </p>
        <p>
          I love learing about new technologies and building creative solutions
          to complex problems.
        </p>
        <h3>Skills</h3>
        <Skills/>
        <h2>Projects</h2>
        <h4>Click the card to open the source code!</h4>
        <Projects/>
        <h2>Hobbies</h2>
        <Hobbies/>
         <Button
          variant="link"
          startIcon={<ArticleIcon/>}
          href="Current Resume, Corey Fuller.pdf"
          target="_blank"
        >Resume</Button>
        <Button
          variant="link"
          startIcon={<GitHubIcon/>}
          href="https://github.com/coreyFuller" target="_blank"
        >Github</Button>
        <Button
          variant="link"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/corey-fuller-/" target="_blank"
        >Linkedin</Button>
        <Button variant="link"
          startIcon={<InstagramIcon />}
          href="https://www.instagram.com/cjfuller_official/"
          target='_blank'
        >Instagram</Button>
      </body>
      <footer>© Corey Fuller, 2022</footer>
    </div>
  );
}

export default App;
