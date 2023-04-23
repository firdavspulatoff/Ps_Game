import React, { useState } from "react";
import axios from "axios";
import { setUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSignin = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4444/api/v1/users/signin",
      {
        password,
        email,
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onSignin}>signin</button>
      </form>
    </>
  );
}

export default Signin;
