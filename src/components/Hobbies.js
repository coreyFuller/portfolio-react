
import ImageGrid from './ImageGrid'
import Comics from '../images/IMG_9058.png'
import Excercise from '../images/IMG_0866.jpg'
import Games from '../images/IMG_2243.jpg'
import Coding from '../images/IMG_8550.jpg'
import {Stack, Typography, Card, CardContent, CardMedia} from '@mui/material'
const hobbies = [
  {
    name : "Comics",
    content: "I love reading and collecting comics. I am a huge DC fan, especially batman.",
    path : Games
  },
  {
    name : "Exercise",
    content: "I like to weightlift and do cardio. My favorite sport to play is dodgeball.",
    path : Excercise
  },
  {
    name : "Games",
    content: "I have been playing video games ever since I was 4 years old. I own several retro consoles.",
    path : Comics
  }, 
  {
    name : "Coding",
    content : "In my free time I love learning new technologies and programming languages.",
    path : Coding
  }
]

const Hobbies = () => {
  return (
    <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
  >
    {hobbies.map((h) => {
      return (
        <Card sx={{ width : 345, maxHeight : 330 }}>
            <CardMedia component="img" height="200" image={h.path} />
            <CardContent>
              <Typography gutterBottom variant="h6" align="center">
                {h.name}
              </Typography>
            </CardContent>
        </Card>
      );
    })}
  </Stack>
  )
}

export default Hobbies