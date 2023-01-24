import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pokeball from '../assets/gifs/pokeball.gif'

const PokedexDetails = () => {
  const [pokemon, setPokemon] = useState({})
  const [add, setAdd] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data))
  }, [id])

  console.log(pokemon)

  const type2 = pokemon.types?.[1]?.type.name
  const ability2 = pokemon.abilities?.[1]?.ability.name

  //flex flex-col text-center justify-center items-center h-screen gap-6

  return (

<div class="container">
  {!add ? (
    <img
      class="pokeball"
      onClick={() => setAdd(true)}
      src={pokeball}
      alt='pokeball'
    />
  ) : (
    <div class="pokemon-container">
      <div class="close-button" onClick={() => setAdd(false)}></div>
      <div class="pokemon-info">
        <img class="pokemon-image" src={pokemon.sprites?.other.home?.front_default} alt='poke'/>
        <h1 class="pokemon-name">{pokemon.name}</h1>
        <div class="pokemon-detail">
          <h2 class="detail-title">Weight</h2>
          <p class="detail-value">{pokemon.weight}</p>
        </div>
        <div class="pokemon-detail">
          <h2 class="detail-title">Height</h2>
          <p class="detail-value">{pokemon.height}</p>
        </div>
        <div class="pokemon-detail">
          <h2 class="detail-title">Type</h2>
          <div class="type-container">
            <p class="type-value">{pokemon.types?.[0].type.name}</p>
            <p class="type-value">{pokemon.types?.[1]?.type.name ? `${type2}` : ''}</p>
          </div>
        </div>
        <div class="pokemon-detail">
          <h2 class="detail-title">Abilities</h2>
          <div class="abilities-container">
            <p class="ability-value">{pokemon.abilities?.[0].ability.name}</p>
            <p class="ability-value">{pokemon.abilities?.[1]?.ability.name ? `${ability2}` : ''}</p>
          </div>
        </div>
        <h2 class="detail-title">Stats</h2>
        <label class="stat-label" htmlFor='HP'>HP</label>
        <progress class="stat-bar" id='HP' max='150' value={pokemon.stats?.[0].base_stat} ></progress>
        <p class="stat-value">{pokemon.stats?.[0].base_stat}/150</p>
        <label class="stat-label" htmlFor='Atack'>Atack</label>
        <progress class="stat-bar" id='Atack' max='150' value={pokemon.stats?.[1].base_stat} ></progress>
        <p class="stat-value">{pokemon.stats?.[1].base_stat}/150</p>
        <label class="stat-label" htmlFor='Defense'>Defense</label>
        <progress class="stat-bar" id='Defense' max='150' value={pokemon.stats?.[2].base_stat} ></progress>
        <p class="stat-value">{
pokemon.stats?.[2].base_stat}/150</p>
<label class="stat-label" htmlFor='Speed'>Speed</label>
<progress class="stat-bar" id='Speed' max='150' value={pokemon.stats?.[5].base_stat} ></progress>
<p class="stat-value">{pokemon.stats?.[5].base_stat}/150</p>
</div>
<div class="movements-container">
<input class="checkbox" type='checkbox' />
<div class="movements-title">Movements</div>
<div class="movements-list">
{pokemon.moves?.map((poke) => (
<div class="movement-item" key={poke.move.name}>
<button class="movement-button" >{poke.move.name}</button>
</div>
))}
</div>
</div>
</div>
)}
</div>



  )
}

export default PokedexDetails
