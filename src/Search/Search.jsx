import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Search.css";
import axios from "axios";
import { useEffect } from "react";

const Search = () => {
  const [poke, setPoke] = useState({});
  const [abilities, setAbility] = useState([]);
  const [type, setType] = useState([]);
  let params = useParams();
  const fetchData = async () => {
    const data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    if (data) {
      setPoke(data.data);
      setAbility(poke.abilities);
      setType(poke.types);
    }
  };
  useEffect(() => {
    fetchData();
  }, [poke, abilities, type]);

  return (
    <div>
      <h2>{params.name}</h2>
      {poke && abilities && type ? (
        <div className="infoContainer">
          <div className="abilities">
            <h2>Abilities</h2>
            <div className="details">
              {abilities.map((a) => (
                <h4>{a.ability.name}</h4>
              ))}
            </div>
          </div>
          <div className="abilities">
            <h2>Type</h2>
            <div className="details">
              {type.map((a) => (
                <h4>{a.type.name}</h4>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Search;
