import Front from "./page1/front";
import "./assets/css/navbar.css";
import Navbar2 from "./page1/navbar2";
import "./assets/css/navbar2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/navbar3.css";
import Navbar3 from "./page1/navbar3";
import "./assets/css/carousel.css";
import UncontrolledExample from "./page1/carousel";
import Roundbuttons from "./page1/roundbuttons";
import "./assets/css/roundbuttons.css";
import "./assets/css/page3.css"
import Page3 from "./page1/page3.jsx";
import Page4 from "./page1/page4.jsx";
import "./assets/css/page4.css";
import "./assets/css/page5.css"
import Page5 from "./page1/page5.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./files/signin.jsx";
import"./assets/css/signin.css";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Front />} />
    <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
