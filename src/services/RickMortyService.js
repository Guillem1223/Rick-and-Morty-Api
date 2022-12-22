import axios from "axios";

export const RickMortyService = {};

RickMortyService.getAllCharacters = async (page = 1) => {
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

  return await axios.get(apiUrl);
};

RickMortyService.getSingleCharacter = async (id) => {
  const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  return await axios.get(apiUrl);
};

RickMortyService.getLocation = async (id) => {
  const apiUrl = `https://rickandmortyapi.com/api/location/${id}`;

  return await axios.get(apiUrl);
};
