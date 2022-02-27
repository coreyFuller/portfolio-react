import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Me from "./images/74902091_563635384434439_8615907134565295619_n.jpg";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import {
  Typography,
  Box,
  Stack,
  Grid,
  Card,
  CardMedia,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { ContactSupportOutlined } from "@mui/icons-material";

const MainPage = (props) => {
  const today = new Date();
  const hour = today.getHours();
  const time_period =
    hour >= 6 && hour < 12
      ? "morning"
      : hour > 12 && hour < 19
      ? "afternoon"
      : "evening";

  const [jod, setJod] = useState(null);
  const [view, setView] = useState("projects");
  const views = {
    hobbies: <Hobbies />,
    skills: <Skills />,
    projects: <Projects />,
  };

  const changeView = (event, value) => setView(value);

  useEffect( async() => {
    fetch("https://api.jokes.one/jod", { accept: "application/json" })
      .then((response) => {
        response
          .json()
          .then((body) => {
            console.log(body);
            setJod(body);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Stack alignItems="center">
      <Typography variant="h2" align="center" sx={{ marginBottom: 2 }}>
        Good {time_period}! I'm Corey Fuller.
      </Typography>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" image={Me} height="280" alt="me" />
        </Card>
      <Stack direction="row" sx={{ margin: 2 }}>
        <Button
          variant="link"
          startIcon={<GitHubIcon />}
          href="https://github.com/coreyFuller"
          target="_blank"
        >
          Github
        </Button>
        <Button
          variant="link"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/corey-fuller-/"
          target="_blank"
        >
          Linkedin
        </Button>
        <Button
          variant="link"
          startIcon={<InstagramIcon />}
          href="https://www.instagram.com/cjfuller_official/"
          target="_blank"
        >
          Instagram
        </Button>
      </Stack>
      <Typography variant="h5" align="center">
        👋 Hi! I am a full stack software developer with emphases in business
        operations, devops, and cloud computing.
      </Typography>
      <Typography variant="h5" align="center">
        I love learning about new technologies and building creative solutions
        to complex problems.
      </Typography>
      <br />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Typography
          sx={{ padding: 1, marginBottom: 2}}
          variant="body1"
          align="center"
          noWrap={true}
        >
          Check out below to get to know me some more!
        </Typography>
        <ArrowDownwardIcon />
      </Stack>
      <Tabs centered onChange={changeView} value={view} sx={{ margin: 1 }}>
        <Tab label="hobbies" value="hobbies" />
        <Tab label="projects" value="projects" />
        <Tab label="skills" value="skills" />
      </Tabs>
      {views[view]}
      <footer>© Corey Fuller, 2022</footer>
    </Stack>
  );
};

export default MainPage;
