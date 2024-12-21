import React from "react";

// Compoenents
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Choose from "../components/Choose";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-blue">
        <Navbar />
        <Hero />
      </div>
      <Choose />
      <Footer />
    </>
  );
};

export default Home;
