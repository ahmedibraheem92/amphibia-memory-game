
import Header from './components/header'; 
import PokemonList from './components/cards';
import './App.css'
import { useState } from 'react';

function App() {
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  return (
      <>
        <Header clickedPokemons={clickedPokemons} bestScore={bestScore}  />
        <br />
        <br />
      <PokemonList clickedPokemons={clickedPokemons} setClickedPokemons={setClickedPokemons} setBestScore={setBestScore} bestScore={bestScore} />
      </>
  );
      
}

export default App
