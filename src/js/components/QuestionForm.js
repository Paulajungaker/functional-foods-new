import React from "react";
import {useState} from "react";
import emailjs from "emailjs-com";
import "./styling/QuestionForm.css";

const QuestionForm = () => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Skicka förfrågan med EmailJS
    emailjs
      .send("service_axej04s", "template_5hvul4i", {
        email,
        question,
      })
      .then((response) => {
        setStatus("Frågan skickad till Ulrika. Tack!");
        setEmail("");
        setQuestion("");
      })
      .catch((error) => {
        setStatus("Ett fel inträffade, vänligen försök igen.");
        console.error("EmailJs error:", error);
      });
  };

  return (
    <div className="question-container">
      <h1 className="question-title">Ställ din fråga till Ulrika</h1>
      <form className="question-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="question-label">
          Mejladress:
        </label>
        <input
          className="email-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="question" className="question-label">
          Ställ din fråga:
        </label>
        <textarea
          className="question-input"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <div className="question-button-container">
          <button className="question-button" type="submit">
            Skicka
          </button>
        </div>
      </form>
      {status && <p className="status-text">{status}</p>}
    </div>
  );
};

export default QuestionForm;
