import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authenticateUser from "./api";

const Auth = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = authenticateUser(username, password);
    if (user) {
      setUser(user);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <div>Admin</div>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Auth;
