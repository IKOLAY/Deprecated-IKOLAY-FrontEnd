export default function NavHeader (){
    return (
        <header>
                <nav className="navbar navbar-light fixed-top bg-light px-5">

                    <div className="container-fluid">
                        <a href="#about">
                            <img src="/img/ikolay-logo.svg" alt="ikolay logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Ana Sayfa
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Hakkımızda
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">
                                        Bize Ulaşın
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>
            </header>
    )
}