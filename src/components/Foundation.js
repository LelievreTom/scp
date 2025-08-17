import { useRef, useState } from "react";
import { motion } from "framer-motion";
import scpLogo from "../assets/scp-logo.png";

export default function Foundation() {
  const [hovered, setHovered] = useState(false);
  const logoRef = useRef(null);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header fixe */}
      <header className="fixed top-0 left-0 w-full h-16 bg-black z-50"></header>

      {/* Contenu principal */}
      <main className="pt-28 px-6 md:px-24 lg:px-32">
        {/* Section avertissement */}
        <section className="relative flex items-center justify-center text-center mb-20">
          {/* Logo animé */}
          <motion.img
            ref={logoRef}
            src={scpLogo}
            alt="SCP Logo"
            className="absolute w-64 h-64 opacity-10 pointer-events-none"
            animate={{
              x: hovered ? 20 : 0,
              y: hovered ? -20 : 0,
              rotate: hovered ? 10 : 0,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />

          {/* Message */}
          <div
            className="relative z-10 text-black max-w-3xl px-4 py-8 flex items-center justify-center group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            {/* Barre gauche */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-800"></div>
            {/* Barre droite */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-red-800"></div>

            <p className="text-lg font-bold leading-relaxed">
                ATTENTION : LA BASE DE DONNÉES DE LA FONDATION EST <br />
                CLASSIFIÉE <br />
                L’ACCÈS AU PERSONNEL NON AUTORISÉ EST STRICTEMENT INTERDIT <br />
                LES CONTREVENANTS SERONT TRAQUÉS, ARRÊTÉS ET EMPRISONNÉS
            </p>
            </div>

        </section>

        {/* Section nouveautés */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Nouvelles traductions */}
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">Dernières traductions</h2>
            <ul className="space-y-2">
              <li>SCP-001 - Français</li>
              <li>SCP-002 - Anglais</li>
              <li>SCP-003 - Espagnol</li>
            </ul>
          </div>

          {/* Nouveaux SCP */}
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">Nouveaux SCP</h2>
            <ul className="space-y-2">
              <li>SCP-005 - Titre</li>
              <li>SCP-006 - Titre</li>
              <li>SCP-007 - Titre</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
