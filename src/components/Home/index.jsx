import { FaHome, FaCoins, FaGift, FaUser } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { v4 as uuid } from "uuid";
import Posts from "../Posts";
import "./index.css";

const postLists = [
  {
    id: uuid(),
    name: "Fazil",
    username: "@fazil_shaik",
    time: "18h",
    image: "",
    likes: "12",
  },
  {
    id: uuid(),
    name: "Shaik",
    username: "@shaik_123",
    time: "1h",
    image: "",
    likes: "122",
  },
  {
    id: uuid(),
    name: "Abdul",
    username: "@shaik_abdul",
    time: "11h",
    image: "",
    likes: "3k",
  },
  {
    id: uuid(),
    name: "Abdul",
    username: "@abdul_shaik",
    time: "30min",
    image: "",
    likes: "12",
  },
];

function Home() {
  return (
    <div className="home-container">
      <div>
        <nav className="navbar bg-black">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src=".\images\mini_logo.jpg" className="customize-logo" />
            </a>
            <button
              className="navbar-toggler bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Certifications
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Points
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Attendance
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Classes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    People
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="main-content-display">
        <div className="search-nav-bar">
          <input type="search" placeholder="Search" />
          <button className="common-icon-btn">
            <FaHome />
          </button>
          <button className="common-icon-btn">
            <FaCoins />
          </button>
          <button className="common-icon-btn">
            <FaGift />
          </button>
          <button className="common-icon-btn">
            <IoChatbubbles />
          </button>
          <button className="common-icon-btn">
            <FaUser />
          </button>
        </div>
        <ul></ul>
      </div>
      <div className="adv-container">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 rounded"
                src="..\images\leader.png"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 rounded"
                src="..\images\leader.png"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 rounded"
                src="..\images\leader.png"
                alt="Third slide"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
