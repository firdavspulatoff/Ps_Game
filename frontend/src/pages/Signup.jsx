import React, { useState } from "react";
import axios from "axios";
import { setUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSignup = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:4444/api/v1/users/signup",
      {
        password,
        email,
        lastName,
        firstName,
        passwordConfirm,
      }
    );
    const data = response.data;
    dispatch(setUser(data));
    if (data.isOk) navigate("/");
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input type="file" placeholder="photo" />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="password confirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button onClick={onSignup}>signup</button>
      </form>
    </>
  );
}

export default Signup;
