import { useLogto } from "@logto/react";
import axios from "axios";
import { useState } from "react";

import reactLogo from "../../assets/react.svg";
import SignIn from "../logto/SignIn";
import SignOut from "../logto/SignOut";

const Hello: React.FC = () => {
  const { getAccessToken } = useLogto();

  const [myData, setData] = useState("no");

  const getHello = async () => {
    const token =
      (await getAccessToken("https://api.flyboat.biishop.org")) || "";
    console.log(token);

    axios.get("https://api.flyboat.biishop.org/", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
  };
  console.log(myData);

  return (
    <>
      <button onClick={getHello}>api</button>
      <p>{myData}</p>
    </>
  );
};

export default function Root() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Okay</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <SignIn />
      </div>
      <div className="card">
        <SignOut />
      </div>
      <div className="card">
        <Hello />
      </div>
    </>
  );
}
