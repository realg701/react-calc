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
          </div>
        </div>
      </div>
    </>
  );
}
