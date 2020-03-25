import React, { useState, useEffect } from "react";
import API from "../services/API";

const BreedCard = ({ selected }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selected && selected.weight)
      API.getImage(selected.id).then(url => setImage(url));
    return () => {
      setImage(null);
    };
  }, [selected]);

  const format = key => {
    return key.replace("_", " ").replace(/^\w/, c => c.toUpperCase());
  };

  if (selected && selected.weight) {
    const list = Object.keys(selected)
      .slice(3, -8)
      .map(key => (
        <li key={key.id + String(Math.random())}>
          {`${format(key)}: ${selected[key]}`}
        </li>
      ));

    return (
      <div className="row">
        <div className="column left">
          <img src={image} style={{ width: "100%" }}></img>
        </div>
        <div className="column right">
          <h2>{selected.name}</h2>
          <p>{selected.description}</p>
          <ul style={{ textAlign: "left" }}>{list}</ul>
        </div>
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
