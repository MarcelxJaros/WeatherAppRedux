import './App.css'
import DrawerAppBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {


  return (
    <div >
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes> 
      </BrowserRouter>

    </div>
  )
}

export default App
