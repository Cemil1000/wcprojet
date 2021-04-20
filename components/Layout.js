export default function Layout() {
  return (
    <>
      <footer>
        <div className="container">

          <div class="grid-container">
            <div class="ABOUT">
              <h3>ABOUT</h3>
              <p>Integer posuere erat a ante venenati dapibus posuere velit aliquet. 
                  Fusce dapibus, tellus cursus commodo, tortor mauris sed posuere.</p>
            </div>

            <div class="our-service">
              <h3 class="aColumn">OUR SERVICE</h3>
              <a href="#">Graphic Design</a>
              <a href="#">Web Design</a>
              <a href="#">Web Development</a>
            </div>

            <div class="quick-links">
              <h3 class="aColumn">QUICK LINKS</h3>
              <a href="#">Partners</a>
              <a href="#">About</a>
              <a href="#">FAQ’s</a>
              <a href="#">Badges</a>
            </div>

            <div class="subscribe-now">
              <h3>SUBSCRIBE NOW</h3>
              <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <button type="submit" class="btnFooter ">Subscribe Now</button>
            </div>
          </div>

          <div class="copyright">
            <p class="pCopyright" >
              COPYRIGHT 2018. ALL RIGHTS RESERVED. <br/> 
              Design And Developed By Themefisher.Com <br/> 
              Get More <span class="spanCopyright"> Free Bootstrap Templates </span> 
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
