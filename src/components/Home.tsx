import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>

  )
}

export default Home;