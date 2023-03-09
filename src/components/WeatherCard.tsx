interface IWeatherCard {
  id: string,
  degrees: number
}


const WeatherCard = ({id, degrees}: IWeatherCard) => {
  return (
    <div style={{backgroundColor: "grey"}}>
      <h2>{id}</h2>
      <h3>{degrees}</h3>


    </div>



  )
}

export default WeatherCard;