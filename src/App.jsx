import "./App.css";
import Home from "./Pages/Home/Home";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <Home></Home>
    </ReactLenis>
  );
}

export default App;
