
import ImageGrid from './ImageGrid'

const hobbies = [
  {
    name : "comics",
    content: "Reading and collecting comics",
    path : 'IMG_9058.PNG'
  },
  {
    name : "exercise",
    content: "working out",
    path : 'IMG_0866.JPG'
  },
  {
    name : "games",
    content: "playing games",
    path : "IMG_2243.JPG"
  }, 
  {
    name : "coding",
    content : "and of course ... coding",
    path : "IMG_8550.JPG"
  }
]


const Hobbies = () => {
  return <ImageGrid hobbies={hobbies}/>
}

export default Hobbies