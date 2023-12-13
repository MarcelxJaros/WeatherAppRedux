import { Typography } from '@mui/material';
import '../../App.css';
import skydiff from '../../assets/skydiff.png';
import linkedin from '../../assets/linkedin.png';
import { blue } from '@mui/material/colors';
import CustomButton from '../../components-shared/CustomButton';
import { Link } from 'react-router-dom';

const Home = () => {
  const myColor = {
    color: blue[500],
    hover: blue[300],
  };

  return (
    <>
      <div className="home-container">
        <div className="hero-container">
          <img src={skydiff} alt="Logo" style={{ height: '240px', width: '240px' }} />
          <Typography variant="h1" component="div">
            SkyDiff
          </Typography>
        </div>
        <hr className="separate-line" />
        <div className="body-container">
          <Typography variant="body1" sx={{ textAlign: 'justify' }}>
            Stay ahead of unpredictable weather with this SkyDiff React App!
            <br />
            Never step out unprepared again. My app lets you compare today's temperature with any city's past or future weather,
            making it easy to visualize temperature trends on interactive graphs. Gain insights into temperature fluctuations
            throughout the day, helping you make well-informed clothing choices. Whether you're reminiscing about a past trip or
            planning a future adventure, my app has you covered. With just a few taps, select any date and city worldwide,
            experiencing the convenience of time travel through weather data. Join me today and stay one step ahead of Mother
            Nature. Dress appropriately for any weather, anywhere, anytime with the Temperature React App!
            <br />
            {/* <div> */}
          </Typography>
          <Link to={`/App`}>
            <CustomButton value="Try it now" mycolor={myColor} variant="contained" size="large" className="try-it-button" />
          </Link>
          <hr className="separate-line" />
          <Typography variant="body1" sx={{ textAlign: 'justify' }}>
            About me: I really enjoy working on frontend development and have a strong passion for learning about new technologies
            in the field. I've gained experience with JavaScript, React, TypeScript, and even SharePoint. I've been fortunate to
            work with these technologies and have found them quite interesting. I also have a creative side and a good sense of
            visual design, which I believe adds value to my work. I genuinely enjoy collaborating with others and being a part of
            a team. I believe that being a team player is important for producing great results and I'm always open to learning
            from my colleagues.
            <br />
            My LinkedIn profile with contact info: <br className="line-break-phone" />
            <span
              className="author-click"
              onClick={() => {
                window.open('https://www.linkedin.com/in/marcel-jaros/', '_blank');
              }}
            >
              <img className="linkedin-icon" src={linkedin} alt="Logo" />
              Marcel Jaroš
            </span>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Home;
