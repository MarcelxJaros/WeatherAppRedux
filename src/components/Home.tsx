import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'

const Home = () => {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const { increment, decrement, reset} = bindActionCreators(actionCreators, dispatch)
  const state = useSelector((state: State) => state.count)

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h3 > redux count is {state} </h3>
        <button onClick={() => increment(1)}>+</button>
        <button onClick={() => decrement(1)}>-</button>
        <button onClick={() => reset()}>0</button>
      </div>
    </>

  )
}

export default Home;