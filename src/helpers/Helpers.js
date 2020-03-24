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
      //Set children
      if (!breed.children) breed.children = [];
      breed.children = [...breed.children, temperament];

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

    // setData({ ...data, links: tempLinks });
  });
  return {
    temps: tempTemperaments,
    hash: tempAttrHash,
    nodeHash: tempNodeHash,
    breeds: breeds,
    links: tempLinks
  };
};

const formatString = string => {
  return string
    .replace(/\s/g, "")
    .toUpperCase()
    .split(",");
};

export default { createTemperamentList };
