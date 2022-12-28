import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Pokemon.css";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [display, setDisplay] = useState();
  const [query, setQuery] = useState("");

  const getPoke = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=251"
    );
    if (data) {
      setPokemon(data.results);
      setDisplay(data.results);
    }
  };

  const filteredPokemons = () => {
    const filtered = pokemon.filter((p) =>
      p.name.toLowerCase().includes(query)
    );
    setDisplay(filtered);
    setQuery("");
    console.log(display);
  };

  useEffect(() => {
    getPoke();
  }, []);

  return (
    <div>
      <h1 className="header">Pokemon API</h1>
      <div className="head">Pokemon Names</div>
      <div className="search">
        <input
          type="text"
          placeholder={"Search by entering names"}
          className={"input"}
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
        <button onClick={filteredPokemons} className="btn ">
          Go
        </button>
      </div>
      click on the name to get more details
      <div className="table">
        {display ? (
          display.map((p) => (
            <Link to={`/${p.name}`} className="name">
              {p.name}
            </Link>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
