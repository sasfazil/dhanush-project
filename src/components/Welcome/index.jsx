import { useState } from "react";

import LoginForm from "../Login";
import Register from "../Register";
import "./index.css";

function Welcome() {
  const [sites, setSite] = useState("welcome");

  const welcomeConatiner = () => {
    return (
      <>
        <h1>Welcome To</h1>
        <img src="..\images\chain_company_logo.png" alt="" />
      </>
    );
  };

  const getUpdatedData = () => {
    switch (sites) {
      case "welcome":
        return welcomeConatiner();
      case "login":
        return <LoginForm setTheSite={setSite} />;
      case "signup":
        return <Register setTheSite={setSite} />;
      default:
        return null;
    }
  };

  return (
    <div className="welcome-main-container">
      <div className="welcome-anime-container">
        <video autoPlay muted loop className="video-class">
          <source src="..\video\global.mp4" type="video/mp4" />
        </video>
        <div className="welcome-container">
          <div>
            <button typs="button" onClick={() => setSite("welcome")}>
              Home
            </button>
            <button typs="button" onClick={() => setSite("login")}>
              Login
            </button>
            <button typs="button" onClick={() => setSite("signup")}>
              SignUp
            </button>
          </div>
          <div>{getUpdatedData()}</div>
          {sites === "welcome" ? (
            <div className="about-us-container">
              <h1>About Our Company</h1>
              <p>
                Chain is a dynamic student community designed to empower
                individuals through learning, engagement, and skill enhancement.
                It provides a wealth of resources, including collaborative
                projects, mentorship, and networking opportunities, all aimed at
                fostering both personal and professional growth. Members have
                access to diverse educational materials, interactive workshops,
                and real-world experiences that help them achieve their goals
                and connect with like-minded peers. As a startup, we aim to
                bridge the gap between individuals, professionals, industry
                experts, and alumni by creating digital profiles and supporting
                the development of their personal and professional skills.
              </p>
              <img src=".\images\about-us.jpg" alt="" className="aboutus-img" />
            </div>
          ) : null}
        </div>
      </div>
      {sites === "welcome" ? (
        <>
          <div className="our-services-container">
            <h1>Our Services</h1>
            <ul>
              <li>Connecting people.</li>
              <li>Core information.</li>
              <li>Skill development programs</li>
              <li>Events.</li>
              <li>Ai oriented class rooms</li>
              <li>Placement cell.</li>
              <li>Connecting with alumni.</li>
              <li>Placement Guidance</li>
              <li>Tasks, workshops.</li>
              <li>Leader board.</li>
            </ul>
          </div>
          <div className="visit-again-container">
            <h1>ThankYou</h1>
            <h2>Visit Again!!!</h2>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Welcome;
