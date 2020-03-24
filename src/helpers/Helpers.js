const createTemperamentList = (breeds, tempTemperaments, tempAttrHash) => {
  breeds.forEach(breed =>
    formatString(breed.temperament).forEach(temperament => {
      breed.children
        ? (breed.children = [...breed.children, temperament])
        : (breed.children = []);

      tempAttrHash[breed.id]
        ? tempAttrHash[breed.id].push(temperament)
        : (tempAttrHash[breed.id] = []);

      if (tempTemperaments.map(temp => temp.id).includes(temperament)) return;
      else tempTemperaments.push({ id: temperament });
    })
  );
  return { temps: tempTemperaments, hash: tempAttrHash };
};

const formatString = string => {
  return string
    .replace(/\s/g, "")
    .toUpperCase()
    .split(",");
};

export default { createTemperamentList, formatString };
