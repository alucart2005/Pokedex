import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InputName from './page/InputName'
import Pokedex from './page/Pokedex'
import PokedexDetails from './page/PokedexDetails'
import ProtectedRoutes from './page/ProtectedRoutes'
import ThemeDark from './components/ThemeDark'
import { useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <div >
      {/* <ThemeDark /> */}
      <HashRouter >
        <Routes>
          <Route path='/' element={<InputName />} />
          <Route element={<ProtectedRoutes />}>
            <Route
              path='/pokedex'
              element={
                <Pokedex isVisible={isVisible} setIsVisible={setIsVisible} />
              }
            />
            <Route path='/pokedex/:id' element={<PokedexDetails />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
