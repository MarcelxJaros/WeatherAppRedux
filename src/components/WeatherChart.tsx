import { useSelector } from "react-redux";
import { State } from "../state";

const WeatherChart = () => {
  const chartData = useSelector((state: State) => state.weatherdata)
  console.log('%cWeatherChart.tsx line:6 chartData', 'color: #007acc;', chartData);
  return (
    <div style={{backgroundColor: "grey"}}>
      {/* {chartData} */}
      <button onClick={() => console.log('%cWeatherChart.tsx line:10 chartData', 'color: #007acc;', chartData) }>click</button>
    </div>



  )
}

export default WeatherChart;