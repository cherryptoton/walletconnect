import React, { useState, useEffect } from "react";

import { FaWallet } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActiveNavBar, setIsActiveNavBar] = useState(false);

  useEffect(() => {
    if (window.scrollY >= 80) {
      setIsActiveNavBar(true);
    } else {
      setIsActiveNavBar(false);
    }
  }, []);

  return (
    <div>
      <div
        className={isActiveNavBar ? "navbar-section active" : "navbar-section "}
      >
        <div className="navbar-container">
          <div className="logo">
            <Link to={"/"} style={{ color: "white" }}>
              <h3>Decentralized Launchpad</h3>
            </Link>
          </div>

          <div className="navbar-list">
            <div className="search">
              <BiSearch style={{ fontSize: "1.5em" }} />
            </div>
            <div className="wallet-logo-link">
              <div className="wallet-logo-shape">
                <div className="wallet-icon">
                  <FaWallet />
                </div>

                <div className="wallet-text">
                  <span className="interact-button Button__StyledLink-sc-p6xn44-3 NBQYa Button__ButtonSecondary-sc-p6xn44-1 Navigation__LaunchButton-sc-v46eg4-0 fpGARf fVQvCS">
                    Connect Wallet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
