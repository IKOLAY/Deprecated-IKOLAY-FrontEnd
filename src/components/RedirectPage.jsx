import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Redirect() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("token");
    console.log(token);
    useEffect(() => {
        fetch(`http://34.159.230.7/auth/activation?token=${token}`).then(response =>
            response.json()
        ).then(data => {
            if (data.code) {
                navigate("http://ikolay.great-site.net")
            } else {
                navigate("http://ikolay.great-site.net/login")
            }
        })
    }, [])
    return (
        <div className="d-flex justify-content-center align-items-center text-success">
            <h1>YÖNLENDİRİLİYORSUNUZ !!</h1>
        </div>
    )
}

