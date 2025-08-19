import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import scpLogo from "../assets/scp-logo.png";

export default function Foundation() {
  const [hovered, setHovered] = useState(false);
  const logoRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 relative">
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
        <section className="flex flex-col md:flex-row justify-center gap-12">
        {/* Nouvelles traductions */}
        <div
            className="bg-yellow-100/30 rounded shadow-md overflow-hidden 
             w-full sm:w-96 h-64 sm:h-72"
        >
            {/* Mini-header */}
            <div className="flex justify-between items-center bg-red-800 text-white px-4 py-2">
            <h2 className="text-lg font-bold">Dernières traductions</h2>
            <button
                className="text-sm underline hover:text-gray-200"
                onClick={() => navigate("/traductions-news")} // mettre la route correspondante
            >
                Dernières traductions
            </button>
            </div>

            {/* Contenu des news */}
            <div className="p-6 overflow-y-auto h-[calc(100%-50px)]">
            <ul className="space-y-2">
                <p>Aucune traduction ajouté pour le moment !</p>
            </ul>
            </div>
        </div>

        {/* Nouveaux SCP */}
        <div
            className="bg-yellow-100/30 rounded shadow-md overflow-hidden"
            style={{ width: '400px', height: '300px' }} // taille personnalisée
        >
            {/* Mini-header */}
            <div className="flex justify-between items-center bg-red-800 text-white px-4 py-2">
            <h2 className="text-lg font-bold">Dernier SCP ajouté</h2>
            <button
                className="text-sm underline hover:text-gray-200"
                onClick={() => navigate("/scp-news")} // mettre la route correspondante
            >
                Dernières publications
            </button>
            </div>

            {/* Contenu des news */}
            <div className="p-6 overflow-y-auto h-[calc(100%-50px)]">
            <ul className="space-y-2">
                <p>Aucune nouveauté pour le moment !</p>
            </ul>
            </div>
        </div>
        </section>
                {/* Section présentation de la Fondation */}
        <section className="mt-20 flex justify-center">
          <div className="max-w-4xl bg-white/90 text-black rounded-lg shadow-lg p-8 text-center">
            <p className="leading-relaxed text-lg mb-4">
              Bienvenue, membres du personnel, cette plateforme est strictement confidentielle et réservée 
              uniquement aux agents, chercheurs, et membres autorisés du personnel de soutien.
              Votre rôle au sein de la Fondation dépendra de votre affectation, mais vous êtes 
              désormais lié par le secret absolu et par l’obligation de respecter les protocoles de sécurité. 
            </p>
            <h2 className="text-2xl font-bold text-red-800 mb-6">
              Énoncé de la Mission
            </h2>
            <p className="leading-relaxed text-lg mb-4">
              La Fondation agit à échelle mondiale, hors des juridictions nationales, et reçoit un mandat des
              gouvernements pour identifier, contenir et sécuriser les objets, entités et phénomènes anormaux.
              Ces anomalies représentent une menace majeure pour la stabilité de notre monde, qu'il s'agisse de 
              danger physique, psychologiques ou cognitifs.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              Votre rôle, en tant que membre du personnel, est de participer au maintien de la normalité afin que 
              l'humanité continue de vivre sans peur, sans doute ni méfiance. La fondation œuvre à préserver 
              l'indépendance de l'espèce humaine contre toute influence d'orrigine extraterrestre, 
              extradimensionnelle ou extranormale.
            </p>
            <p className="leading-relaxed text-lg mb-4">
              Notre mission est triple : 
              <p className="flex justify-left mt-6 ml-6 text-2xl font-bold">Sécuriser</p> <br/>
              La Fondation a pour priorité de localiser et sécuriser toute anomalie détectée. Son rôle est 
              d'empêcher que ces phénomènes tombent entre les mains d'organisations hostiles ou civiles, 
              grâce à une observation rigoureuse, une surveillance constante et une intervention rapide 
              dès que la situation l'exige.
              <p className="flex justify-left mt-6 ml-6 text-2xl font-bold">Contenir</p> <br/>
              Une fois capturées, les anomalies sont confinées afin de neutraliser leur influence et 
              d'empêcher toute propagation de leurs effets. Cela inclut leur relocalisation vers des sites 
              sécurisés, leur dissimulation, leur démantèlement ainsi que la mise en œuvre de protocoles pour 
              éviter toute exposition du public à leur existence. 
              <p className="flex justify-left mt-6 ml-6 text-2xl font-bold">Protéger</p> <br/>
              La mission utilme de la Fondation est de protéger l'humanité, non seulement des effets des 
              anomalies, mais également des anomalies elles-mêmes. Cette protection demeure active jusqu'à 
              ce que ces phénomènes soient pleinement compris, ou que la science puisse en expliquer les 
              propriétés et comportements. Dans les cas extrêmes, lorsque le confinement est jugé impossible, 
              la neutralisation — voire la destruction — peut être autorisée en dernier recours. 
            </p>
            <h2 className="text-2xl font-bold text-red-800 mb-6">
              Les opérations de la Fondation
            </h2>
            <p className="leading-relaxed text-lg mb-4">
              Les opérations de la Fondation sont menées de façon secrète et clandestine à travers le globe 
              pour réaliser nos missions primaires.
              <p className="flex justify-left mt-6 ml-6 text-2xl font-bold">Les Procédures de Confinement Spéciales</p> <br/>
              Au cœur de nos activités se trouve une vaste base de données regroupant toutes les anomalies 
              nécessitant des Procédures de Confinement Spéciales, communément abrégées "PCS". Cette base 
              répertorie leur descriptions ainsi que les protocoles d'urgence à appliquer en cas de brèche 
              ou d'incident majeur. <br />
              Les anomalies peuvent se présenter sous de nombreuses formes : objets, entités, lieux ou 
              phénomènes autonomes. Chacune est classée selon son niveau de dangerosité et confinée dans des 
              sites sécurisés de la Fondation, ou maintenue sur place lorsqu'un transfert est impossible.
              <p className="flex justify-left mt-6 ml-6 text-2xl font-bold">Sécurité interne</p> <br/>
              Le secret est absolu. Chaque membre du personnel est soumis à un strict niveau de sécurité et au 
              compartimentage de l'information. Toute violation des protocoles entrâine un identification 
              immédiate, une mise en détention et des sanctions disciplinaires.
              <p className="flex justify-left mt-6 ml-6 text-2xl font-bold">Organisations rivales et Groupes d'Intérêt</p> <br/>
              La Fondation n'est pas la seule à connaître l'existence de l'anormal. D'autres Groupes d'Intérêt 
              poursuivent leurs propres objectifs. Certains peuvent occasionnellement coopéret pour préserver 
              la sécuriter mondiale, mais la plupart cherchent uniquement à servir leurs intérêts. <br />
              Tout contact avec ces organisations est considéré comme suspect. La collaboration non autorisée 
              avec leurs membres constitue une faute grave pouvant mener à la neutralisation, ou à d'autres 
              sanctions sévères. 
            </p>
            <p className="leading-relaxed text-2xl font-bold text-red-700">
              Rappelez-vous : Sécuriser. Contenir. Protéger. <br />
              Le moindre manquement aux protocoles met en danger la Fondation, l’humanité, et vous-même.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
