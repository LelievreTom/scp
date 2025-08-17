import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Foundation from "./components/Foundation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/scp" element={<Home />} />
        <Route path="/foundation" element={<Foundation />} />
      </Routes>
    </Router>
  );
}
