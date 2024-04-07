import CalculateIcon from "@mui/icons-material/Calculate";
import { useState } from "react";

export default function Todo() {
  const [value, setValue] = useState("");
  return (
    <>
      <div id="sidebar" className="App">
        {/* other elements */}
        <div className="container-fluid">
          <div className="todo-app aio-app">
            <h1 className="">
              Calculator <CalculateIcon />
            </h1>
            <form action="">
              <div>
                <input className="cal-input" type="text" value={value} />
              </div>
              <div className="calc-btns">
                <input
                  className="custom-btn"
                  type="button"
                  value="AC"
                  onClick={() => setValue("")}
                />
                <input
                  className="custom-btn del-btn"
                  type="button"
                  value="DE"
                  onClick={() => setValue(value.slice(0, -1))}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="."
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="/"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="calc-btns">
                <input
                  className="custom-btn"
                  type="button"
                  value="7"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="8"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="9"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="*"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="calc-btns">
                <input
                  className="custom-btn"
                  type="button"
                  value="4"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="5"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="6"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="+"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="calc-btns">
                <input
                  className="custom-btn"
                  type="button"
                  value="1"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="2"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="3"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="-"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="calc-btns">
                <input
                  className="custom-btn"
                  type="button"
                  value="00"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="custom-btn"
                  type="button"
                  value="0"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="equals-btn"
                  type="button"
                  value="="
                  onClick={(e) => setValue(eval(value))}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
