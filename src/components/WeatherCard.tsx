import { Card, CardMedia, Grid, Typography } from "@mui/material"
import { lightBlue } from "@mui/material/colors"

const WeatherCard = () => {
  return (
    <div style={{ display:'flex', justifyContent:'center'}}>

      <Card sx={{ minWidth: 300, width: 350, padding: 2, backgroundColor:'lightblue'}}>
        <Typography variant="h5" component="div" sx={{padding: 1}}>
          Bratislava, 14.4.2023
        </Typography>
        <img
          height="120"
          width="120"
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt="weathericon" 
          style={{ display: 'flex', margin: 'auto', marginTop: "-20px", marginBottom: "-20px" }}/>
        <Typography variant="body1">
          apparent temp: 3 °C
          {/* <br /> */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          actual temp: 2 °C <br />
          rain: 10% <br />
          wind: 2kh/h <br />

        </Typography>
      </Card>
          </div>
  )
}

export default WeatherCard