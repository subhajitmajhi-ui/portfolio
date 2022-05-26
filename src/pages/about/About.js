import React from 'react'
import withLayout from '../../hocs/Layout'
import { Link } from 'react-router-dom'
// import withLayout from '../../hocs/Layout'

const About = () => {
  return (
    <>
      <section id="about" className="section active">
        <div className="homecolor-box"></div>
        <div className="common_bg animate__animated animate__fadeInDown">
          <div className="container">
            <div className="about-content">
              
              <div className="row ">
                <div className="col-12 ">
                  <div className="section-title animate__animated animate__fadeInDown animate__delay-1s">
                    <p className="common-desctiption">my intro</p>
                    <h1 className="common-title">About <span>Me</span></h1>
                    <div className="animated-bar"></div>
                  </div>
                </div>
              </div>
              
              
              <div className="row single-section">
                <div className="col-lg-4 profile-photo animate__animated animate__fadeInLeft animate__delay-2s ">
                  <div className="row">
                    <div className="col-12 d-block col-sm-none">
                      <img src="assets/images/profile/suva_n.jpg" className="img-fluid main-img-mobile" alt="my" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="row personal-info animate__animated animate__fadeInRight animate__delay-2s">

                    <div className="col-12">
                      <h5 className="personal-title">who am <span>i ?</span></h5>
                      <h3 className="personal-title">I'm Subhajit, a visual <span>UI Designer</span> and <span>Front End
                          Developer</span></h3>
                      <p className="info">As an experienced User Interface Designer who specializes in mobile application design, I am currently the UI Designer at Kus Software, where I develop innovative user interface experiences that meet our clients’ needs and objectives. I have experience in generating process flows and sitemaps, and I have created everything from widgets and buttons to illustrations and animations.</p>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <h3 className="personal-infotitle">personal <span>informations</span></h3>
                      </div>

                      <div className="col-lg-6">
                        <ul className="about-you ">
                          <li>
                            <span className="title">first name :</span>
                            <span className="value">Subhajit</span>
                          </li>
                          <li>
                            <span className="title">last name :</span>
                            <span className="value">Majhi</span>
                          </li>
                          <li>
                            <span className="title">address :</span>
                            <span className="value">77J Bose Pukur Rd. Kolkata - 42</span>
                          </li>
                          <li>
                            <span className="title">From :</span>
                            <span className="value">West Bengal, India</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="about-you ">
                          <li>
                            <span className="title">E-mail :</span>
                            <span className="value"><a href="mailto:subhajit.majhi@gmail.com">subhajit.majhi@gmail.com</a></span>
                          </li>
                          <li>
                            <span className="title">Phone :</span>
                            <span className="value"><a href="tel:(+01)123-456-789">(+91) 9836-814898</a></span>
                          </li>
                          <li>
                            <span className="title">Phone :</span>
                            <span className="value"><a href="tel:(+01)123-456-789">(+91) 7980-941819</a></span>
                          </li>
                          <li>
                            <span className="title">Langages :</span>
                            <span className="value">Bangla, Hindi, English</span>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-12">
                        <div className="About-btn">
                          <button id="b1" className="clickbtn download-cv">Download CV <i className="fa fa-download"
                              aria-hidden="true"></i></button>
                          
                          <div className="col-lg-7 col-sm-6 col-12">
                            <ul className="list-unstyled social-icons">
                              <li><Link to="https://twitter.com/chilledsubha"><i className="fab fa-twitter"></i></Link></li>
                              <li><Link to="https://www.facebook.com/subhajit.majhi"><i className="fab fa-facebook-square"></i></Link></li>
                              <li><Link to="https://www.linkedin.com/in/subhajit-majhi-6aa039184/"><i className="fab fa-linkedin"></i></Link></li>
                              <li><Link to="https://github.com/subhajitmajhi-ui"><i className="fab fa-github-square"></i></Link></li>
                              <li><Link to="https://www.instagram.com/imsubhajitmajhi/?hl=en"><i className="fab fa-instagram-square"></i></Link></li>
                             </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="resume-section ">
                
                <div className="row">
                  <div className="col-12">
                    <div className="section-title animate__animated animate__fadeInUp animate__delay-3s">
                      <p className="common-desctiption">Check out my Resume</p>
                      <h1 className="common-title ">my <span>Resume</span></h1>
                      <div className="animated-bar "></div>
                    </div>
                  </div>
                </div>
                
                
                <div className="row">
                  
                  <div className="col-md-6 col-12 ">
                    <div className=" col-block education ">
                      <h3 className="about-subtitle">Education</h3>
                      {/* <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Bachelor of Science in Information Technology</h5><span
                          className="item-details">Cambridge University / 2004 - 2007</span>
                        <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo
                          repudiandae.</p>
                      </div> */}
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Master of Computer Application</h5><span
                          className="item-details">Sikkim Manipal University</span>
                        <p className="item-description">Computer Organisation & Architecture, Programming & Data Structure, Data Base Management Systems, DBMS, Software Engineering, Network, Info Systems Analysis Design & Implementations etc.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 col-12 ">
                    <div className=" col-block education">
                      <h3 className="about-subtitle">Experience</h3>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">Senior UI Developer</h5><span className="item-details">Kus Software / 2018 -
                          Current</span>
                        <p className="item-description">I have six years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, JavaScript, JQuery, React JS, Angular, and Photoshop.</p>
                      </div>
                      <div className="resume-item"><span className="item-arrow"></span>
                        <h5 className="item-title">UI Developer</h5><span className="item-details">Passionate Futurist Solution Pvt. Ltd. / 2016 -
                          2018</span>
                        <p className="item-description">Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              
              <div className="skill-section">
                <div className="row">
                  <div className="col-12 ">
                    <div className="section-title animate__animated animate__fadeInUp animate__delay-3s">
                      <p className="common-desctiption">My level of knowledge in some tools</p>
                      <h1 className="common-title">my <span>skills</span></h1>
                      <div className="animated-bar"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <h3 className="about-subtitle">Design <span>Skills</span></h3>
                    <div className="skill-bars">
                      <div className="bar">
                        <div className="info">
                          <span>Photoshop</span>
                        </div>
                        <div className="progress-line Photoshop">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Illustrator</span>
                        </div>
                        <div className="progress-line Illustrator">
                          <span>20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 ">
                    <h3 className="about-subtitle">Coding <span>Skills</span></h3>
                    <div className="skill-bars">
                      <div className="bar">
                        <div className="info">
                          <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>SCSS</span>
                        </div>
                        <div className="progress-line python">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>jQuery</span>
                        </div>
                        <div className="progress-line jquery">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Javascript</span>
                        </div>
                        <div className="progress-line python">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>React JS</span>
                        </div>
                        <div className="progress-line python">
                          <span></span>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Angular</span>
                        </div>
                        <div className="progress-line mysql">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="services-section text-center ">
                <div className="row ">
                  <div className="col-12">
                    <div className="section-title  animate__animated animate__fadeInUp animate__slower animate__delay-3s ">
                      <p className="common-desctiption">Services i offer to my clients</p>
                      <h1 className="common-title">My <span>Services</span></h1>
                      <div className="animated-bar"></div>
                    </div>
                    <p className="service-text">Have you ever wondered how websites adjust to different devices, like tablets, desktop, iPad or smartphones? Or why your website has trouble doing the same?
The reason for this is simple. If your website is not designed for that function, it will not respond to the needs of the users and the devices they're using. Not all website owners are aware of responsive web design.
                    </p>
                  </div>
                </div>
                <div className="row animate__animated animate__zoomIn animate__slower animate__delay-3s">
                  
                  <div
                    className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-laptop-code"></i>
                      <h4><span className="service-line">web design</span></h4>
                      <p>
                      Web design refers to the design of websites that are displayed on the internet.
                      </p>
                    </div>
                  </div>
                  

                  
                  <div
                    className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-palette"></i>
                      <h4><span className="service-line">design</span></h4>
                      <p>
                      Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.
                      </p>
                    </div>
                  </div>
                  

                  
                  <div
                    className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-radiation"></i>
                      <h4><span className="service-line">animation</span></h4>
                      <p>
                      The basic types of web animation are CSS and JavaScript animation, scalable vector graphics (SVG).
                      </p>
                    </div>
                  </div>
                  

{/*                   
                  <div
                    className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-code"></i>
                      <h4><span className="service-line">web devolopment</span></h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                    </div>
                  </div> */}
                  

                  
                  <div
                    className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-arrows-alt"></i>
                      <h4><span className="service-line">fully responsive</span></h4>
                      <p>
                      whether a website is optimised to be functional and aesthetically pleasing on devices of different sizes.
                      </p>
                    </div>
                  </div>
                  

                  
                  {/* <div
                    className="col-lg-3 col-sm-6 services-box animate__animated animate__zoomIn animate__slower animate__delay-3s">
                    <div className="service-item">
                      <i className="fas fa-dharmachakra"></i>
                      <h4><span className="service-line">management</span></h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                    </div>
                  </div> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withLayout( About);
