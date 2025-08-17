import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Foundation from "./components/Foundation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/scp" element={<Home />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/traductions-news" element={<div>Page Traductions</div>} />
        <Route path="/scp-news" element={<div>Page SCP</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
