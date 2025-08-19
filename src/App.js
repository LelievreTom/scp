import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Foundation from "./pages/Foundation";
import Clicker from "./pages/Clicker";
import ClickerAuth from "./pages/ClickerAuth";

function App() {
  return (
    <BrowserRouter basename="/scp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/traductions-news" element={<div>Page Traductions</div>} />
        <Route path="/scp-news" element={<div>Page SCP</div>} />
        <Route path="/clicker" element={<Clicker />} />
        <Route path="/clickerAuth" element={<ClickerAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;