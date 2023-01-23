import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CharacterPokemon from '../components/CharacterPokemon'
import { useNavigate } from 'react-router-dom'
// import ChangePagination from '../assets/components/ChangePagination'
import Page from '../components/Page'

const Pokedex = ({ isVisible, setIsVisible }) => {
  const userName = useSelector((state) => state.username)
  const [pokemon, setPokemon] = useState([])
  const [pokemonName, setPokemonName] = useState('')
  const [tiposPokemon, setTiposPokemon] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
      .then((res) => setPokemon(res.data.results))

    axios
      .get(`https://pokeapi.co/api/v2/type/`)
      .then((res) => setTiposPokemon(res.data.results))
  }, [])

  const changePokemonName = () => {
    navigate(`/pokedex/${pokemonName.toLowerCase()}`)
  }
  const filterType = (e) => {
    axios.get(e.target.value).then((res) => setPokemon(res.data.pokemon))
  }

  // paginacion
  const [page, setPage] = useState(1)

  const pokemonItemPage = 20
  const lastIndex = page * pokemonItemPage
  const firtIndex = lastIndex - pokemonItemPage
  const pokemonPagination = pokemon.slice(firtIndex, lastIndex)
  const totalPage = Math.ceil(pokemon.length / pokemonItemPage)

  const array = []
  for (let i = 1; i <= totalPage; i++) {
    array.push(i)
  }
  console.log(pokemon)
  return (
    <div >
      <div
        
        onClick={() => setIsVisible(false)}
      ></div>
      <div >
        <h1 >Welcome ! {userName}</h1>
        <p >to the </p>
        <p > POKEDEX</p>
      </div>
      <input
        
        list='pokemon'
        name='pokemon'
        placeholder='search pokemon'
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <div >
        <datalist id='pokemon'>
          {pokemon.map((pok) => (
            <option value={pok.name} key={pok.name}></option>
          ))}
        </datalist>
      </div>
      <button
       
        onClick={changePokemonName}
      >
        shearch
      </button>
      <select
        
        onChange={filterType}
        name=''
        id='select'
      >
        {tiposPokemon.map((tipos) => (
          <option value={tipos.url} key={tipos.name}>
            {tipos.name}
          </option>
        ))}
      </select>
      {/* paginacion */}
      <Page
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        page={page}
        setPage={setPage}
        array={array}
        totalPage={totalPage}
      />

      {/* cierra paginacion */}
      <section >
        <ul >
          {pokemonPagination.map((pokemon) => (
            <CharacterPokemon
              url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
              key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            />
          ))}
        </ul>
      </section>
      <Page
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        page={page}
        setPage={setPage}
        array={array}
        totalPage={totalPage}
      />
    </div>
  )
}

export default Pokedex
