import React from "react";
import ForceGraph2d from "react-force-graph-2d";
import CanvasCallback from "../helpers/CanvasCallback";

const Graph = ({ data, dimensions }) => {
  return (
    <ForceGraph2d
      width={dimensions.width}
      height={dimensions.height}
      d3Force="link"
      graphData={data}
      nodeLabel="name"
      nodeCanvasObject={CanvasCallback}
      onNodeClick={(node, e) => console.log(node)}
      linkCanvasObject={(node, ctx) => {
        ctx.strokeStyle = "#565656";
        ctx.beginPath();
        ctx.moveTo(node.target.x, node.target.y);
        ctx.lineTo(node.source.x, node.source.y);
        ctx.stroke();
      }}
    />
  );
};

export default Graph;
