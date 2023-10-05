
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/01-HomePage'
import { RegisterPage } from './pages/02-RegisterPage'
import { CompanyPage } from './pages/04-CompanyPage'
import LoginPage from './pages/03-LoginPage'
import AdminPage from './pages/05-AdminPage'
import EmployeePage from './pages/06-EmployeePage'
import { Redirect } from './components/RedirectPage'
import { useState } from 'react'
import { CompanyReviewForGuest } from './components/CompanyReviewForGuest'


function App() {
    const [searchCompany, setSearchCompany] = useState("");
    return (
        <Routes>
            <Route path="/" element={<HomePage setSearchCompany={setSearchCompany} searchCompany={searchCompany}/>} />
            <Route path="/search" element={<CompanyReviewForGuest searchCompany={searchCompany} setSearchCompany={setSearchCompany}/>}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/employee" element={<EmployeePage />} />
            <Route path="/redirect" element={<Redirect />} />
        </Routes>

    )
}
export default App
