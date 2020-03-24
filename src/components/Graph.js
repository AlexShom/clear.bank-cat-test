import React from "react";
import ForceGraph2d from "react-force-graph-2d";
import canvasCallback from "../helpers/CanvasCallback";
import CanvasCallback from "../helpers/CanvasCallback";

const Graph = () => {
  const cats = {
    nodes: [
      {
        alt_names: "",
        experimental: 0,
        hairless: 0,
        hypoallergenic: 0,
        // id: "abys",
        id: 2345,
        life_span: "14 - 15",
        name: "Abyssinian",
        natural: 1,
        origin: "Egypt",
        rare: 0,
        reference_image_id: null,
        rex: 0,
        short_legs: 0,
        suppressed_tail: 0,
        temperament: "Active, Energetic, Independent, Intelligent, Gentle",
        weight_imperial: "7  -  10",
        wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)"
      },
      {
        alt_names: "",
        experimental: 0,
        hairless: 0,
        hypoallergenic: 0,
        // id: "aege",
        id: 123,
        life_span: "9 - 12",
        name: "Aegean",
        natural: 0,
        origin: "Greece",
        rare: 0,
        reference_image_id: null,
        rex: 0,
        short_legs: 0,
        suppressed_tail: 0,
        temperament: "Affectionate, Social, Intelligent, Playful, Active",
        weight_imperial: "7 - 10",
        wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat"
      }
    ],
    links: []
  };

  return (
    <ForceGraph2d
      graphData={cats}
      nodeLabel="id"
      nodeCanvasObject={CanvasCallback}
    />
  );
};

export default Graph;
