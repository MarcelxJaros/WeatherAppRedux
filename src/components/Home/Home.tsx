import { Button, ButtonProps, Typography, styled } from '@mui/material';
import '../../App.css'
import skydiff from '../../assets/skydiff.png'
import { blue, pink } from '@mui/material/colors';
import CustomButton from '../Historical/CustomButton';

const Home = () => {

  const myColor = {
    color: blue[500], hover: blue[300]
  }

  return (
    <>
    <div className='home-container'>
      <div className="hero-container">

        <img src={skydiff} alt="Logo" style={{ height: "240px", width: "240px" }} />
        <Typography variant="h1" component="div" sx={{ padding: 1 }}>SkyDiff</Typography>
      </div>
      <div className="body-container">
      <Typography variant="body1" sx={{ padding: 1, textAlign: 'justify' }}>
      Stay ahead of unpredictable weather with this SkyDiff React App!<br />
      Never step out unprepared again. My app lets you compare today's temperature with any city's past or future weather, making it easy to visualize temperature trends on interactive graphs.
      Gain insights into temperature fluctuations throughout the day, helping you make well-informed clothing choices. Whether you're reminiscing about a past trip or planning a future adventure, my app has you covered.
      With just a few taps, select any date and city worldwide, experiencing the convenience of time travel through weather data. Join me today and stay one step ahead of Mother Nature. Dress appropriately for any weather, anywhere, anytime with the Temperature React App!<br />
      {/* <div> */}
      <CustomButton value="Try it now" myColor={myColor} variant="contained" size="large" />

      </Typography>
        
      </div>
    </div>
    </>

  )
}

export default Home;