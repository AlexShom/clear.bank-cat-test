import React from "react";
import ForceGraph2d from "react-force-graph-2d";
import CanvasCallback from "../helpers/CanvasCallback";

const Graph = ({ data }) => {
  return (
    <ForceGraph2d
      graphData={data}
      nodeLabel="name"
      nodeCanvasObject={CanvasCallback}
      onNodeClick={(node, e) => console.log(node)}
    />
  );
};

export default Graph;
