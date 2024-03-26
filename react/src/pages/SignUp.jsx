import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import UserPool from "../UserPool";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        alert("USER NOT CREATED");
      } else {
        console.log(data);
        alert("User Created Successfully");
        navigate("/");
      }
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
      <h1>Sign In</h1>
      <form onSubmit={handleOnSubmit}>
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
        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default SignUp;
