import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Idan-Gonen-Portfolio/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
