
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/01-HomePage'
import { RegisterPage } from './pages/02-RegisterPage'
import { AnnualProfitLoss } from './components/AnnualProfitLoss'
import { AllExpenses } from './components/AllExpenses'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/design" element={<AnnualProfitLoss />} />
            <Route path="/design2" element={<AllExpenses />} />

        </Routes>
    )
}

export default App
