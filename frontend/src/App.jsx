
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './components/Login'
import SignupPage from './components/Signup'
import LandingPage from './components/LandingPage'
import Dashboard from './components/dashboard'
import {NextUIProvider} from "@nextui-org/system";

function App() {
  return (
    <>
<NextUIProvider>
    <Router>
      <Routes>
        <Route path='/' index element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </Router>
        </NextUIProvider>
    </>
  )
}
export default App
