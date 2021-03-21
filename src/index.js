import React from "react";
import { render } from "react-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

render(<App />, document.getElementById("root"));
