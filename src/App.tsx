import './App.css'
import DrawerAppBar from './components-shared/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Historical from './pages/Historical/Historical'

function App() {

  return (
    <div >
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/App" element={<Historical />}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
