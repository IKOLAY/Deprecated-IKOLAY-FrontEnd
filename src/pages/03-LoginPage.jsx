import NavHeader from "../components/NavHeader";
import "../assets/styles/LoginPage.css"
import { NavLink } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="page d-flex flex-column justify-content-center align-items-center">
            <div className="content p-5 d-flex flex-column align-items-center gap-2">
                <NavLink to="/">
                    <img className="logo" src="/img/ikolay-logo.svg" alt="ikolay logo" />
                </NavLink>
                <form action="" className="d-flex flex-column justify-content-around gap-2">
                    <label htmlFor="email">
                        Email
                        <input type="text" />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input type="password" />
                    </label>
                    <button className="btn btn-lg btn-outline-primary w-100">GİRİŞ YAP</button>
                </form>
            </div>
        </div>
    )
}