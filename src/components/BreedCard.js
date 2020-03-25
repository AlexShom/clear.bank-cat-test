import React from "react";

const BreedCard = ({ selected }) => {
  if (selected && selected.weight) {
    const { name } = selected;
    return (
      <div style={{ minHeight: "200px" }}>
        <h1>HIIIIIII</h1>
        <h4>{name}</h4>
      </div>
    );
  } else {
    return (
      <div style={{ minHeight: "200px" }}>
        <h1>No breed selected!</h1>
      </div>
    );
  }
};

export default BreedCard;
