import React, { useState } from 'react'
import Home from './Home'
import Login from './Login'

export default function App() {
  const [user, setUser] = useState({})

  return (
    <>
      { Object.keys(user).length == 0 ? <Login setUser={setUser}/> : <Home setUser={setUser}/>}
    </>
  )
}
