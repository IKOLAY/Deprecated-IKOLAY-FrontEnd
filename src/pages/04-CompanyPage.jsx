import "../assets/styles/CompanyPage.css";
import { useEffect, useState } from "react";
import { AnnualProfitLoss } from "../components/AnnualProfitLoss";
import { EmployeeSection } from "../components/EmployeeSection";
import { IncomingPayments } from "../components/IncomingPayments";
import { AllExpenses } from "../components/AllExpenses";
import { IncomeOutcomeMethod, IncomeOutcomeForEmployeeMethod } from "../components/IncomeOutcomeMethod";
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

    let defCompany = JSON.parse(window.localStorage.getItem("company"));
    const [company, setCompany] = useState({ ...defCompany })

    let user = JSON.parse(window.localStorage.getItem("user"))

    const [method, setMethod] = useState(null);
    const managerFirstName = user.firstname;
    const managerLastName = user.lastname;
    const managerMail = user.email;

    function handleCancel(e) {
        setCompany({ ...defCompany })
    }

    function handleChange(e) {
        console.log(company)
        setCompany({ ...company, [e.target.name]: e.target.value })
    }

    function handleSave() {
        fetch("http://34.159.230.7/company/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(company)
        }).then
            (response => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                if (data.message) {

                    throw new Error(data.message)
                }
                localStorage.setItem("company", JSON.stringify(data))
                setCompany({ ...data })
            }).catch(err => {
                setCompany({ ...defCompany })
                console.log(err);
            });
    }


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

            <div className=" sidebar d-flex flex-column flex-shrink-0 p-1 bg-dark-subtle bg-opacity-70 h-100 w-25">
                <a href="/company" className="d-flex justify-content-center link-body-emphasis text-decoration-none mb-3 p-1">
                    <img className="shadow-sm rounded bg-light p-2" src="img/ikolay-companyManager.svg" alt="logo" />
                </a>
                <hr />
                <div className="d-flex flex-column align-items-center p-3 m-1 bg-light bg-opacity-50 shadow-lg rounded small">
                    <img className="rounded-circle" src="/img/ikolay-companypp.svg" width={50} alt="" />
                    <hr />
                    <p className=""><span className="fw-bold">Şirket Adı: </span>{defCompany == null ? "Belirlenmedi" : defCompany.companyName}</p>
                    <p><span className="fw-bold">Adres: </span>{defCompany == null ? "Belirlenmedi" : defCompany.address}</p>
                    <p><span className="fw-bold">Hakkında: </span>{defCompany == null ? "Belirlenmedi" : defCompany.about}</p>
                    <p className="border-bottom border-dark pb-3 w-100 text-center"><span className="fw-bold">Tel: </span>{defCompany == null ? "Belirlenmedi" : defCompany.phone}</p>
                    {defCompany != null && <><p><span className="fw-bold">Yönetici: </span>{managerFirstName} {managerLastName}</p>
                        <p><span className="fw-bold">Yönetici Email: </span>{managerMail}</p></>}
                    <button
                        className="btn btn-info btn-sm"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEditCompany"
                    >Şirket Bilgilerini Düzenle</button>

                    <section
                        className="modal fade"
                        id="modalEditCompany"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                        Şirket Bilgilerini Düzenle
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <form typeof="submit" >
                                        <div className="form-group">
                                            <label htmlFor="companyName">Şirket Adı</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="companyName"
                                                name="companyName"
                                                value={company.companyName}
                                                disabled
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="companyAddress">Adres</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                value={company.address}
                                                onChange={handleChange}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="companyAbout">Hakkında</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="about"
                                                name="about"
                                                value={company.about}
                                                onChange={handleChange}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="companyTel">Telefon</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={company.phone}
                                                onChange={handleChange}

                                            />
                                        </div>
                                        <div className="modal-footer justify-content-between">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                                onClick={handleCancel}
                                            >
                                                Vazgeç
                                            </button>
                                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={handleSave} disabled={company.companyName == "" && true}>
                                                Kaydet
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </section>
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
    const [leaveList, setLeaveList] = useState([]);

    const [newLeave, setNewLeave] = useState({ ...defLeave });
    const [pendingRequests, setPendingRequests] = useState(null);
    useEffect(() => {
        fetch(`http://34.159.230.7/leave/getcompanyspendingleaverequest/${user.companyId}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.message)
                    throw new Error(data.message);
                setPendingRequests(data);
                console.log(data);
            })
        fetch(`http://34.159.230.7/leave/getcompanyleaves?companyId=${user.companyId}`).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            console.log(data);
            setLeaveList(data);
            console.log(leaveList);
        }).catch(err => console.log(err))
    }, [])


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
        fetch(`http://34.159.230.7/leave/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(leaves)
        }).then
            (response => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                if (data.message)
                    throw new Error(data.message)
                setWarningMessage("İzin başarıyla kaydedilmiştir!")
                setNewLeave({ ...defLeave })
                if (leaves.email == null)
                    setLeaveList([...leaveList, leaves])
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
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
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
            <PublicHoliday leaveList={leaveList} setLeaveList={setLeaveList} />
            <section className="mb-0 bg-white text-center">
                <h1>PERSONELE ÖZEL İZİNLER</h1>
                <table className="table align-middle">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col">Gerekçe</th>
                            <th scope="col">İzin Başlangıç Tarihi</th>
                            <th scope="col">İş günü</th>
                            <th scope="col">Onay durumu</th>
                            <th scope="col">Talep Oluşturulma Tarihi</th>
                            <th scope="col">Vazgeç</th>

                        </tr>
                    </thead>
                    <tbody>
                        {pendingRequests != null && pendingRequests.map(request => <PendingRequestsEmployeeTableRow setPendingRequests={setPendingRequests} pendingRequests={pendingRequests} {...request} />)}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

function PendingRequestsEmployeeTableRow({ id, leaveName, createDate, duration, startingDate, status, setPendingRequests, pendingRequests }) {

    const date = new Date(createDate + 10800000);
    const stringDate = date.toISOString().split("T")[0];

    function backgroundFixer(status) {
        switch (status) {
            case "PENDING": return "bg-warning"
            case "ACCEPTED": return "bg-success"
            case "REJECTED": return "bg-danger"
            case "CANCELED": return "bg-secondary"
        }
    }

    function handleEnglish(status) {
        switch (status) {
            case "PENDING": return "BEKLEMEDE"
            case "ACCEPTED": return "ONAYLANDI"
            case "REJECTED": return "REDDEDILDI"
            case "CANCELED": return "IPTAL EDILDI"
        }
    }

    function handleConfirmClick(e) {
        fetch(`http://localhost:80/leave/confirmleave/${id}`).then(resp => resp.json())
            .then(data => {
                if (data.message)
                    throw new Error(data.message)
                setPendingRequests([...pendingRequests.filter(req => req.id != id)]);
            })
    }

    function handleRejectClick(e) {
        fetch(`http://localhost:80/leave/rejectleave/${id}`).then(resp => resp.json())
            .then(data => {
                if (data.message)
                    throw new Error(data.message)
                setPendingRequests([...pendingRequests.filter(req => req.id != id)]);
            })
    }


    return (<>

        <tr>
            <td>{leaveName}</td>
            <td>{startingDate}</td>
            <td>{duration}</td>
            <td><span className={`"badge px-2 rounded text-black ${backgroundFixer(status)}`}>{handleEnglish(status)}</span></td>
            <td>{stringDate}</td>
            <td><button type="button"
                className="btn btn-success"
                disabled={status != "PENDING" ? true : false}
                onClick={handleConfirmClick}
            >ONAYLA</button>
                <button type="button"
                    className="btn btn-danger"
                    disabled={status != "PENDING" ? true : false}
                    onClick={handleRejectClick}
                >REDDET</button></td>
        </tr>

    </>
    )
}

