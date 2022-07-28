import React from "react";

const Contact = () => {
    return (
        <div>
             <section class="cta">
                   <div class="heading">
			                   <h2>Completed 1200+ Projects <br /> Successfully</h2>
		               </div>

		               <div class="cta-box">
			                  <div class="wrap one">
				                     <h3>1200+</h3>
				                     <p>Finished Projects</p>
			                  </div>

			                  <div class="wrap two">
				                     <h3>350+</h3>
			                       <p>Happy Customer</p>
			                  </div>

			                  <div class="wrap three">
				                     <h3>15k</h3>
				                     <p>Global Customers</p>
			                  </div>
		              </div>
	           </section>

             <section class="contact" id="contact">
		               <div class="container">
			                  <div class="center">
				                     <h3>Let's talk about everything</h3>
				                     <p>Don't like forms? Send me an email.</p>
			                  </div>

			                  <div class="action">
				                     <form>
					                        <input type="email" name="email" placeholder="Enter Your email" required />
					                        <input type="submit" name="submit" value="Submit" />
				                     </form>
			                  </div>
		              </div>
	           </section>

	           <div class="ends">
		              <p>Made with love by Senthil Balan © 2022</p>
	           </div>
        </div>
    )
  };
  
  export default Contact;