import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {List,  ListItem , ListItemText, Box} from '@mui/material'
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <Box sx={{
      width: "50vw"
    }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Programming</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Coding => C# ◾ Javascript ◾ Java ◾  Python ◾ C ◾ C++
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Scripting => Bash ◾ PowerShell
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Database Management => MySQL ◾  SQL Server ◾ Postgres ◾  DynamoDB
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography>Frameworks and Libaries</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
              <ListItem>
                <ListItemText>
                  Frontend => React ◾ Angular ◾ D3.js ◾ MUI
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Backend => .Net (ASP, Core, Framework) ◾  Express
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Testing => Pester ◾ JUnit◾  NUnit
                </ListItemText>
              </ListItem>
              </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography>Technologies and Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
              <ListItem>
                <ListItemText>
                Git ◾  AWS ◾  Docker ◾  Visual Studio ◾ Microsoft Office Suite
                </ListItemText>
              </ListItem>
              </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
