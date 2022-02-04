
import ImageGrid from './ImageGrid'

const hobbies = [
  {
    name : "Comics",
    content: "I love reading and collecting comics. I am a huge DC fan, especially batman.",
    path : '%PUBLIC_URL%/IMG_9058.PNG'
  },
  {
    name : "Exercise",
    content: "I like to weightlift and do cardio. My favorite sport to play is dodgeball.",
    path : '%PUBLIC_URL%/IMG_0866.JPG'
  },
  {
    name : "Games",
    content: "I have been playing video games ever since I was 4 years old. I own several retro consoles.",
    path : "%PUBLIC_URL%/IMG_2243.JPG"
  }, 
  {
    name : "Coding",
    content : "In my free time I love learning new technologies and programming languages.",
    path : "%PUBLIC_URL%/IMG_8550.JPG"
  }
]

const Hobbies = () => {
  return <ImageGrid data={hobbies}/>
}

export default Hobbies