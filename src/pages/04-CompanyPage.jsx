import "../assets/styles/CompanyPage.css";
import { useEffect, useState } from "react";
import { AnnualProfitLoss } from "../components/AnnualProfitLoss";
import { EmployeeSection } from "../components/EmployeeSection";
import { IncomingPayments } from "../components/IncomingPayments";
import { AllExpenses } from "../components/AllExpenses";
import { IncomeOutcomeMethod } from "../components/IncomeOutcomeMethod";
import { CompanyReviewForGuest } from "../components/CompanyReviewForGuest";
import { useSearchParams } from "react-router-dom";
import EmployeePage from "./06-EmployeePage";
import { NavLink } from "react-router-dom";
import { PublicHoliday } from "../components/PublicHoliday";
import { ShiftSystem } from "../components/ShiftSystem";
import { WarningMessage } from "../components/InfoMessages";


export function CompanyPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("companyName"));
    console.log(searchParams.get("logo"));
    console.log(searchParams.get("about"));
    console.log(searchParams.get("address"));
    const [method, setMethod] = useState(null);
    

    function handleClick(e) {
        e.preventDefault();
        setMethod(e.target.name)
    }

    function handlePageChange(e) {
        e.preventDefault();
        setMethod(e.target.name)
    }

    function handleLogout(e) {
        window.localStorage.clear("token")
        window.localStorage.clear("user")
    }


    return (
        <main className="company d-flex flex-row h-100">

            <div className=" sidebar d-flex flex-column flex-shrink-0 p-1 bg-dark-subtle bg-opacity-70">
                <a href="/company" className="d-flex justify-content-center link-body-emphasis text-decoration-none mb-3 p-1">
                    <img className="shadow-sm rounded bg-light p-2" src="img/ikolay-companyManager.svg" alt="logo" />
                </a>
                <hr />
                <div className="d-flex flex-column align-items-center p-5 m-3 bg-light bg-opacity-50 shadow-lg rounded">
                    <img className="rounded-circle" src="/img/ikolay-companypp.svg" width={50} alt="" />
                    <hr />
                    <p>ŞİRKET ADI</p>
                    <p>Yönetici Adı</p>
                    <p>Yönetici Email</p>
                    <p></p>
                </div>
                <ul className="nav nav-pills flex-column mb-auto col-md align-items-center">
                    <li className="nav-item">
                        <a href="#" name="employees" className="nav-link link-body-emphasis " onClick={handleClick} >
                            Personel Listesi
                        </a>
                    </li>
                    <li>
                        <a href="#" name="yearly-profit-and-loss" className="nav-link link-body-emphasis" onClick={handleClick} >
                            Kar & Zarar
                        </a>
                    </li>
                    <li>
                        <a href="#" name="all-company-loss" className="nav-link link-body-emphasis" onClick={handleClick}>
                            Toplam Gider
                        </a>
                    </li>
                    <li>
                        <a href="#" name="incoming-payment" className="nav-link link-body-emphasis" onClick={handleClick}>
                            Yaklaşan Ödemeler
                        </a>
                    </li>
                    <li>
                        <a href="#" name="employee-leave" className="nav-link link-body-emphasis" onClick={handleClick}>
                            Personel İzin Ekle
                        </a>
                    </li>
                    <li>
                        <a href="#" name="income-outcome-input" className="nav-link link-body-emphasis" onClick={handleClick}>
                            Harcama Ekle
                        </a>
                    </li>
                    <li>
                        <a href="#" name="shift-system" className="nav-link link-body-emphasis" onClick={handleClick}>
                            Vardiya Ekle / Ata
                        </a>
                    </li>
                    <li>
                        <a href="#" name="company-review" className="nav-link link-body-emphasis" onClick={handleClick}>
                            Şirket Yorum TEST
                        </a>
                    </li>
                </ul>
                <NavLink className="text-center btn btn-warning" to="/" onClick={handleLogout}>ÇIKIŞ YAP</NavLink>
                <hr />
            </div>

            <div className="d-flex flex-column h-100 w-100">

                <ul className="d-flex nav nav-tabs border-0 w-100 h-25">
                    <li className="nav-item  border border-bottom-0 rounded w-50">
                        <a className="nav-link text-white" name="company-page" href="/company" >
                            Şirket Sayfası
                        </a>
                    </li>
                    <li className="nav-item border rounded w-50">
                        <a className="nav-link text-white" name="employee-page" href="#" onClick={handlePageChange}>
                            Personel Sayfası
                        </a>
                    </li>
                </ul>

                <div className="tab-content w-100 d-flex justify-content-center align-items-center">
                    <div className="conditional-render pt-2 mt-5">
                        {method === null && <WelcomeToDashboard />}
                        {method === "employee-page" && <EmployeePage />}
                        {method === "employees" && <EmployeeSection />}
                        {method === "yearly-profit-and-loss" && <AnnualProfitLoss />}
                        {method === "all-company-loss" && <AllExpenses />}
                        {method === "incoming-payment" && <IncomingPayments />}
                        {method === "employee-leave" && <EmployeeLeave />}
                        {method === "income-outcome-input" && <IncomeOutcomeMethod />}
                        {method === "shift-system" && <ShiftSystem />}
                        {method === "company-review" && <CompanyReviewForGuest />}
                    </div>
                </div>
            </div>
        </main>
    )
}

