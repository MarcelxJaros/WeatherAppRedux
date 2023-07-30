import { Typography } from '@mui/material';
import '../../App.css'
import skydiff from '../../assets/skydiff.png'

const Home = () => {

  return (
    <>
    {/* <div className='home-container'> */}
      <div className="hero-container">

        <img src={skydiff} alt="Logo" style={{ height: "240px", width: "240px" }} />
        <Typography variant="h1" component="div" sx={{ padding: 1 }}>SkyDiff</Typography>
      </div>
      <div className="body-container">
      <Typography variant="body1" sx={{ padding: 1, textAlign: 'justify' }}>
      <div>Stay ahead of unpredictable weather with this SkyDiff React App!</div>
      <div>Never step out unprepared again. My app lets you compare today's temperature with any city's past or future weather, making it easy to visualize temperature trends on interactive graphs.
      Gain insights into temperature fluctuations throughout the day, helping you make well-informed clothing choices. Whether you're reminiscing about a past trip or planning a future adventure, my app has you covered.</div>
      <div>With just a few taps, select any date and city worldwide, experiencing the convenience of time travel through weather data. Join me today and stay one step ahead of Mother Nature. Dress appropriately for any weather, anywhere, anytime with the Temperature React App!</div>
      </Typography>
        
      </div>
    {/* </div> */}
    </>

  )
}

export default Home;