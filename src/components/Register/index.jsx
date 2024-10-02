import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Register(props) {
  const { setTheSite } = props;
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const navigateToHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="register-container">
        <form
          className="register-form-container"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setCnfPassword(e.target.value)}
            value={cnfPassword}
          />
          <button type="submit" onClick={navigateToHome}>
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <a href="#" onClick={() => setTheSite("login")}>
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
