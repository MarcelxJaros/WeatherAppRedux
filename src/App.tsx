import './App.css'
import DrawerAppBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(thunk, composeEnhancers),
  
//   // other store enhancers if any
// ));

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
