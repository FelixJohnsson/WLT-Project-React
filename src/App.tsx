import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'
import { Home } from './Pages/Home/Home'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App
