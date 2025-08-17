import { useState } from "react";
import scpLogo from "./assets/scp-logo.png";

export default function App() {
  const [showNext, setShowNext] = useState(false);

  const handleClick = () => {
    setShowNext(true);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center cursor-pointer ${
        showNext ? "bg-white" : "bg-gray-900"
      }`}
      onClick={handleClick}
    >
      {!showNext ? (
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-8">
          <img src={scpLogo} alt="SCP Logo" className="w-48 h-48" />
          <div className="text-center md:text-left text-white">
            <h1 className="text-4xl font-bold">SCP Foundation</h1>
            <p className="text-gray-300 mt-2 italic">Secure, Contain, Protect</p>
          </div>
        </div>
      ) : (
        <h1 className="text-4xl font-bold text-black">Coucou</h1>
      )}
    </div>
  );
}
