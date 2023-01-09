import './App.css'
import DrawerAppBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk" 
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

// actions
const increment = () => {
  return {
    type: "INCREMENT"
  }
}
const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

// reducer


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));
// let store = createStore(rootReducer, applyMiddleware(thunk));
// let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// log
store.subscribe(() => console.log(store))

// dispatch
store.dispatch(increment)


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
