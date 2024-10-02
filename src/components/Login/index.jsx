import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function LoginForm(props) {
  const { setTheSite } = props;
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigateToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="login-container">
        <form
          className="login-form-container"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={navigateToHome} type="submit">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={() => setTheSite("signup")}>
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
