import './App.css';

function App() {
  return (
    <>
      {/* header */}
      <div className="Wrapper">
        <div className="Section1">
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
            <div className="box">
              <h1>Test</h1>
            </div>
            <div className="box">
              <h1>Test</h1>
            </div>
            <div className="box">
              <h1>Test</h1>
            </div>
          </div>
        </div>
        <div className="Section3">
          <h1 style={{color: 'white',}}>CountDown Timer or Countup for Testimonial</h1>
        </div> 
      </div>
      {/* footer */}
    </>
  );
}

export default App;
