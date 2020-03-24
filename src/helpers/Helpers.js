const createTemperamentList = (
  breeds,
  tempTemperaments,
  tempAttrHash,
  tempLinks
) => {
  breeds.forEach(breed => {
    const comparisonArray = formatString(breed.temperament);
    comparisonArray.forEach(temperament => {
      //Set children
      breed.children
        ? (breed.children = [...breed.children, temperament])
        : (breed.children = []);

      //Set Hash
      tempAttrHash[breed.id]
        ? tempAttrHash[breed.id].push(temperament)
        : (tempAttrHash[breed.id] = []);

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
