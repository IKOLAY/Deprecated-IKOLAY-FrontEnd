import "../assets/styles/LoginPage.css"
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
    const defLogInfo = { email: "", password: "" }
    const [loginInfo, setLoginInfo] = useState({ ...defLogInfo });
    const navigate = useNavigate();
    function handleSubmit(e) {

        e.preventDefault()
        console.log(loginInfo)
        fetch("http://localhost:80/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInfo)
        }).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            window.localStorage.setItem("token", data.token);
            window.localStorage.setItem("role", data.role);
            fetch(`http://localhost:80/user/loggeduser?token=${data.token}`)
                .then(resp => resp.json())
                .then(data2 => {
                    console.log(data2);
                    window.localStorage.setItem("user", JSON.stringify(data2));
                    if (data2.companyId == null) {
                        window.localStorage.setItem("company", null);
                        window.localStorage.setItem("shift", null)
                        roleCheck(data.role)
                    } else {
                        fetch(`http://localhost:80/company/companyinformation?id=${data2.companyId}`)
                            .then(resp => resp.json())
                            .then(data3 => {
                                console.log(data3);
                                window.localStorage.setItem("company", JSON.stringify(data3));
                                if (data2.shiftId == null)
                                    window.localStorage.setItem("shift", null);
                                else {
                                    fetch(`http://localhost:80/shift/findshift/${data2.shiftId}`)
                                        .then(resp => resp.json())
                                        .then(data4 => {
                                            console.log(data4);
                                            window.localStorage.setItem("shift", JSON.stringify(data4));
                                            roleCheck(data.role)
                                        })
                                }
                            });
                    }
                })
        }).catch(err => console.log(err))
    }

    function roleCheck(role){
        if (role == "MANAGER")
        navigate("/company")
    else if (role == "ADMIN")
        navigate("/admin")
    else if (role == "EMPLOYEE")
        navigate("/employee")
    else
        navigate("/")
    }

    function handleChange(e) {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
    }

    return (
        <div className="page d-flex flex-column justify-content-center align-items-center">
            <div className="content p-5 d-flex flex-column align-items-center gap-2">
                <NavLink to="/">
                    <img src="/img/ikolay-logo-dark.svg" alt="ikolay logo" />
                </NavLink>
                <form typeof="submit" action="" onSubmit={handleSubmit} className="d-flex flex-column justify-content-around gap-2">
                    <label htmlFor="email">
                        Email
                        <input name="email" id="email" type="text" className="px-3" value={loginInfo.email} onChange={handleChange} />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input name="password" id="password" type="password" className="px-3" value={loginInfo.password} onChange={handleChange} />
                    </label>
                    <button className="btn btn-lg btn-outline-primary w-100" type="submit">GİRİŞ YAP</button>
                </form>
            </div>
        </div>
    )
}