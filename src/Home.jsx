import CalculateIcon from "@mui/icons-material/Calculate";

export default function Todo() {
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
                <input className="cal-input" type="text" />
              </div>
              <div className="calc-btns">
                <input className="custom-btn" type="button" value="AC" />
                <input className="custom-btn" type="button" value="DE" />
                <input className="custom-btn" type="button" value="." />
                <input className="custom-btn" type="button" value="/" />
              </div>
              <div className="calc-btns">
                <input className="custom-btn" type="button" value="7" />
                <input className="custom-btn" type="button" value="8" />
                <input className="custom-btn" type="button" value="9" />
                <input className="custom-btn" type="button" value="*" />
              </div>
              <div className="calc-btns">
                <input className="custom-btn" type="button" value="4" />
                <input className="custom-btn" type="button" value="5" />
                <input className="custom-btn" type="button" value="6" />
                <input className="custom-btn" type="button" value="+" />
              </div>
              <div className="calc-btns">
                <input className="custom-btn" type="button" value="1" />
                <input className="custom-btn" type="button" value="2" />
                <input className="custom-btn" type="button" value="3" />
                <input className="custom-btn" type="button" value="-" />
              </div>
              <div className="calc-btns">
                <input className="custom-btn" type="button" value="00" />
                <input className="custom-btn" type="button" value="0" />
                <input className="equals-btn" type="button" value="=" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
