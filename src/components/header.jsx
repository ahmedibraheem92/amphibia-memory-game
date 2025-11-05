import { useState } from "react";
import './header.css'
const Header = ({ clickedPokemons, bestScore }) => {
    
    return (
        <>
        <header className="d-flex-between" >
            <h1>Amphibia Memory Game</h1>
            <ul>
                <li>Score: {clickedPokemons.length} </li>
                <li>Best Score: {bestScore} </li>
            </ul>
        </header>
            <p className="m-auto fit-content fs-7 fw-bold">Get points by clicking on an image but don't click on any more than once!
</p>
        </>
    );
};

export default Header;
