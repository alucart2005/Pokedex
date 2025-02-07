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
    <div className='flex flex-col items-center justify-center'>
      <div
        className='absolute top-0 left-0 right-0 bottom-0'
        onClick={() => setIsVisible(false)}
      ></div>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-6xl'>Welcome ! {userName}</h1>
        <p className='text-6xl text-center'>to the </p>
        <p className='text-6xl text-center'> POKEDEX</p>
      </div>
      <input
        className='h-10 rounded-xl text-center z-50 mt-4'
        list='pokemon'
        name='pokemon'
        placeholder='search pokemon'
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <div className='z-[60]'>
        <datalist id='pokemon'>
          {pokemon.map((pok) => (
            <option value={pok.name} key={pok.name}></option>
          ))}
        </datalist>
      </div>
      <button
        className='btn btn-outline dark:text-white z-50 mt-4 mb-4'
        onClick={changePokemonName}
      >
        shearch
      </button>
      <select
        className='input input-bordered input-info w-40 max-w-xs dark:text-white z-50 mb-4'
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
      <section className='mt-6'>
        <ul className='text-4xl w-50 h-50 md:grid grid-cols-4 gap-5'>
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
