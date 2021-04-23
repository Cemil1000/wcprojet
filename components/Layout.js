import {FaCaretDown}from 'react-icons/fa'


export default function Layout({ children }) {
    return (
        <>
            <header>
                <div className="container">
                    <img src="./img/logo.png" alt="Logo du site" className="logo"/>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropbtn">Pages <FaCaretDown /></a>
                                <div className="dropdown-content">
                                    <a href="#">404 Page</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {children}

            <footer>
                <div>

                    <div className="grid-container container">
                        <div className="ABOUT">
      
                            <h3>ABOUT</h3>
                            <p>Integer posuere erat a ante venenati dapibus posuere velit aliquet. 
                            Fusce dapibus, tellus cursus commodo, tortor mauris sed posuere.</p>
                        </div>

                        <div className="our-service">
                            <h3 className="aColumn">OUR SERVICE</h3>
                            <a href="#">Graphic Design</a>
                            <a href="#">Web Design</a>
                            <a href="#">Web Development</a>
                        </div>

                        <div className="quick-links">
                            <h3 className="aColumn">QUICK LINKS</h3>
                            <a href="#">Partners</a>
                            <a href="#">About</a>
                            <a href="#">FAQ’s</a>
                            <a href="#">Badges</a>
                        </div>

                        <div className="subscribe-now">
                            <h3>SUBSCRIBE NOW</h3>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            <button type="submit" className="btnFooter ">Subscribe Now</button>
                        </div>
                    </div>

                    <div className="copyright">
                        <p className="pCopyright" >
                        COPYRIGHT 2018. ALL RIGHTS RESERVED. <br/> 
                        Design And Developed By Themefisher.Com <br/> 
                        Get More <span className="spanCopyright"> Free Bootstrap Templates </span> 
                        </p>
                    </div>

                </div>
            </footer>
        </>
    )
}
