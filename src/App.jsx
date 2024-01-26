import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div>
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
