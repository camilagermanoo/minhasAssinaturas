import { Routes, Route } from 'react-router-dom'
import './index.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* App */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
