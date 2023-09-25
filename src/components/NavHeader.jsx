export default function NavHeader() {

    function handleClick(e) {
        e.preventDefault()
        window.localStorage.clear("token")
        window.localStorage.clear("user")
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-5 py-0">
                <a className="navbar-brand" href="/">
                    <img src="/img/ikolay-logo-light.svg" alt="ikolay logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Ana Sayfa
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">
                                Giriş
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login" onClick={handleClick}>
                                Çıkış
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Şirket ara"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Ara
                        </button>
                    </form>
                </div>
            </nav>
        </header>
    )
}