import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <section className='character-card'>
      <header>
        <h1>{props.characterInfo.name}</h1>
        <p>Born: {props.characterInfo.birth_year}</p>
        <p className='gender'>Gender: {props.characterInfo.gender}</p>
      </header>
      <ul>
        <p>General Stats:</p>
        <li>Mass: {props.characterInfo.mass}</li>
        <li>Height: {props.characterInfo.height}</li>
        <li>Skin Color: {props.characterInfo.skin_color}</li>
        <li>Hair Color: {props.characterInfo.hair_color}</li>
        <li>Eye Color: {props.characterInfo.eye_color}</li>
      </ul>
    </section>
  );
};

export default Character;
