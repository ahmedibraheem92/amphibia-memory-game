import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PokemonList({ clickedPokemons, setClickedPokemons, bestScore, setBestScore }) {
    const [pokemons, setPokemons] = useState([]);

    function handleClick(e) {
        if (clickedPokemons.indexOf(e.target.parentElement.children[1].innerText) === -1) {
            setClickedPokemons(prev => [...prev, e.target.parentElement.children[1].innerText]);
            setPokemons([...pokemons].sort(() => Math.random() - 0.5));
            toast.success("Good job 👏");

        } else {
            if (clickedPokemons.length > bestScore) {
                setBestScore(clickedPokemons.length)
            }
            setClickedPokemons([]);
            setPokemons([...pokemons].sort(() => Math.random() - 0.5));

            toast.error("Game Over! Try Again.");

        }
    }

    console.log(clickedPokemons)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then((res) => res.json())
            .then(async (data) => {
                const detailed = await Promise.all(
                    data.results.map(async (p) => {
                        const res = await fetch(p.url);
                        const details = await res.json();
                        return {
                            name: details.name,
                            image: details.sprites.front_default,
                        };
                    })
                );
                setPokemons(detailed);
            })
            .catch((err) => console.error("Error:", err));
    }, []);

    if (pokemons.length === 0) return <p>Loading...</p>;

    return (
        <>
            <ToastContainer position="top-center" autoClose={1500} />

            <div
                style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            >
                {pokemons.map((p) => (
                    <div
                        key={p.name}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            margin: "10px",
                            padding: "10px",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                        onClick={handleClick}
                    >
                        <img src={p.image} alt={p.name} width="120" height="120" />
                        <p style={{ textTransform: "capitalize" }}>{p.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PokemonList;
