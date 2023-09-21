import "../assets/styles/AdminPage.css"

export default function AdminPage() {
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
                            <strong>UserName</strong>
                        </a>
                        <ul
                            className="dropdown-menu text-small shadow"
                            aria-labelledby="dropdownUser1"
                        >
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <div className="d-flex flex-row justify-content-between align-items-start">
                    <div className="adminbar d-flex flex-column flex-shrink-0 p-3" style={{ height: "85vh"}}>
                        <ul className="nav flex-column mb-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active text-white" aria-current="page"> Şirket Kayıt İstekleri
                                </a>
                            </li>
                            <hr />
                        </ul>
                    </div>
                    <div className="w-100">

                        <section style={{ height: "85vh", backgroundColor: "white" }}>

                        </section>
                    </div>
                </div>
            </main>
        </>

    )
}