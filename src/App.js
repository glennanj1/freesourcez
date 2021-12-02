import './App.css';
import Grow from '@mui/material/Grow';
import React, {useState, useEffect} from 'react';
import  BasicSpeedDial from './components/SpeedDial.js';


function App() {
  
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
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
  };

  const box = ( 
              <div className="box">
                <h1>Test</h1>
              </div> 
  )


  useEffect(() => {
     window.addEventListener('scroll', handleChange);
     return () => {
        window.removeEventListener("scroll", handleChange);
      };
  }, []);


  

  return (
    <>
      <div className="Wrapper">
        <div className="Section1">
          <div className="nav">
            <div className="nav-item">
              <a href="#">Home</a>
            </div>
            <div className="nav-item">
              <a href="#">Events</a>
            </div>
            <div className="nav-item">
              <a href="#">About Us</a>
            </div>
          </div>
          <div className="container">
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
        <div className="Section2">
          <div className="row_container">
            <Grow in={checked}>
              {box}
            </Grow>
            <Grow in={checked}>
              {box}
            </Grow>
            <Grow in={checked}>
              {box}
            </Grow>
          </div>
        </div>
        <div className="Section3">
          <h1 style={{color: 'white'}}>CountDown Timer or Countup for Testimonial</h1>
        </div> 
        <div className="dial">
          <BasicSpeedDial />    
        </div>
      </div>
      {/* footer */}
    </>
  );
}

export default App;


