import React from "react";
import {useNavigate} from "react-router-dom";
import "./styling/HomePage.css";
// import backgroundVideo from "../../assets/videos/background.mp4";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigate("/ask");
  };

  return (
    <div className="homepage">
      {/*
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      */}
      <div className="content-overlay">
        <p className="home-text">
          {" "}
          Välkommen till en spännande resa genom världens mest näringsrika och
          hälsobringande livsmedel - functional foods! Dessa fantastiska
          matvaror är mer än bara bränsle för kroppen; de är nycklen till ett
          liv fyllt av energi, balans och vitalitet.
        </p>
        <h4 className="ask-text">
          Vad vill du veta om functional foods? Ställ din fråga till mig här:
        </h4>
        <button className="home-button" onClick={handleButtonClick}>
          Ställ din fråga till mig här
        </button>
        <h3 className="signature-text">Ulrika Davidsson</h3>
      </div>
    </div>
  );
};

export default HomePage;
