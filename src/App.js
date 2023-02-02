import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formmain from "./components/form";
import "./App.css";

function App() {
  const addDataHandler = (Data) => {
    console.log(Data);
  };
  return (
    <div className="App">
      <Formmain onAddData={addDataHandler}></Formmain>
    </div>
  );
}

export default App;
