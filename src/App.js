import './App.css'
import Media from './components/Media'
import Head from './components/Head'
import data from './data/data'

function App() {
  return (
    <>
      <Head />
      <Media data={data} />
    </>
  )
}

export default App
