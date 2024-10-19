import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import BasicInfo from "./BasicInfo.jsx";
// import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello, world.</h1>
        <BasicInfo></BasicInfo>
      </div>
    </>
  );
}

export default App;
