import "../assets/styles/CompanyPage.css";
import { useState } from "react";
import { AnnualProfitLoss } from "../components/AnnualProfitLoss";
import { EmployeeSection } from "../components/EmployeeSection";
import { IncomingPayments } from "../components/IncomingPayments";



export function CompanyPage() {
    const [method, setMethods] = useState(null);
    function handleClick(e) {
        e.preventDefault();
        setMethods(e.target.name)
    }

    return (
        <>
            <main className="company d-flex flex-row w-100">
                <div
                    className="sidebar d-flex flex-column flex-shrink-0 p-1 bg-dark-subtle "
                >
                    <a
                        href="/company"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    >
                        <img src="img/ikolay-logo.svg" alt="logo" /><span> | Yönetici</span>

                    </a>
                    <div className="d-flex flex-column justify-content-center align-items-center p-5" style={{border:"1px solid black", borderRadius:"7px"}}>
                        <img src="/img/ikolay-adminpp.svg" width={50} alt="" style={{borderRadius:"50%"}}/>
                        <hr />
                        <p>ŞİRKET ADI</p>
                        <p>Yönetici Adı</p>
                        <p>Yönetici Email</p>
                        <p></p>
                    </div>
                    <ul className="nav nav-pills flex-column mb-auto col-md ">
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
                    </ul>
                    <hr />
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center p-5">
                    {method === null && <WelcomeToDashboard />}
                    {method === "employees" && <EmployeeSection />}
                    {method === "yearly-profit-and-loss" && <AnnualProfitLoss />}
                    {method === "all-company-loss" && <AllCompanyLoss />}
                    {method === "incoming-payment" && <IncomingPayments />}
                    {method === "employee-leave" && <EmployeeLeave />}
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
        <>
            <h1>Hello Losses</h1>
        </>
    )
}


function EmployeeLeave() {


    return (
        <div className="d-flex flex-column gap-2">
            <section className="d-flex flex-row gap-3 w-100">
                <button
                    type="button"
                    className="btn btn-lg btn-outline-primary w-50"
                    data-bs-toggle="modal"
                    data-bs-target="#modalHoliday"
                >Resmi Tatil</button>
                <button
                    type="button"
                    className="btn btn-lg btn-outline-primary w-50"
                    data-bs-toggle="modal"
                    data-bs-target="#modalLeave"
                >İzin</button>
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
                            <form>
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
                            <form>
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

            <table className="table table-hover table-striped table-responsive ">
                <thead>
                    <tr>
                        <th scope="col">İzin Adı</th>
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
        </div>
    )
}

