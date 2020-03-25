import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Graph from "./components/Graph";
import API from "./services/API";
import Helpers from "./helpers/Helpers";
import BreedCard from "./components/BreedCard";

const App = () => {
  //State Hashes to keep track of relationships
  const [attrHash, setAttrHash] = useState({});
  const [nodeHash, setNodeHash] = useState({});
  //State to keep track of window size for styling
  const [dimensions, setDimensions] = useState({});
  //State to store selected breed
  const [selected, setSelected] = useState(null);
  //State to handle chart data storage
  const [data, setData] = useState({ nodes: [], links: [] });
  const [resetData, setResetData] = useState({ nodes: [], links: [] });

  //Temp variables for precessing data, allowing for state change in one action
  //improves chart performance
  let tempTemperaments = [];
  let tempLinks = [];
  let tempAttrHash = {};
  let tempNodeHash = {};

  //Ref to acess parent div for dimensions
  const boxRef = useRef();

  //Main function for intiating data retrieval/processing
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
          tempLinks,
          tempNodeHash
        )
      )
      .then(({ temps, hash, nodeHash, breeds, links }) => {
        setAttrHash(hash);
        setNodeHash(nodeHash);
        setData({ nodes: [...breeds, ...temps], links: links });
        setResetData({ nodes: [...breeds, ...temps], links: links });
      });
  };

  //Hook version of componentDidMount
  useEffect(() => {
    handleNodes();
    setDimensions({
      width: boxRef.current.clientWidth,
      height: boxRef.current.clientHeight
    });
  }, []);

  //Handle chart data manipulation on node click
  const handleNodeClick = node => {
    if (node.weight) {
      let collection = nodeHash[node.name];
      let children = collection.map(child => {
        return { id: child, name: child };
      });
      let links = collection.map(child => {
        return { source: node.id, target: child };
      });
      setData({ nodes: [...children, node], links: links });
    } else {
      let collection = attrHash[node.id];
      let parents = collection.map(parent => {
        return { id: parent, name: parent, weight: 1 };
      });
      let parentLinks = collection.map(parent => {
        return { source: node.id, target: parent };
      });
      setData({ nodes: [...parents, node], links: parentLinks });
    }
    setSelected(Helpers.findBreed(node.id, resetData));
  };

  //Handle chart reset after out click
  const handleOutClick = () => {
    setData(resetData);
    setSelected(null);
  };

  //Render JSX
  return (
    <div className="App">
      <header className="App-header">
        <h1>ClearBank - Cat breed temperament tool</h1>
        <h4 style={{ marginTop: "0px" }}>Created by Alexander Shomalistos</h4>
      </header>
      <div className="second-head">
        <h4>
          Try dragging a node! {<br />} Try clicking on a node! {<br />} Try
          zooming and dragging the canvas! {<br />}Reset by clicking on the
          canvas!
        </h4>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="row">
          <div className="column">
            <div className="box" ref={boxRef}>
              <Graph
                handleOutClick={handleOutClick}
                handleNodeClick={handleNodeClick}
                dimensions={dimensions}
                data={data}
              />
            </div>
          </div>
          <div className="column">
            <BreedCard selected={selected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
