
import ImageGrid from './ImageGrid'
import Comics from '../images/IMG_9058.PNG'
import Excercise from '../images/IMG_0866.JPG'
import Games from '../images/IMG_2243.JPG'
import Coding from '../images/IMG_8550.JPG'

const hobbies = [
  {
    name : "Comics",
    content: "I love reading and collecting comics. I am a huge DC fan, especially batman.",
    path : Comics
  },
  {
    name : "Exercise",
    content: "I like to weightlift and do cardio. My favorite sport to play is dodgeball.",
    path : Excercise
  },
  {
    name : "Games",
    content: "I have been playing video games ever since I was 4 years old. I own several retro consoles.",
    path : Games
  }, 
  {
    name : "Coding",
    content : "In my free time I love learning new technologies and programming languages.",
    path : Coding
  }
]

const Hobbies = () => {
  return <ImageGrid data={hobbies}/>
}

export default Hobbies