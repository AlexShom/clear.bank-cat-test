// Callback funtion to draw the custom SVG for each graph node

const CanvasCallback = ({ id, name, x, y }, ctx, globalScale) => {
  // If node is <breed> draw circle else if node is <temperament> draw text
  if (name) {
    (() => {
      ctx.fillStyle = "#3684E1";
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, 2 * Math.PI, false);
      ctx.fill();
    })();
  } else {
    (() => {
      const label = id;
      const fontSize = 12 / globalScale;
      ctx.font = `${fontSize}px Sans-Serif`;
      const textWidth = ctx.measureText(label).width;
      const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
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

export default CanvasCallback;