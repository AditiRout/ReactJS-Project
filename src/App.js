import "./App.css";
import { React } from "react";
import Pokemon from "./Pokemons/Pokemon";
import { Route, Routes } from "react-router-dom";
import Search from "./Search/Search";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Pokemon/>}/>
        <Route exact path=":name" element={<Search /> }/>
      </Routes>
    </div>
  );
}

export default App;
