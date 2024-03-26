import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authUser = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authUser, {
      onSuccess: (result) => {
        console.log(result);
        alert("User Logged In");
        navigate("/dashboard");
      },
      onFailure: (err) => {
        console.log(err);
        alert("Could Not Log In");
        setError(true);
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>LogIn</h1>

      <form onSubmit={handleLogin}>
        <TextField
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />{" "}
        <br />
        <br />
        <TextField
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <br />
        <br />
        <Button type="submit">Log In</Button>
        {error && (
          <p style={{ color: "red" }}>
            Login is only possible when your account is confirm in the AWS
            console
          </p>
        )}
      </form>
    </div>
  );
};

export default LogIn;
