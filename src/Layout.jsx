import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default App;
