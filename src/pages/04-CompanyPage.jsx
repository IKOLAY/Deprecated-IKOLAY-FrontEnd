import "../assets/styles/CompanyPage.css";
import { useState } from "react";
import { AnnualProfitLoss } from "../components/AnnualProfitLoss";
import { EmployeeSection } from "../components/EmployeeSection";
import { IncomingPayments } from "../components/IncomingPayments";
import { AllExpenses } from "../components/AllExpenses";
import { IncomeOutcomeMethod } from "../components/IncomeOutcomeMethod";
import { CompanyReviewForGuest } from "../components/CompanyReviewForGuest";
import { useSearchParams } from "react-router-dom";


export function CompanyPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("companyName"));
    console.log(searchParams.get("logo"));
    console.log(searchParams.get("about"));
    console.log(searchParams.get("address"));
    const [method, setMethods] = useState(null);
    function handleClick(e) {
        e.preventDefault();
        setMethods(e.target.name)
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
                        <a href="#" name="company-review" className="nav-link link-body-emphasis" onClick={handleClick}>
                            Şirket Yorum TEST
                        </a>
                    </li>
                </ul>
                <hr />
            </div>

            <div className="d-flex flex-column h-100 w-100">

                <ul className="d-flex nav nav-tabs border-0 w-100 h-25">
                    <li className="nav-item  border border-bottom-0 rounded w-50">
                        <a className="nav-link text-white" href="/company">
                            Şirket Sayfası
                        </a>
                    </li>
                    <li className="nav-item border rounded w-50">
                        <a className="nav-link text-white" href="#">
                            Personel Sayfası
                        </a>
                    </li>
                </ul>

                <div className="tab-content w-100 d-flex justify-content-center pt-5">
                    <div className="w-75">
                        {method === null && <WelcomeToDashboard />}
                        {method === "employees" && <EmployeeSection />}
                        {method === "yearly-profit-and-loss" && <AnnualProfitLoss />}
                        {method === "all-company-loss" && <AllExpenses />}
                        {method === "incoming-payment" && <IncomingPayments />}
                        {method === "employee-leave" && <EmployeeLeave />}
                        {method === "income-outcome-input" && <IncomeOutcomeMethod />}
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
                            <form typeof="submit">
                                <div className="form-group">
                                    <label htmlFor="holidayName">Resmi Tatil Adı</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="holidayName"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startDate">Başlangıç Tarihi</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="startDate"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="duration">Süre</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="duration"
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
                            <button type="button" className="btn btn-outline-primary">
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
                            <form typeof="submit">
                                <div className="form-group">
                                    <label htmlFor="holidayName">İzin Tipi</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="holidayName"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startDate">Başlangıç Tarihi</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="startDate"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="duration">Süre</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="duration"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="personal-email">Kişisel Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="personel-email"
                                        placeholder="Personelin kişisel emailini giriniz..."
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
                            <button type="button" className="btn btn-outline-primary">
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-0 bg-white text-center">
                <h1>İZİN LİSTESİ</h1>
                <table className="table align-middle">
                    <thead className="bg-light">
                        <tr>
                            <th className="font-weight-bold" scope="col">İzin Adı</th>
                            <th scope="col">İzin Tipi</th>
                            <th scope="col">Başlangıç Tarihi</th>
                            <th scope="col">Bitiş Tarihi</th>
                            <th scope="col">Kişi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ramazan Bayramı</td>
                            <td>Resmi Tatil</td>
                            <td>10/04/2024</td>
                            <td>12/04/2024</td>
                            <td>Tüm personel</td>
                        </tr>
                        <tr>
                            <td>Babalık İzni</td>
                            <td>İzin</td>
                            <td>21/09/2023</td>
                            <td>28/09/2023</td>
                            <td>Doruk Tokinan</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}