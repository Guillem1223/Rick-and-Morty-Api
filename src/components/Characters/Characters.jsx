import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function Characters({ character }) {
  const navigate = useNavigate();
  const selectCharacter = (character) => {
    navigate(`/character/${character.id}`);
  };
  return (
    <div>
      <div className="card" style={{ width: "13rem" }}>
        <img src={character.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <button
            onClick={() => selectCharacter(character)}
            className="btn btn-primary text-white"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
}

Characters.propTypes = {};

export default Characters;
