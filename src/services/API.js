//API functions separated out

//API key is stored in a react env variable
const ID = process.env.REACT_APP_CAT_API_ID;
const configObj = {
  headers: {
    "x-api-key": ID
  }
};

const getImage = async breedID => {
  return await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedID}`,
    configObj
  )
    .then(resp => resp.json())
    .then(json => json[0].url);
};

//Handles retrieval from API
const getBreeds = async () => {
  return await fetch(
    "https://api.thecatapi.com/v1/breeds",
    configObj
  ).then(resp => resp.json());
};

export default { getBreeds, getImage };
