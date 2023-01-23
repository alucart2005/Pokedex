import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { newname } from '../store/slice/name.slice'
import inicio from '../assets/image/inicio.jpeg'

// import ash from '../video/ash.mp4'

const InputName = () => {
  // const [userName, setUserName] = useState('')
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const hamdleSubmit = (e) => {
        e.preventDefault()
        dispatch( newname(e.target[0].value) )
        navigate( '/pokedex' )
       }

  

  return (
    <div className='card' >
      <img src={inicio} width='350px' alt='pokedex' />
     
      <h2 >Hello Trainer !</h2>
      <h3 >Give me your name to start...</h3>

      <form action="" onSubmit={ (e) => hamdleSubmit(e)}>
      <input
        
        type='text'
        
      />
      </form>
    </div>
  )
}

export default InputName
