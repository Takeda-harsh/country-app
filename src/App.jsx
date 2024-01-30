/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import Countries from './components/countries'
import './App.css'
import './Dark.css'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
    <div>
    <Countries darkMode={darkMode}
     toggleDarkMode={toggleDarkMode}/>
    </div>
     
    </>
  )
}

export default App
