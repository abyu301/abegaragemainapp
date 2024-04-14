import React from 'react';
import backgroundImage from '../../assets/images/misc/vban4.jpg';
import pinIcon from '../../assets/images/misc/pinIcon.png';
import emailIcon from '../../assets/images/misc/emailIcon.png';
import phoneIcon from '../../assets/images/misc/phoneIcon.png';

const ContactPage = () => {
  return (
    <>
      {/* Page Title */}
      <section className="page-title" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="auto-container">
          <h2>Contact</h2>
          <ul className="page-breadcrumb">
            <li><a href="index.html">home</a></li>
            <li>Contact</li>
          </ul>
        </div>
        <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Drop us message</h2>
            <div className="text">Praising pain was born and I will give you a complete account of the system, and </div>
          </div>
          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-7">
              <div className="inner-column">
                {/* Contact Form */}
                <div className="contact-form">
                  <form method="post" action="sendemail.php" id="contact-form">
                    <div className="row clearfix">
                      <div className="form-group col-md-12">
                        <input type="text" name="form_name" value="" placeholder="Your Name" required />
                      </div>
                      <div className="form-group col-md-12">
                        <input type="text" name="email" value="" placeholder="Your Email" required />
                      </div>
                      <div className="form-group col-md-12">
                        <input type="text" name="form_subject" value="" placeholder="Subject" required />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea name="form_message" placeholder="Message"></textarea>
                      </div>
                      <div className="form-group col-md-12">
                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                        <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>Submit now</span></button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Contact Form */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <section>
      {/* Info Column */}
      <div className="info-column col-lg-12 mb-4 mx-4">
        <div className="inner-column bg-light p-4 rounded shadow w-100">
          <h4 className="mb-4">Our Address</h4>
          <div className="text mb-4">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service.</div>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <img src={pinIcon} alt="pin" style={{ width: '40px', height: 'auto' }} className="mr-3" />
              <span>Address:</span> Calgary, Alberta
            </li>
            <li className="d-flex align-items-center mb-3">
              <img src={emailIcon} alt="email" style={{ width: '40px', height: 'auto' }} className="mr-3" />
              <span>Email:</span> contact@buildtruck.com
            </li>
            <li className="d-flex align-items-center">
              <img src={phoneIcon} alt="phone" style={{ width: '40px', height: 'auto' }} className="mr-3" />
              <span>Phone:</span> 1800 456 7890 / 1254 897 3654
            </li>
          </ul>
        </div>
      </div>
      </section>



      {/* Map Section */}
      <section className="map-section">
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250785.34527331853!2d-114.07184315499427!3d51.044270238073264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sbd!4v1577214205224!5m2!1sen!2sbd" width="600" height="470" style={{ border: '0', width: '100%' }} allowFullScreen="" title="map"></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
