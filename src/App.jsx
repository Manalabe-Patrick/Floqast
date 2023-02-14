import "./App.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

//components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="App">
      {/* <Home /> */}
      <AboutUs />
    </div>
  );
}

export default App;
