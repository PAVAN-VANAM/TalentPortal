
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import LandingPage from './components/LandingPage'
import Dashboard from './components/dashboard'
import {NextUIProvider} from "@nextui-org/system";
import ProfileForm from './components/ProfileForm'
function App() {
  return (
    <>
     <ProfileForm/>
    </>
  )
}
export default App
