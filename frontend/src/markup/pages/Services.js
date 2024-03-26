import React from 'react';
import backgroundImage from '../../assets/images/misc/vban4.jpg';
import videoBackground from '../../assets/images/misc/vban3.jpg';

const ServicesPage = () => {
  return (
    <>
      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="auto-container">
          <h2>Services</h2>
          <ul className="page-breadcrumb">
            <li><a href="index.html">home</a></li>
            <li>Services</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>

      {/* Services Section */}
      <section className="services-section style-three">
        <div className="auto-container">
          <div className="sec-title style-two">
            <h2>Services that we offer</h2>
            <div className="text">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. </div>
          </div>
          <div className="row">
            <div className="col-lg-4 service-block-one">
              <div className="inner-box hvr-float-shadow">
                <h5>Service and Repairs</h5>
                <h2>Performance Upgrade</h2>
                <a href="service-details.html" className="read-more">read more  +</a>
                <div className="icon"><span className="flaticon-power"></span></div>
              </div>
            </div>
            {/* Other service blocks go here */}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div data-parallax='{"y": 50}' className="sec-bg" style={{ backgroundImage: `url(${videoBackground})` }}></div>
        <div className="auto-container">
          <h5>Working since 1992</h5>
          <h2>We are leader <br /> in Car Mechanical Work</h2>
          <div className="video-box">
            <div className="video-btn"><a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="overlay-link lightbox-image video-fancybox ripple"><i className="flaticon-play"></i></a></div>
            <div className="text">Watch intro video <br /> about us</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