function WelcomeToDashboard() {
    return (
        <>
            <h1 className="text-white">ŞİRKET YÖNETİM SAYFASINA HOŞGELDİNİZ </h1>
            <h2>Bugün sizin için ne yapmamızı istersiniz?</h2>
        </>
    )
}

function EmployeeLeave() {
    const [warningMessage, setWarningMessage] = useState(null);
    const user = JSON.parse(window.localStorage.getItem("user"));
    const defLeave = {
        leaveName: "",
        startingDate: "",
        duration: "",
        email: "",
        companyId: user.companyId,
    }

    const [newLeave, setNewLeave] = useState({ ...defLeave });



    function handleChange(e) {
        setNewLeave({ ...newLeave, [e.target.name]: e.target.value })
        setWarningMessage(null)

    }

    function handleSubmit() {
        const leaves = { ...newLeave }
        console.log(newLeave);
        console.log(leaves);
        if (newLeave.email == "") {
            leaves.email = null;
        }
        fetch(`http://localhost:80/leave/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(leaves)
        }).then
            (response => {
                console.log(response);
                setWarningMessage("İzin başarıyla kaydedilmiştir!")
                return response.json();
            }).then(data => {
                console.log(data);
                if (data.message)
                    throw new Error(data.message)
                setNewLeave({ ...defLeave })
            }).catch(err => {
                console.log(err)
                setWarningMessage(err.message)
            });
    }

    return (
        <div className="d-flex flex-column gap-2">
            <section className="d-flex flex-row gap-3">
                <button
                    type="button"
                    className="btn btn-lg btn-outline-primary w-50"
                    data-bs-toggle="modal"
                    data-bs-target="#modalHoliday"
                >+ Resmi Tatil</button>
                <button
                    type="button"
                    className="btn btn-lg btn-outline-primary w-50"
                    data-bs-toggle="modal"
                    data-bs-target="#modalLeave"
                >+ İzin</button>
            </section>
            <section
                className="modal fade"
                id="modalHoliday"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                Resmi Tatil Tanımla
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form typeof="submit" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="holidayName">Resmi Tatil Adı</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="holidayName"
                                        name="leaveName"
                                        value={newLeave.leaveName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startDate">Başlangıç Tarihi</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="startDate"
                                        name="startingDate"
                                        value={newLeave.startingDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="duration">Gün</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="duration"
                                        name="duration"
                                        value={newLeave.duration}
                                        onChange={handleChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Vazgeç
                            </button>
                            <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="modal fade"
                id="modalLeave"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                Personel İzin Tanımla
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form typeof="submit" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="holidayName">İzin Tipi</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="holidayName"
                                        name="leaveName"
                                        value={newLeave.leaveName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startDate">Başlangıç Tarihi</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="startDate"
                                        name="startingDate"
                                        value={newLeave.startingDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="duration">Süre</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="duration"
                                        name="duration"
                                        value={newLeave.duration}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="personal-email">Kişisel Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="personel-email"
                                        name="email"
                                        value={newLeave.email}
                                        onChange={handleChange}
                                        placeholder="Personelin kişisel emailini giriniz..."
                                    />
                                </div>
                                {warningMessage !== null && <WarningMessage warningMessage={warningMessage} />}
                            </form>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Vazgeç
                            </button>
                            <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <PublicHoliday />

        </div>
    )
}

