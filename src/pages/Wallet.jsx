import React, { useState } from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Data
import Data from "../data/coindata";
import PopUpComponent from "../components/popup";

const Wallet = () => {
  const [isCon, setIsCon] = useState(
    <div>
      <div className="heading-line s2"></div>
      <h2 className="please-h2">Starting secure connection...</h2>
      <p className="please-wait">please wait</p>
    </div>
  );
  const [popUp, setpopUp] = useState(false);
  const [SecondpopUp, setSecondpopUp] = useState(false);
  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");

  const ShowPopModel = (id) => {
    setpopUp(true);

    Data.filter((item) => {
      if (item.id === id) {
        return setName(item.name), setUrl(item.image);
      }
      return null;
    });

    return;
  };

  return (
    <>
      <Navbar />
      <div className="wallet-section">
        <div className="wallet-container">
          <h2 style={{ fontWeight: "500" }}>Select a Wallet</h2>
          <br />
          <br />
          <div className="relative w-full grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {Data.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex flex-col gap-1.5 justify-center items-center cursor-pointer"
                  onClick={() => ShowPopModel(data.id)}
                >
                  <div className="w-16 h-16 cursor-pointer">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-sm font-mono">{data.name} </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {popUp && (
        <div className="pop-up-model z-[99999999]">
          <PopUpComponent
            setpopUp={setpopUp}
            SecondpopUp={SecondpopUp}
            setSecondpopUp={setSecondpopUp}
            isCon={isCon}
            setIsCon={setIsCon}
            name={name}
            url={url}
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Wallet;
