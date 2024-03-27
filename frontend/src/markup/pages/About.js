import React from 'react';

import bgImage3 from '../../assets/images/misc/vban4.jpg';
import miscImage1 from '../../assets/images/misc/vban1.jpg';
import miscImage2 from '../../assets/images/misc/vban2.jpg';
import resourceImage2 from '../../assets/images/misc/vban3.jpg';
import bannerImage2 from '../../assets/images/misc/vban4.jpg';

const AboutPage = () => {
  return (
    <>
      {/* Page Title */}
      <section className="page-title" style={{backgroundImage: `url(${bgImage3})`}}>
        <div className="auto-container">
          <h2>About us</h2>
          <ul className="page-breadcrumb">
            <li><a href="/">home</a></li>
            <li>About us</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>

       {/* About Us */}
       <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5">
              <div className="image-box">
                <img src={miscImage1} alt="" />
                <img src={miscImage2} alt="" />
                <div className="year-experience" data-parallax={{ y: 30 }}><strong>17</strong> years <br />Experience</div>
              </div>
            </div>
            <div className="col-lg-7 pl-lg-5">
              <div className="sec-title">
                <h5>Welcome to Our workshop</h5>
                <h2>We have 24 years experience</h2>
                <div className="text">
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.</p>
                </div>
                <div className="link-btn mt-40"><a href="about" className="theme-btn btn-style-one style-two"><span>About Us <i className="flaticon-right"></i></span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Why Choose Us */}
     <section className="why-choose-us">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-title style-two">
                <h2>Why Choose Us</h2>
                <div className="text">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation heading towards.</div>
              </div>
              <div className="icon-box">
                <div className="icon"><span className="flaticon-mechanic"></span></div>
                <h4>Certified Expert Mechanics</h4>
              </div>
              <div className="icon-box">
                <div className="icon"><span className="flaticon-wrench"></span></div>
                <h4>Fast And Quality Service</h4>
              </div>
              <div className="icon-box">
                <div className="icon"><span className="flaticon-price-tag-1"></span></div>
                <h4>Best Prices in Town</h4>
              </div>
              <div className="icon-box">
                <div className="icon"><span className="flaticon-trophy"></span></div>
                <h4>Awarded Workshop</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-title style-two">
                <h2>Additional Services</h2>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="image"><img src={resourceImage2} alt="" /></div>
                </div>
                <div className="col-md-7">
                  <ul className="list">
                    <li>General Auto Repair & Maintenance</li>
                    <li>Transmission Repair & Replacement</li>
                    <li>Tire Repair and Replacement</li>
                    <li>State Emissions Inspection</li>
                    <li>Brake Job / Brake Services</li>
                    <li>Electrical Diagnostics</li>
                    <li>Fuel System Repairs</li>
                    <li>Starting and Charging Repair</li>
                    <li>Steering and Suspension Work</li>
                    <li>Emission Repair Facility</li>
                    <li>Wheel Alignment</li>
                    <li>Computer Diagaonstic Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section">
        <div className="auto-container">
          <div className="top-content">
            <div className="row m-0 justify-content-between">
              <div className="sec-title">
                <h2>Our Team</h2>
              </div>
              <div className="text">
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a <br />new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User <br />generated content in real-time will have multiple touchpoints for offshoring.
              </div>
            </div>
          </div>
          {/* Team Members */}
          {/* <div className="row"> */}
            {/* Team Member 1 */}
            {/* <div className="col-lg-3 col-md-6 team-block-one"> */}
              {/* <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                <div className="image">
                  <img src={team1} alt="" />
                  <div className="overlay-box">
                    <ul className="social-links">
                      <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                      <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                      <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <h4>Michale Joe</h4>
                  <div className="designation">Main Supervisor</div>
                </div>
              </div> */}
            </div>
            {/* Add more team members similarly */}
            {/* Team Member 2 */}
            {/* <div className="col-lg-3 col-md-6 team-block-one"> */}
              {/* <div className="inner-box wow fadeInDown" data-wow-duration="1500ms">
                <div className="image">
                  <img src={team2} alt="" />
                  <div className="overlay-box">
  <ul className="social-links">
    <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
    <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
  </ul>
</div>

                </div>
                <div className="content">
                  <h4>Mark John</h4>
                  <div className="designation">Main Mechanic</div>
                </div>
              </div> */}
            {/* </div> */}
            {/* Team Member 3 */}
            {/* <div className="col-lg-3 col-md-6 team-block-one"> */}
              {/* <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                <div className="image">
                  <img src={team3} alt="" />
                  <div className="overlay-box">
                    <ul className="social-links">
                      <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                      <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                      <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <h4>Merry Desulva</h4>
                  <div className="designation">Main Supervisor</div>
                </div>
              </div> */}
            {/* </div> */}
            {/* Team Member 4 */}
            {/* <div className="col-lg-3 col-md-6 team-block-one"> */}
              {/* <div className="inner-box wow fadeInDown" data-wow-duration="1500ms">
                <div className="image">
                  <img src={team4} alt="" />
                  <div className="overlay-box">
                    <ul className="social-links">
                      <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                      <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                      <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <h4>John michale</h4>
                  <div className="designation">Junior Helper</div>
                </div>
              </div> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div data-parallax='{"y": 50}' className="sec-bg" style={{backgroundImage: `url(${bannerImage2})`}}></div>
        <div className="auto-container">
          <h5>Working since 1992</h5>
          <h2>We are leader <br /> in Car Mechanical Work</h2>
          <div className="video-box">
            <div className="video-btn"><a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="overlay-link lightbox-image video-fancybox ripple"><i className="flaticon-play"></i></a></div>
            <div className="text">Watch intro video <br /> about us</div>
          </div>
        </div>
      </section>

      {/* facts Section */}
      <section className="facts-section">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <h2><span>100%</span> Satisfaction <br /> Guarantee</h2>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-4">
                  <div className="facts-block">
                    <div className="icon"><span className="flaticon-customer-service-1"></span></div>
                    <h4>Quality Support</h4>
                    <div className="text">Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="facts-block">
                    <div className="icon"><span className="flaticon-car-1"></span></div>
                    <h4>All Car Makes</h4>
                    <div className="text">Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="facts-block">
                    <div className="icon"><span className="flaticon-maintenance"></span></div>
                    <h4>Variety Services</h4>
                    <div className="text">Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

