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
    <div>
      {!add && (
        <div >
          <img
            onClick={() => setAdd(true)}
            src={pokeball}
           
            alt='pokeball1'
          />
        </div>
      )}

      {add && (
        <div>
          <div
           
            onClick={() => setAdd(false)}
          ></div>

          <div>
            <div >
              {/* <img src={pokeball} alt='pokeball1' /> */}
              <img
                src={pokemon.sprites?.other.home?.front_default}
                alt='poke'
              />
              <h1 >
                {pokemon.name}
              </h1>
            </div>
            <div >
              <div >
                <h2 >Weight</h2>
                <p >
                  <span >
                    {pokemon.weight}
                  </span>
                </p>
              </div>
              <div>
                <h2 >Height</h2>
                <p >
                  <span >
                    {' '}
                    {pokemon.height}
                  </span>
                </p>
              </div>
              <div>
                <h2 >Type</h2>
                <div >
                  <p>
                    {' '}
                    {pokemon.types?.[0].type.name}
                  </p>
                  <p >
                    {' '}
                    {pokemon.types?.[1]?.type.name ? `${type2}` : ''}
                  </p>
                </div>
              </div>
              <div >
                <h2 >Abilities</h2>
                <div >
                  <p >
                    {' '}
                    {pokemon.abilities?.[0].ability.name}
                  </p>
                  <p>
                    {pokemon.abilities?.[1]?.ability.name ? `${ability2}` : ''}
                  </p>
                </div>
              </div>
            </div>
            <div >
              <h2 >Stats</h2>
            </div>
            <div >
              <label htmlFor='HP'>HP</label>
              <progress
                
                id='HP'
                max='150'
                value={pokemon.stats?.[0].base_stat}
              ></progress>
              <p >{pokemon.stats?.[0].base_stat}/150</p>
              <label htmlFor='Atack'>Atack</label>
              <progress
                
                id='Atack'
                max='150'
                value={pokemon.stats?.[1].base_stat}
              >
                {' '}
              </progress>
              <p >{pokemon.stats?.[1].base_stat}/150</p>
              <label htmlFor='Defense'>Defense</label>
              <progress
                
                id='Defense'
                max='150'
                value={pokemon.stats?.[2].base_stat}
              >
                {' '}
              </progress>
              <p >{pokemon.stats?.[2].base_stat}/150</p>
              <label htmlFor='Speed'>Speed</label>
              <progress
               
                id='Speed'
                max='150'
                value={pokemon.stats?.[5].base_stat}
              >
                {' '}
              </progress>
              <p >{pokemon.stats?.[5].base_stat}/150</p>
            </div>
          </div>

          {/* inicia el despliege */}
          <div >
            <input type='checkbox'  />
            <div >
              Movements
            </div>
            <div >
              {pokemon.moves?.map((poke) => (
                <div key={poke.move.name} >
                  <button
                    
                    key={poke.move.name}
                  >
                    {poke.move.name}
                  </button>
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
