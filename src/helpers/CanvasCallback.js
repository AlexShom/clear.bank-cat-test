// Callback funtion to draw the custom SVG text for each graph node (default is a circle) color is varied for temperament vs breed

const CanvasCallback = ({ id, name, weight, x, y }, ctx, globalScale) => {
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

export default { CanvasCallback };
