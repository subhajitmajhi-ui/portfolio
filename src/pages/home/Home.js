import React from 'react'
import withLayout from '../../hocs/Layout'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section id="home" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__zoomIn">
          <div className="container m-auto">
            <div className="row align-items-center">
              
              <div className=" col-xl-5 col-lg-6 col-md-6 col-12">
                <div className="home-profile animate__animated animate__fadeInLeft animate__delay-1s">
                  <img src="assets/images/profile/suva_n.jpg" alt="home-profile" />
                </div>
              </div>
              
              
              <div className="col-xl-7 col-lg-6 col-md-6 col-12">
                <div className="home-content">
                  <p className="common-desctiption animate__animated animate__fadeInDown animate__delay-1s">- Get to know me -</p>
                  <h1 className="common-title animate__animated animate__fadeInDown animate__delay-1s">Subhajit Majhi</h1>
                  <div className="animated-bar animate__animated animate__fadeInDown animate__delay-2s"></div>
                  <div className="animated-text animate__animated animate__fadeInDown animate__delay-2s">
                    <h3>UI - Developer</h3>
                    <h3>Front End Developer</h3>
                    <h3>Website Designer</h3>
                  </div>
                  
                  <div className="fixed-block animate__animated animate__jackInTheBox animate__delay-2-5s">
                    <ul className="list-unstyled social-icons">
                      <li><Link to="https://twitter.com/chilledsubha"><i className="fab fa-twitter"></i></Link></li>
                      <li><Link to="https://www.facebook.com/subhajit.majhi"><i className="fab fa-facebook-square"></i></Link></li>
                      <li><Link to="https://www.linkedin.com/in/subhajit-majhi-6aa039184/"><i className="fab fa-linkedin"></i></Link></li>
                      <li><Link to="https://github.com/subhajitmajhi-ui"><i className="fab fa-github-square"></i></Link></li>
                      <li><Link to="https://www.instagram.com/imsubhajitmajhi/?hl=en"><i className="fab fa-instagram-square"></i></Link></li>
                    </ul>
                  </div>
                  <p className="lorem-text animate__animated animate__zoomIn animate__delay-2-5s">As an experienced User Interface Designer who specializes in mobile application design, I am currently the UI Designer at Kus Software, where I develop innovative user interface experiences that meet our clients’ needs and objectives. I have experience in generating process flows and sitemaps, and I have created everything from widgets and buttons to illustrations and animations.
                  </p>
                  <div className="home-btn">
                    <a href="#contact" data-section-index="1"
                      className="clickbtn hire-me animate__animated animate__fadeInTopLeft animate__delay-3s ">Hire me</a>
                    <a href="#about" data-section-index="1"
                      className="clickbtn about-us animate__animated animate__fadeInTopRight animate__delay-3s">about me </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout(Home);
