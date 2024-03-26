// import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
// import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
