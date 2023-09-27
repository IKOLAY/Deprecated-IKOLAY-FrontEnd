import { useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export function CompanyReviewForGuest() {


    return (
        <>
            <Reviews />
        </>
    )
}

function Reviews() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/")
    }
    // const companyId = 1;
    const content = null;
    const [reviews, setReviews] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const companyId = searchParams.get("companyId");
    const companyName = searchParams.get("companyName");
    const logo = searchParams.get("logo");
    const about = searchParams.get("about");
    const address = searchParams.get("address");

    useEffect(() => {
        fetch(`http://localhost:80/comment/findallcommentforguest?companyId=${companyId}`).then(response => {
            console.log(response);
            if (!response.ok)
                throw new Error("Hata Var")
            return response.json()
        }).then(data => {
            console.log(data);
            setReviews(data)
        }).then(error => console.log(error));
    }, [])

    return (
        <div>
            <div className="card d-flex align-items-center bg-primary-subtle" >
                <div className="card-body">
                    <img className="rounded-circle" src={logo} width={40} alt="Şirket logosu" />
                    <h5 className="card-title">{companyName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{address}</h6>
                    <p className="card-text">
                        {about}
                    </p>
                </div>
            </div>
            <h1 style={{ color: "white" }}>Şirketle İlgili Yorumlar</h1>
            {reviews.length == 0 ? <div className="card mt-1 bg-dark-subtle">
                <div className="card-body">
                    Henüz Bir Yorum Yapılmadı
                </div>
            </div> : <div>
                {reviews.map((review, index) => <ReviewList key={index} {...review} />
                )}

            </div>
            }
            <button type="button" className="btn btn-primary d-flex m-auto mt-4" onClick={handleClick}>ANA SAYFAYA DÖN</button>
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

