import "../assets/styles/CompanyPage.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnnualProfitLoss } from "../components/AnnualProfitLoss";
import { EmployeeSection } from "../components/EmployeeSection";
import { IncomingPayments } from "../components/IncomingPayments";
import { AllExpenses } from "../components/AllExpenses";



export function CompanyPage() {
    const [method, setMethods] = useState(null);
    function handleClick(e) {
        e.preventDefault();
        setMethods(e.target.name)
    }

    return (
        <>
            <main className="row">
                <div
                    className="sidebar d-flex flex-column flex-shrink-0 p-1 bg-dark-subtle col-4"
                >
                    <a
                        href="/company"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    >
                        <img src="img/ikolay-logo.svg" alt="logo" />

                    </a>
                    <span className="fs-2">Yönetici</span>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto col-md">
                        <li className="nav-item">
                            <a href="#" name="employees" className="nav-link link-body-emphasis " onClick={handleClick} >
                                Personel Listesi
                            </a>
                        </li>
                        <li>
                            <a href="#" name="yearly-profit-and-loss" className="nav-link link-body-emphasis" onClick={handleClick} >
                                Yıllık Kar & Zarar Bilgisi
                            </a>
                        </li>
                        <li>
                            <a href="#" name="all-company-loss" className="nav-link link-body-emphasis" onClick={handleClick}>
                                Toplam Gider Bilgisi
                            </a>
                        </li>
                        <li>
                            <a href="#" name="incoming-payment" className="nav-link link-body-emphasis" onClick={handleClick}>
                                Yaklaşan Ödemelerim
                            </a>
                        </li>
                        <li>
                            <a href="#" name="holidays" className="nav-link link-body-emphasis" onClick={handleClick}>
                                Tatil Ekle / Personel İzin Ekle
                            </a>
                        </li>
                    </ul>
                    <hr />
                </div>
                <div className="col-8 d-flex align-items-center justify-content-center">
                    {method === null && <WelcomeToDashboard />}
                    {method === "employees" && <EmployeeSection />}
                    {method === "yearly-profit-and-loss" && <AnnualProfitLoss />}
                    {method === "all-company-loss" && <AllCompanyLoss />}
                    {method === "incoming-payment" && <IncomingPayments />}
                    {method === "holidays" && <Holidays />}

                </div>

            </main>

        </>

    )
}

function WelcomeToDashboard() {
    return (
        <div style={{ display: "block" }}>
            <h1>HOŞGELDİNİZ </h1>

            <h2>BUGÜN SİZİN İÇİN NE YAPALIM?</h2>
        </div>
    )
}


function AllCompanyLoss() {

    return (
       <AllExpenses/>
    )
}


function Holidays() {

    return (
        <>
            <h1>Hello Holidays</h1>
        </>
    )
}

