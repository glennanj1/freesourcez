import './App.css';
import Grow from '@mui/material/Grow';
import React, {useState, useEffect, useCallback} from 'react';
import BasicSpeedDial from './components/SpeedDial.js';
import Footer from './components/Footer.js';
import Filler from './container/Filler.js';
import video from './images/water.mp4';
import video2 from './images/street.mp4';
import video3 from './images/street2.mp4';


function App() {
  
  const [checked, setChecked] = useState(false);

  const box1 = ( 
    <div className="box">
      <h1>Test</h1> 
      <video autoPlay loop muted controls>
        <source src={video} type="video/mp4"/>
      </video>
    </div> 
  )

  const box2 = (
    <div className="box">
      {/* <h1>Test2</h1> */}
      <video autoPlay loop muted controls>
        <source src={video2} type="video/mp4" />
      </video>
    </div>
  )
  
  const box3 = (
    <div className="box">
      {/* <h1>Test2</h1> */}
      <video autoPlay loop muted controls>
        <source src={video3} type="video/mp4" />
      </video>
    </div>
  )

  const handleChange = useCallback(() => {
    //setChecked((prev) => !prev);
    console.log('scrolling' + window.scrollY)
    let position = (window.scrollY);
    console.log(position);
    if (position >= 680 && position <= 1600) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    console.log(checked);
  }, [checked]);

  useEffect(() => {
     window.addEventListener('scroll', handleChange);
     return () => {
        window.removeEventListener("scroll", handleChange);
      };
  }, [handleChange]);


  

  return (
    <>
      <div className="Wrapper">
        <div className="Section1">
          {/* <div className="nav">
            <div className="nav-item">
              <a href="#">Home</a>
            </div>
            <div className="nav-item">
              <a href="#">Events</a>
            </div>
            <div className="nav-item">
              <a href="#">About Us</a>
            </div>
          </div> */}
          <div className="container wow bounceInUp">
            <div className="container_heading">
              <h1>Free Sourcez</h1>
            </div>
            <div className="container_subheading">
              <h2>
                A place to share your knowledge with the world.
              </h2>
            </div>
            <div className="container_sections">
              Testimonial Carousel
            </div>
          </div>
        </div>
        <Filler />
        <div className="Section2">
          <div className="row_container">
            <Grow in={checked}>
              {box1}
            </Grow>
            <Grow in={checked}>
              {box2}
            </Grow>
            <Grow in={checked}>
              {box3}
            </Grow>
          </div>
        </div>
        <Filler />
        <div className="Section3">
          <h1 style={{color: 'white'}}>Count Up </h1>
        </div> 
        <div className="dial">
          <BasicSpeedDial />    
        </div>
      </div>
      <Filler />
      <Footer />
    </>
  );
}

export default App;


