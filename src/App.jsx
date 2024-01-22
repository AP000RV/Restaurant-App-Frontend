import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "../Pages/Home";
import Success from "../Pages/Success.jsx";
import Notfound from "../Pages/Notfound.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;

// * means the path which is not defined will go to the notfound page...
