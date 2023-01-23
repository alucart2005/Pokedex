import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CharacterPokemon = ({ url }) => {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data))
  }, [])
  const type2 = character.types?.[1]?.type.name
  console.log(character)
  return (
    <Link to={`/pokedex/${character.id}/`}>
      <section >
        <figure >
          <img
            src={character.sprites?.other.home.front_default}
            alt='pokemon'
            
          />
        </figure>

        <h1>{character.name}</h1>
        <p>
          {character.types?.[0].type.name}
          {character.types?.[1]?.type.name ? ` / ${type2}` : ''}
        </p>
        <p>Type</p>
        <div >
          <div >
            <h3>HP</h3>
            <p>{character.stats?.[0].base_stat}</p>
          </div>
          <div >
            <h3>STACK</h3>
            <p>{character.stats?.[1].base_stat}</p>
          </div>
          <div >
            <h3>DEFENSE</h3>
            <p>{character.stats?.[2].base_stat}</p>
          </div>
          <div >
            <h3>SPEED</h3>
            <p>{character.stats?.[5].base_stat}</p>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default CharacterPokemon
