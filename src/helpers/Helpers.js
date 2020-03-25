//Main processing function handles formatting, manipulation and returns variables ready for state change

const createTemperamentList = (
  breeds,
  tempTemperaments,
  tempAttrHash,
  tempLinks,
  tempNodeHash
) => {
  breeds.forEach(breed => {
    const comparisonArray = formatString(breed.temperament);
    comparisonArray.forEach(temperament => {
      //Set Hashes
      if (!tempAttrHash[temperament]) tempAttrHash[temperament] = [];
      tempAttrHash[temperament].push(breed.name);

      if (!tempNodeHash[breed.name]) tempNodeHash[breed.name] = [];
      tempNodeHash[breed.name].push(temperament);

      //Add links
      if (comparisonArray.includes(temperament)) {
        tempLinks.push({ source: breed.id, target: temperament });
      }

      //Return if already included else add
      if (tempTemperaments.map(temp => temp.id).includes(temperament)) return;
      else tempTemperaments.push({ id: temperament, name: temperament });
    });
  });
  return {
    temps: tempTemperaments,
    hash: tempAttrHash,
    nodeHash: tempNodeHash,
    breeds: breeds,
    links: tempLinks
  };
};

//Helper to take the temperament string and convert it into an array
const formatString = string => {
  return string
    .replace(/\s/g, "")
    .toUpperCase()
    .split(",");
};

//Helper to find a specific breed in out stored list for selection
const findBreed = (breedID, resetData) => {
  return resetData.nodes.find(
    node => node.id === breedID || node.name === breedID
  );
};

export default { createTemperamentList, findBreed };
