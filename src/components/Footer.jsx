import React from "react";

import { RiSendPlane2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <h1>
          Decentralized <br />
          Launchpad
        </h1>
        <br />
        <p>
          Open and decentralized protocol for syncing various Wallets to Dapps
          Secure Server. This is not an app but a protocol that establishes a
          remote connection between two apps and/or devices
        </p>
        <br />
        <br />
        <h3>Subscribe</h3>
        <br />
        <div className="in-container">
          <input type="text" placeholder="name@email.com" name="subscribe" />
          <button type="submit">
            <RiSendPlane2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
