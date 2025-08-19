import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function ClickerAuth() {
  const [mode, setMode] = useState("login"); // "login" ou "signup"
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [identifier, setIdentifier] = useState(""); // utilisé pour login
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Vérifie si une chaîne ressemble à un email
  const isEmail = (str) => /\S+@\S+\.\S+/.test(str);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!pseudo || !email || !password) {
      setMessage("Pseudo, email et mot de passe obligatoires");
      return;
    }

    setLoading(true);
    setMessage("");

    // Vérifie si le pseudo ou email existe déjà
    const { data: existingPlayers, error: checkError } = await supabase
      .from("players")
      .select("*")
      .or(`username.eq.${pseudo},email.eq.${email}`);

    if (checkError) {
      setMessage(checkError.message);
      setLoading(false);
      return;
    }

    if (existingPlayers.length > 0) {
      setMessage("Pseudo ou email déjà utilisé");
      setLoading(false);
      return;
    }

    // Crée l'utilisateur dans Supabase Auth
    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      setMessage(authError.message);
      setLoading(false);
      return;
    }

    // Crée le joueur dans la table players
    const { error: insertError } = await supabase
      .from("players")
      .insert([{ id: data.user.id, username: pseudo, email, money: 0, units: {} }]);

    if (insertError) setMessage(insertError.message);
    else setMessage("Inscription réussie ! Vous pouvez vous connecter.");

    setLoading(false);
  };

  const handleSignIn = async () => {
    if (!identifier || !password) {
      setMessage("Identifiant et mot de passe obligatoires");
      return;
    }

    setLoading(true);
    setMessage("");

    let emailToUse = identifier;

    if (!isEmail(identifier)) {
      // Si ce n’est pas un email, c’est un pseudo → cherche l’email correspondant
      const { data: userData, error } = await supabase
        .from("players")
        .select("email")
        .eq("username", identifier)
        .single();

      if (error) {
        setMessage("Pseudo introuvable");
        setLoading(false);
        return;
      }

      emailToUse = userData.email;
    }

    // Connexion avec l'email
    const { error } = await supabase.auth.signInWithPassword({
      email: emailToUse,
      password,
    });

    if (error) setMessage(error.message);
    else{
        setMessage("Connexion réussie !");
        navigate("/clicker");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Clicker SCP</h1>

      {/* Switch entre login / signup */}
      <div className="flex mb-6 space-x-4">
        <button
          className={`px-6 py-2 rounded-lg ${mode === "login" ? "bg-red-700" : "bg-gray-700"}`}
          onClick={() => setMode("login")}
        >
          Connexion
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${mode === "signup" ? "bg-red-700" : "bg-gray-700"}`}
          onClick={() => setMode("signup")}
        >
          Inscription
        </button>
      </div>

      {mode === "signup" && (
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            className="mb-4 p-3 rounded w-80 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-3 rounded w-80 text-black"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-3 rounded w-80 text-black"
          />
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            S'inscrire
          </button>
        </div>
      )}

      {mode === "login" && (
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Pseudo ou Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="mb-4 p-3 rounded w-80 text-black"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-3 rounded w-80 text-black"
          />
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="bg-red-700 px-6 py-3 rounded-lg hover:bg-red-600 transition"
          >
            Se connecter
          </button>
        </div>
      )}

      {message && <p className="mt-4 text-red-400">{message}</p>}
    </div>
  );
}

export default ClickerAuth;