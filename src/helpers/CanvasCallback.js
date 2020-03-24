const CanvasCallback = ({ id, x, y }, ctx) => {
  ctx.fillStyle = "#3684E1";
  if (!id) {
    (() => {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
      ctx.fill();
    })();
  } else {
    (() => {
      ctx.font = "10px Sans-Serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Text", x, y);
    })();
  }
};

export default CanvasCallback