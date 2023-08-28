//Impoorting React Routes
import { Route, Routes } from "react-router-dom";

//Importing pages
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Projects" element={<Projects />} /> */}
      </Routes>  
    </div>
  );
}

export default App;