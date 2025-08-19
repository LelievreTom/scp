import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import scpLogo from "../assets/scp-logo.png";

export default function Home() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate("/foundation");
    }, 2500); // laisse le temps aux animations
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 cursor-pointer overflow-hidden" onClick={handleClick} >
      {!clicked && (
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Logo */}
          <motion.img src={scpLogo} alt="SCP Logo" className="w-48 h-48" layoutId="scp-logo" />

          {/* Texte */}
            <motion.div className="text-center md:text-left text-white" initial={{ x: 0, opacity: 1 }} >
                <h1 className="text-4xl font-bold">SCP Foundation</h1>
                <p className="text-gray-300 mt-2 italic">
                    Secure, Contain, Protect
                </p>
            </motion.div>

        </div>
      )}

      {clicked && (
        <motion.img src={scpLogo} alt="SCP Logo" className="w-48 h-48" layoutId="scp-logo" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 2 }} />
      )}
    </div>
  );
}
