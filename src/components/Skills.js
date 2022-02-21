import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  ListItemText,
  Box,
  Stack,
  Card,
  CardContent,
  List,
  ListItem,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <Stack direction="row" spacing={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" align="center">Programming</Typography>
          <Typography align="center" variant="subtitle2">
          <List>
            <ListItem>
              <ListItemText>
                Coding: C#, Javascript, Java, Python, C, C++
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Scripting: Bash, PowerShell</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Database Management: MySQL, SQL Server, Postgres, DynamoDB
              </ListItemText>
            </ListItem>
          </List>
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardContent>
        <Typography variant="h5" align="center">Frameworks and Libraries</Typography>
        <Typography align="center" variant="subtitle2">
            <List>
              <ListItem>
                <ListItemText>
                  Frontend: React, Angular, D3.js, Material UI, WPF
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Backend: .Net (ASP, Core, Framework), Express
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Testing: Pester, JUnit, NUnit</ListItemText>
              </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardContent>
        <Typography variant="h5" align="center">Technologies and Tools</Typography>
        <Typography align="center" variant="subtitle2">
          <List>
            <ListItem>
              <ListItemText>
                Cloud: AWS, Heroku, Google Cloud Platform
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                CI/CD: Git, CircleCI, Azure Devops, Docker Visual Studio,
                Microsoft Office Suite
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Development and Other Tools: Visual Studio, Postman, Linux,
                Windows, Microsoft Office Suite
              </ListItemText>
            </ListItem>
          </List>
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
