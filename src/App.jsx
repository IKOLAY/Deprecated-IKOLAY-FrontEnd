
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/01-HomePage'
import { RegisterPage } from './pages/02-RegisterPage'
import LoginPage from './pages/03-LoginPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}

export default App
