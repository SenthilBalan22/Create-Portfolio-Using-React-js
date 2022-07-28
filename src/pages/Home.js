import React from 'react';

function Home() {
  return (
    <div class="sub">
         <div class="info">
               <h1>I am <span1>Senthil</span1></h1>
               <h1>I'm a <span2>Front-End Developer</span2></h1>
               <p>Welcome to my officail Portfolio Website Where I put all<br /> my work related to my designs and developing many more.</p>
               <a href="#" class="btn">Download CV</a>
         </div>

         <div class="img-box">
              <img src="./img/background.png" class="back-img" />
              <img src="./img/men.png" class="man-img" />
         </div>

         <div class="social">
                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class='fab fa-twitter' ></i></a>
                <a href="#"><i class="fab fa-dribbble"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
         </div>
    </div>     
  );
}

export default Home;