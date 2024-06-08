import React, { useState } from "react";
import Example from "./Navbar";
import About from "./AboutMe";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const lightModeImage = "https://wallpaperaccess.com/full/292112.jpg";
  const darkModeImage = "https://wallpaperaccess.com/full/456751.png"; // Replace with your dark mode image URL

  return (
    <div id="home"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        minHeight: "100vh",
        color: darkMode ? "white" : "black",
        fontFamily: "Space Grotesk, sans-serif",
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
        rel="stylesheet"
      ></link>
      <Example darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="position-relative">
        <img
          src={darkMode ? darkModeImage : lightModeImage}
          alt="background"
          className="img-fluid"
        />
        <header
          className="position-absolute top-0 start-0 p-5"
          style={{ color: darkMode ? "white" : "black" }}
        >
          <h1>Hi, I am Premosh Bakey!</h1>
        </header>
      </div>
      <br />
      <br />
      <About />
      <br />
      <br />
      <ContactInfo />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
