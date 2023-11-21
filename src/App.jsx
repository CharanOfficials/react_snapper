import "./App.css";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default App;
