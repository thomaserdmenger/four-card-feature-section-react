import './App.css'
import Media from './components/Media'
import Head from './components/Head'
import {position, description, images, colors} from './data/data'

function App() {
  return (
    <>
      <Head />
      <Media pos={position} src={images} des={description} colors={colors} />
    </>
  )
}

export default App
