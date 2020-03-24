import React from "react";
import ForceGraph2d from "react-force-graph-2d";
import Draws from "../helpers/CanvasCallback";

const Graph = ({ data, dimensions }) => {
  return (
    <ForceGraph2d
      width={dimensions.width}
      height={dimensions.height}
      d3Force="link"
      graphData={data}
      nodeLabel="name"
      nodeCanvasObject={Draws.CanvasCallback}
      onNodeClick={(node, e) => console.log(node)}
      linkCanvasObject={Draws.LinkCallback}
    />
  );
};

export default Graph;
