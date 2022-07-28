import React from "react";

const Portfolio = () => {
    return (
      <section class="portfolio" id="portfolio">
      <div class="heading">
        <h3>Portfolio</h3>
        <h2>My Amazing Work</h2>
        <p>Most common methods for designing websites that work well on desktop is <br /> responsive and adaptive design</p>
      </div>
  
      <div class="portfolio-content">
        <div class="col">
          <img src="img/work1.jpg" />
          <div class="layer">
            <h3>Web Design</h3>
            <h5>Popup</h5>
          </div>
        </div>
  
        <div class="col">
          <img src="img/work2.jpg" />
          <div class="layer">
            <h3>Web Development</h3>
            <h5>Popup</h5>
          </div>
        </div>
  
        <div class="col">
          <img src="img/work3.jpg" />
          <div class="layer">
            <h3>DevOps</h3>
            <h5>Popup</h5>
          </div>
        </div>
  
        <div class="col">
          <img src="img/work4.jpg" />
          <div class="layer">
            <h3>Graphic Design</h3>
            <h5>Popup</h5>
          </div>
        </div>
  
        <div class="col">
          <img src="img/work5.jpg" />
          <div class="layer">
            <h3>Fronntend</h3>
            <h5>Popup</h5>
          </div>
        </div>
  
        <div class="col">
          <img src="img/work6.jpg" />
          <div class="layer">
            <h3>Backend</h3>
            <h5>Popup</h5>
          </div>
        </div>
  
      </div>
    </section>
    )
  };
  
  export default Portfolio;