import { useEffect, useState } from "react";
import "../assets/styles/AdminPage.css"

export default function AdminPage() {
    const [section, setSection] = useState(null)

    const [confirmInfo, setConfirmInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost/user/pendingmanagers").then(resp => resp.json()).then(data => setConfirmInfo(data));
    }, [])
    console.log(confirmInfo);
    function handleClick(e) {
        e.preventDefault();
        setSection(e.target.name)
    }

    return (
        <>
            <AdminHeader />
            <main style={{ height: "80vh" }}>
                <div className="d-flex justify-content-between align-items-start">
                    <div className="adminbar d-flex flex-column flex-shrink-0 p-3" style={{ height: "85vh" }}>
                        <ul className="nav flex-column mb-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active text-white" aria-current="page" name="register-requests" onClick={handleClick}> Şirket Kayıt İstekleri
                                </a>
                            </li>
                            <hr />
                        </ul>
                    </div>
                    <div className="w-100">

                        <section style={{ height: "85vh", backgroundColor: "white" }} className="d-flex flex-column align-items-start p-2">
                            {section === "register-requests" && confirmInfo.map(companyInfo => <RegisterRequest key={companyInfo.companyId} {...companyInfo} />)}

                        </section>
                    </div>
                </div>
            </main>
        </>

    )
}

function AdminHeader() {
    return (
        <header className="px-4">
            <nav className="navbar w-100" style={{ height: "15vh" }}>
                <img src="/img/ikolay-admin.svg" alt="ikolay-admin logo" />
                <div className="dropdown">
                    <a
                        href="#"
                        className="d-flex align-items-center text-decoration-none dropdown-toggle"
                        id="dropdownUser1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="/img/ikolay-adminpp.svg"
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-circle me-2"
                        />
                        <strong>KullanıcıAdı</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow"
                        aria-labelledby="dropdownUser1">
                        <li>
                            <a className="dropdown-item" href="#">
                                Çıkış
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

function RegisterRequest({ companyId, email, firstname, lastname, companyName, taxNo }) {
    const defConfirm = { isAccepted: true, companyId: companyId, email: email, content: "Üzgünüz!" };
    const [confirm, setConfirm] = useState({ isAccepted: true, companyId: companyId, email: email, content: "Üzgünüz!" });

    function handleRefuseSubmit(e) {
        const refuse = { ...confirm, isAccepted: false }
        fetch("http://localhost:80/auth/approve", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(refuse)
        }).then(resp => {
            console.log(resp);
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            setConfirm({ ...defConfirm })
        }).catch(err => console.log(err))
    }

    function handleClick(e) {
        fetch("http://localhost:80/auth/approve", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(confirm)
        }).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            setConfirm({ ...defConfirm })
        }).catch(err => console.log(err))
    }

    function handleCancel() {
        setConfirm({ ...defConfirm })
    }

    function handleChange(e) {
        setConfirm({ ...confirm, [e.target.name]: e.target.value })
    }

    return (
        <div className="border border-primary rounded p-3 w-100 d-flex justify-content-between align-items-center">
            <span style={{ color: "black" }}>{companyName} - {taxNo} - {firstname} - {lastname}</span>
            <div className="d-flex gap-2">
                <button className="btn btn-outline-primary" onClick={handleClick}>Onayla</button>
                <button type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target={`#modalAdd${companyId}`} >Reddet</button>
                <div
                    className="modal fade"
                    id={`modalAdd${companyId}`}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                    Başvuruyu Reddet
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCancel}
                                />
                            </div>
                            <div className="modal-body">
                                <form typeof="submit">

                                    <div className="form-group">
                                        <label htmlFor="content">Red Sebebi</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="content"
                                            name="content"
                                            placeholder="Red sebebini giriniz."
                                            value={confirm.content}
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
                                        <button onClick={handleRefuseSubmit} type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                            Gönder
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}