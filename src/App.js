import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Graph from "./components/Graph";
import API from "./services/API";
import Helpers from "./helpers/Helpers";

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [temperaments, setTemperaments] = useState([]);
  const [links, setLinks] = useState([]);
  const [attrHash, setAttrHash] = useState({});
  const [dimensions, setDimensions] = useState({});
  const [tempBreeds, setTempBreeds] = useState([]);
  let tempTemperaments = [];
  let tempLinks = [];
  let tempAttrHash = {};

  const boxRef = useRef();

  const handleNodes = () => {
    return API.getBreeds()
      .then(breeds => {
        setTempBreeds([...breeds]);
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
    handleNodes(tempBreeds);
    setDimensions({
      width: boxRef.current.clientWidth,
      height: boxRef.current.clientHeight
    });
  }, []);

  useEffect(() => {
    handleLinks();
  }, [breeds]);

  const handleNodeClick = node => {
    if (node.weight) {
      let children = node.children.map(child => {
        return { id: child, name: child };
      });
      setLinks([]);
      // setBreeds([node]);
      // setTemperaments(children);
      // setLinks([]);
      // setBreeds([node]);
    } else {
      console.log(node);
    }
  };

  const handleOutClick = () => {
    setBreeds(tempBreeds);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ClearBank - Cat API</h1>
        <h4 style={{ marginTop: "0px" }}>Created by Alexander Shomalistos</h4>
      </header>
      <div className="second-head">
        <h5>
          Try draging a node! {<br />} try clicking on a node! {<br />} Try
          zooming and moving the canvas
        </h5>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="box" ref={boxRef}>
          <Graph
            handleOutClick={handleOutClick}
            handleNodeClick={handleNodeClick}
            dimensions={dimensions}
            data={{ nodes: [...breeds, ...temperaments], links: links }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
