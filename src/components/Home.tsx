import { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'
import getWeather from './GetWeatherData'
import IWeatherData from '../models/IWeatherData'
import WeatherCard from './WeatherCard'

const Home = () => {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  const { increment, decrement, reset, getWeatherData } = bindActionCreators(actionCreators, dispatch)
  const reduxCount = useSelector((state: State) => state.count)
  const reduxWeather = useSelector((state: State) => state.weatherdata)

  const bratislava = {lat: 48.148598, lon: 17.107748, timezone: "GMT", id: "Bratislava"}
  const [weatherData, setWeatherData] = useState(null)

  let locationProps = {lat: 52.52, lon: 13.41, timezone: "GMT"}
  let currentDateTime = Date()
  let test = {id: "Bratislava", degrees: 3.1}
  const [loading, setLoading] = useState(false);

  console.log(currentDateTime)

  // getWeather(bratislava).then((result: { data: any }) => {console.log("Bratislava weather:", result.data);)
  const handleClick = () => {
    setLoading(true)
    getWeather(bratislava).then((result: { data: any }) => {console.log("Bratislava weather:", result.data); setWeatherData(result.data); setLoading(false)})
  }
    

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h3> redux count is {reduxCount} </h3>
        <button onClick={() => increment(1)}>+</button>
        <button onClick={() => decrement(1)}>-</button>
        <button onClick={() => reset()}>0</button>
        <button onClick={() => handleClick()}>get weather</button><hr />
        {!loading ? <WeatherCard {...test} /> : "loading"}
      </div>
    </>

  )
}

export default Home;