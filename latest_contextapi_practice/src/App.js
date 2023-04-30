import React from "react";
import { useStateContext } from "./contexts/contextProvider";

const App = () => {
  const { state, setState } = useStateContext();
  console.log({ state });
  const { name, email, password, loader } = state;
  return (
    <div>
      <p>
        {loader ? "userInfo" : " Not Info "}
        <br />
        <br />
        {name}
        <br />
        <br />
        {email}
        <br />
        <br />
        {password}
        <br />
        <br />
      </p>
      <button
        onClick={() => {
          setState({ ...state, email: "falak@gmail.com" });
        }}
      >
        update Email
      </button>
      <button
        onClick={() => {
          setState({ ...state, password: "pass1234" });
        }}
      >
        update password
      </button>
      <button
        onClick={() => {
          setState({ ...state, name: "falak sher" });
        }}
      >
        update Name
      </button>
    </div>
  );
};

export default App;
