import { useState } from "react";
import "../assets/styles/AdminPage.css"

export default function AdminPage() {
    const [section, setSection] = useState(null)

    function handleClick(e){
        e.preventDefault();
        setSection(e.target.name)
    }

    return (
        <>
            <header className="px-4">
                <nav className="navbar w-100" style={{ height: "15vh" }}>
                    <div className="">
                        <img src="/img/ikolay-admin.svg" alt="" />
                    </div>
                    <div className="dropdown  align-self-center">
                        <a
                            href="#"
                            className="d-flex align-items-center text-decoration-none dropdown-toggle text-white"
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
                        <ul
                            className="dropdown-menu text-small shadow"
                            aria-labelledby="dropdownUser1"
                        >
                            <li>
                                <a className="dropdown-item" href="#">
                                    Ayarlar
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Profil
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Çıkış
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main style={{height:"80vh"}}>
                <div className="d-flex justify-content-between align-items-start">
                    <div className="adminbar d-flex flex-column flex-shrink-0 p-3" style={{ height: "85vh"}}>
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
                            {section==="register-requests" && <RegisterRequest />}

                        </section>
                    </div>
                </div>
            </main>
        </>

    )
}

function RegisterRequest(){
    return (
        <div className="border border-primary rounded p-3 w-100 d-flex justify-content-between align-items-center">
            <span style={{color:"black"}}>Kayıt İsteği-1</span>
            <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">Onayla</button>
            <button className="btn btn-outline-secondary">Reddet</button>
            </div>
        </div>
    )
}