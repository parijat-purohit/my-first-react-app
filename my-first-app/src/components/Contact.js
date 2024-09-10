import React from 'react';
import '../styles/Contact.css';
import MapChart from './Map';
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-form">
          <div className="contact-greet">
            Say Hello
          </div>
          <div className="contact-icon" onClick={() => window.open("mailto:parijat2009@gmail.com", "_blank")}>
            <MailOutlineRounded style={{ fontSize: 50 }} />
          </div>
          </div>
        <div className="contact-map">
          <MapChart />
        </div>
      </div>
    </div>
  );
};

export default Contact;
