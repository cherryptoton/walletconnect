import React from "react";

import UseButton from "../utils/useButton";

const myStakings = [
  {
    id: 1,
    name: "Staking",
  },
  {
    id: 2,
    name: "Migration",
  },
  {
    id: 3,
    name: "Connect Wallet",
  },
  {
    id: 4,
    name: "Airdrop",
  },
  {
    id: 5,
    name: "Whitlist",
  },
  {
    id: 6,
    name: "KYC",
  },
  {
    id: 7,
    name: "RPC Settings",
  },
  {
    id: 8,
    name: "Buy NFT",
  },
  {
    id: 9,
    name: "Marketplace",
  },
  {
    id: 10,
    name: "Gas",
  },
  {
    id: 11,
    name: "Claim Rewards",
  },
  {
    id: 12,
    name: "Rectifications",
  },
  {
    id: 13,
    name: "Snapshots",
  },
  {
    id: 14,
    name: "Buy Presale",
  },
  {
    id: 15,
    name: "Migrate",
  },
];

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <h3>
          Open and Decentralized Protocol For Syncing Various Wallets to Dapps
          Secure Server
        </h3>
        <br />
        <br />
        <div className="solution-check-grid">
          {myStakings.map((val) => {
            return <UseButton value={val.name} key={val.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
