import { useState } from "react";

function Clicker() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1); // incrémente le score à chaque clic
  };

  return (
    <div className="p-6 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Mini Clicker SCP</h1>
      <p className="text-xl mb-4">Score : {score}</p>
      <button
        onClick={handleClick}
        className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg transition"
      >
        Clique ici !
      </button>
    </div>
  );
}

export default Clicker;
