import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Graph from "./components/Graph";
import API from "./services/API";
import Helpers from "./helpers/Helpers";

const App = () => {
  const [attrHash, setAttrHash] = useState({});
  const [dimensions, setDimensions] = useState({});
  const [data, setData] = useState({ nodes: [], links: [] });
  const [resetData, setResetData] = useState({ nodes: [], links: [] });
  let tempTemperaments = [];
  let tempLinks = [];
  let tempAttrHash = {};

  const boxRef = useRef();

  const handleNodes = () => {
    return API.getBreeds()
      .then(breeds => {
        return breeds;
      })
      .then(breeds =>
        Helpers.createTemperamentList(
          breeds,
          tempTemperaments,
          tempAttrHash,
          tempLinks
        )
      )
      .then(({ temps, hash, breeds, links }) => {
        setAttrHash(hash);
        setData({ nodes: [...breeds, ...temps], links: links });
        setResetData({ nodes: [...breeds, ...temps], links: links });
      });
  };

  useEffect(() => {
    handleNodes();
    setDimensions({
      width: boxRef.current.clientWidth,
      height: boxRef.current.clientHeight
    });
  }, []);

  const handleNodeClick = node => {
    if (node.weight) {
      let children = node.children.map(child => {
        return { id: child, name: child };
      });
      // setLinks([]);
      // setBreeds([node]);
      // setTemperaments(children);
      // setLinks([]);
      // setBreeds([node]);
    } else {
      console.log(node);
    }
  };

  const handleOutClick = () => {
    // setBreeds(tempBreeds);
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
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
