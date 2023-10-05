import { useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

export function CompanyReviewForGuest({ setSearchCompany, searchCompany }) {
    const [companies, setCompanies] = useState(null);
    console.log(companies);
    useEffect(() => {
        fetch(`http://localhost/company/findbysearchvalue?searchValue=${searchCompany}`).then(resp => resp.json())
            .then(data => {
                if (data.message)
                    throw new Error(data.message)
                setCompanies(data)
            }).catch(err => console.log(err));
    }, [])
    return (
        <>
            <SearchHeader setSearchCompany={setSearchCompany} searchCompany={searchCompany} setCompanies={setCompanies} />
            {companies == null ? <h1 className="hero text-center">{localStorage.getItem("user") ? "Arama sayfasına hoşgeldiniz!" : "Lütfen önce giriş yapın!"}</h1> : companies.map(company => <Reviews key={company.id} {...company} />)}
            {(companies != null && companies.length == 0) && <h1 className="hero text-center">Aradığınız kriterde firma bulunamadı!</h1>}

        </>
    )
}

function Reviews({ id, companyName, logo, about, address }) {
    const navigate = useNavigate();
    function handleReturnHome() {
        navigate("/")
    }

    const content = null;
    const [reviews, setReviews] = useState(null);

    function handleClick(e) {
        fetch(`http://localhost:80/comment/findallcommentforguest?companyId=${id}`).then(response => {
            console.log(response);
            return response.json()
        }).then(data => {
            console.log(data);
            setReviews(data)
        }).catch(error => console.log(error));
    }

    return (
        <div className="hero d-flex flex-column justify-content-center align-items-center">
            <div className="card d-flex align-items-center bg-primary-subtle" >
                <div className="card-body text-center">
                    <img className="rounded-circle" src={logo} width={40} alt="Şirket logosu" />
                    <h5 className="card-title">{companyName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{address}</h6>
                    <p className="card-text">
                        {about}
                    </p>
                </div>
            </div>
            <h1 style={{ color: "white" }}>Şirketle İlgili Yorumlar</h1>
            {reviews == null && <button type="button" className="btn btn-primary d-flex m-auto" onClick={handleClick}>Yorumları getir!</button>}
            {console.log(reviews)}
            {(reviews != null && reviews.length == 0) && <div className="card mt-1 bg-dark-subtle">
                <div className="card-body">
                    Henüz Bir Yorum Yapılmadı
                </div>
            </div>
            }
            {(reviews != null && reviews.length > 0) && <div>
                {reviews.map((review, index) => <ReviewList key={index} {...review} />
                )}

            </div>}
            <button type="button" className="btn btn-primary d-flex m-auto mt-4" onClick={handleReturnHome}>ANA SAYFAYA DÖN</button>
        </div>
    )
}

function ReviewList({ content }) {

    return (
        <div className="card mt-1 bg-dark-subtle">

            <div className="card-body">
                {content}
            </div>
        </div>
    )
}


export default function SearchHeader({ setSearchCompany, searchCompany, setCompanies }) {
    const navigate = useNavigate();
    function handleClick(e) {
        e.preventDefault()
        window.localStorage.clear("token")
        window.localStorage.clear("user")
        window.localStorage.clear("company")
        window.localStorage.clear("shift")
        navigate("/")

    }

    function handleChange(e) {
        setSearchCompany(e.target.value);
    }

    function handleSearch(e) {
        fetch(`http://localhost/company/findbysearchvalue?searchValue=${searchCompany}`).then(resp => resp.json())
            .then(data => {
                if (data.message)
                    throw new Error(data.message)

                setCompanies(data)
            }).catch(err => console.log(err));
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
                            <a className="nav-link text-info" href="#" onClick={handleClick}>
                                Çıkış
                            </a>
                        </li> : <li className="nav-item">
                            <a className="nav-link text-info" href="/login">
                                Giriş
                            </a>
                        </li>}


                    </ul>
                    {localStorage.getItem("user") && <form typeof="submit" className="form-inline my-2 my-lg-0 d-flex">
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
