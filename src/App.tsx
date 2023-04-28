import './App.css'
import DrawerAppBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Historical from './components/Historical/Historical'

function App() {


  return (
    <div >
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/App" element={<Historical />}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
