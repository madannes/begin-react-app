/* global fetch */
import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [message, setMessage] = useState('...loading')

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await (await fetch('/quotes/MSFT')).json()
        setMessage(data.message)
      } catch (err) {
        setMessage(err.message)
      }
    }
    fetchData()
  })

  return <div className='App'>{message}</div>
}

export default App
