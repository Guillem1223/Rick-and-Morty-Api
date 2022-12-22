import React, { useEffect, useState } from "react";
import Characters from "../../components/Characters/Characters";
import { RickMortyService } from "../../services/RickMortyService";
import "./CaractersList.scss";
export function CharactersList() {
  // HOOKS
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    RickMortyService.getAllCharacters().then((res) => {
      setCharacters(res.data.results);
    });
  }, []);
  try {
    // FUNCTIONS
    const getAllCharacters = async () => {
      const res = await RickMortyService.getAllCharacters();
      setCharacters(res.data.results);
    };
  } catch (error) {
    console.log(error.message || error);
  }
  const selectCharacter = (character) => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div>
      <h1>CharactersList</h1>
      <div className="CharactersList">
        {characters.length > 0 &&
          characters.map((char) => (
            <Characters character={char} key={char.id} />
          ))}
      </div>
    </div>
  );
}
