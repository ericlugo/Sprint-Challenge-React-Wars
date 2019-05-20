import React from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = (props) => {
  return props.characterList.map((character) => <Character characterInfo={character} />);
};

export default CharacterList;
