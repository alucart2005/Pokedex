import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { newname } from '../store/slice/name.slice'
import pokebola from '../assets/image/pokedex.png'
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

  // const dispatch = useDispatch()

  // const navigate = useNavigate()
  // const enterName = () => {
  //   dispatch(newname(userName))
  //   navigate('/pokedex')
  // }

  return (
    <div className='flex flex-col text-center justify-center items-center h-screen gap-6 z-50 '>
      <img src={pokebola} width='350px' alt='pokedex' />
      {/* <video
        src={ash}
        width='350px'
        height='350px'
        controls
        muted
        autoPlay
        className='rounded-xl'
      ></video> */}
      <h2 className='text-6xl dark:text-white '>Hello trainer!</h2>
      <h2 className='text-1xl dark:text-white '>give me your name to start</h2>

      <form action="" onSubmit={ (e) => hamdleSubmit(e)}>
      <input
        className='input input-bordered w-full max-w-xs dark:text-white'
        type='text'
        
      />
      </form>
    </div>
  )
}

export default InputName
