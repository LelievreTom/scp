import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Foundation from "./components/Foundation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/traductions" element={<div>Page Traductions</div>} />
        <Route path="/scp" element={<div>Page SCP</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
