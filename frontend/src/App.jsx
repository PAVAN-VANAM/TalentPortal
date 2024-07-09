import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Dashboard from './components/dashboard'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' index element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </Router>

    </>
  )
}
export default App
