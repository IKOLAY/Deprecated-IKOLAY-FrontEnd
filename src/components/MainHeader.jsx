import { NavLink, useNavigate } from "react-router-dom"

export default function MainHeader({setSearchCompany,searchCompany}) {   
    const navigate= useNavigate();
    function handleClick(e) {
        e.preventDefault()
        window.localStorage.clear("token")
        window.localStorage.clear("user")
        window.localStorage.clear("company")
        window.localStorage.clear("shift")
        window.location.reload();

    }

    function handleChange(e){
        setSearchCompany(e.target.value);
    }

    function handleSearch(e){
        navigate("/search");
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
                            <a className="nav-link text-info" href="/">
                                Ana Sayfa
                            </a>
                        </li>
                        {localStorage.getItem("user") ? <li className="nav-item">
                            <NavLink className="nav-link text-info" to="#" onClick={handleClick}>
                                Çıkış
                            </NavLink>
                        </li>:<li className="nav-item">
                            <NavLink className="nav-link text-info" to="/login">
                                Giriş
                            </NavLink>
                        </li>}
                        
                        
                    </ul>
                    {localStorage.getItem("user") &&<form typeof="submit" className="form-inline my-2 my-lg-0 d-flex">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Şirket ara"
                            aria-label="Search"
                            value={searchCompany}
                            onChange={handleChange}
                        />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={handleSearch}>
                            Ara
                        </button>
                    </form>}
                </div>
            </nav>
        </header>
    )
}