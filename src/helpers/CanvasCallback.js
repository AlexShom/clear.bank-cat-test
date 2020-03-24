// Callback funtion to draw the custom SVG for each graph node

const CanvasCallback = ({ id, name, weight, x, y }, ctx, globalScale) => {
  // If node is <breed> draw circle else if node is <temperament> draw text
  if (weight) {
    (() => {
      const label = name;
      const fontSize = 12 / globalScale;
      ctx.font = `${fontSize}px Sans-Serif`;
      const textWidth = ctx.measureText(label).width;
      const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

      ctx.fillStyle = "rgb(255, 255, 255, 0.8)";
      ctx.fillRect(
        x - bckgDimensions[0] / 2,
        y - bckgDimensions[1] / 2,
        ...bckgDimensions
      );

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(31, 58, 147, 1)";
      ctx.fillText(label, x, y);
    })();
  } else {
    (() => {
      const label = id;
      const fontSize = 12 / globalScale;
      ctx.font = `${fontSize}px Sans-Serif`;
      const textWidth = ctx.measureText(label).width;
      const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

      ctx.fillStyle = "rgb(255, 255, 255, 0.8)";
      ctx.fillRect(
        x - bckgDimensions[0] / 2,
        y - bckgDimensions[1] / 2,
        ...bckgDimensions
      );

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#E10000";
      ctx.fillText(label, x, y);
    })();
  }
};

const LinkCallback = (node, ctx) => {
  ctx.strokeStyle = "#C0C0C0";
  ctx.beginPath();
  ctx.moveTo(node.target.x, node.target.y);
  ctx.lineTo(node.source.x, node.source.y);
  ctx.stroke();
};

export default { CanvasCallback, LinkCallback };
