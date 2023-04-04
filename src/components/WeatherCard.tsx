interface IWeatherCard {
  id: string,
  degrees: number
}

// create material ui react typescript component that will display weather details from parameter


const WeatherCard = ({id, degrees}: IWeatherCard) => {
  return (
    <div style={{backgroundColor: "grey"}}>
      <h2>{id}</h2>
      <h3>{degrees}</h3>


    </div>



  )
}

export default WeatherCard;