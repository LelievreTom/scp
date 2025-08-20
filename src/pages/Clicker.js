import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

function Clicker() {
    const [money, setMoney] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    // Récupère l'utilisateur connecté au chargement
    useEffect(() => {
        const getUser = async () => {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }
        setUser(data.user);
        };

        getUser();

        // Écoute les changements d'auth (optionnel si tu veux rafraîchir automatiquement)
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        });

        return () => {
        listener.subscription.unsubscribe();
        };
    }, []);

    // Récupère l'argent depuis la table players quand l'utilisateur est connu
    useEffect(() => {
        if (!user) return;

        const fetchMoney = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("players")
            .select("money")
            .eq("id", user.id)
            .single();

        if (error) setError(error.message);
        else setMoney(data.money);

        setLoading(false);
        };

        fetchMoney();
    }, [user]);

    const handleClick = async () => {
        if (!user) return;

        const newMoney = money + 1;
        setMoney(newMoney);

        const { error } = await supabase
        .from("players")
        .update({ money: newMoney })
        .eq("id", user.id);

        if (error) setError(error.message);
    };

    if (loading) return <p className="text-white p-6">Chargement...</p>;
    if (!user) return <p className="text-white p-6">Connecte-toi pour jouer !</p>;

    return (
        <div className="p-6 text-white bg-black flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Mini Clicker SCP</h1>
            <p className="text-xl mb-4">Argent : {money}</p>
            <button
            onClick={handleClick}
            className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg transition"
            >
            Clique ici !
            </button>
            {error && <p className="text-red-400 mt-2">{error}</p>}
        </div>
    );

}

export default Clicker;
