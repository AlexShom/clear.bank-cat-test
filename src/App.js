import React, { useEffect, useState } from "react";
import "./App.css";
import Graph from "./components/Graph";
import API from "./services/API";
import Helpers from "./helpers/Helpers";

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [temperaments, setTemperaments] = useState([]);
  const [links, setLinks] = useState([]);
  const [attrHash, setAttrHash] = useState({});
  let tempTemperaments = [];
  let tempLinks = [];
  let tempAttrHash = {};

  const handleNodes = () => {
    API.getBreeds()
      .then(breeds => {
        setBreeds(breeds);
        return breeds;
      })
      .then(breeds =>
        Helpers.createTemperamentList(breeds, tempTemperaments, tempAttrHash)
      )
      .then(({ temps, hash }) => {
        setAttrHash(hash);
        setTemperaments(temps);
      });
  };

  const handleLinks = () => {
    breeds.forEach(breed => {
      const comparisonArray = Helpers.formatString(breed.temperament);
      comparisonArray.forEach(temperament => {
        if (comparisonArray.includes(temperament)) {
          tempLinks.push({ source: breed.id, target: temperament });
        }
      });
    });
    setLinks(tempLinks);
  };

  useEffect(() => {
    handleNodes();
  }, []);

  useEffect(() => {
    handleLinks();
  }, [breeds]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ClearBank - Cat API</h1>
        <h4 style={{ marginTop: "0px" }}>Created by Alexander Shomalistos</h4>
      </header>
      <Graph data={{ nodes: [...breeds, ...temperaments], links: links }} />
    </div>
  );
};

export default App;
