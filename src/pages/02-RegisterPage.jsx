import { useState } from "react";
import "../assets/styles/RegisterPage.css"
import { NavLink } from "react-router-dom";

export function RegisterPage() {
    const [role, setRole] = useState(null);

    return (
        <>
            {role === null && <SelectRole setRole={setRole} />}
            {role === "company" && <RegisterCompanyManager />}
            {role === "guest" && <RegisterGuest />}
        </>
    )
}

function SelectRole({ setRole }) {
    return (
        <div className="d-flex flex-row">

            <section className="section-one w-50 d-flex flex-column justify-content-center align-items-center">
                <img src="/img/ikolay-role-selection.svg" alt="mutlu ik çalışanları illüstrasyon" />
            </section>

            <section className="section-two w-50 d-flex flex-column justify-content-center align-items-center">
                <NavLink to="/">
                    <img className="logo" src="/img/ikolay-logo.svg" alt="ikolay logo" />
                </NavLink>
                <form className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <label >Hangi seçenek sizi daha iyi tanımlıyor?</label>
                    <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="null" defaultValue={null}>Seçiniz</option>
                        <option value="company">Şirket sahibi/yöneticisi</option>
                        <option value="guest">Ziyaretçi</option>
                    </select>
                </form>
            </section>

        </div>
    )

}

function RegisterCompanyManager() {
    return (
        <div className="company d-flex flex-row justify-content-center align-items-center">
            <section className="section-two w-50 d-flex flex-column justify-content-center align-items-center text-center  p-2" style={{ borderRight: "1px solid #003C6B" }}>

                <h1 className="company-heading">İK hiç bu kadar kolay olmamıştı!</h1>
                <h2>İlk 1 ay tamamen ücretsiz</h2>

            </section>

            <section className="section-two w-50 d-flex flex-column justify-content-center align-items-center">

                <form action="" className="d-flex flex-column gap-2 align-items-center">
                    <NavLink to="/">
                        <img className="logo" src="/img/ikolay-logo.svg" alt="ikolay logo" />
                    </NavLink>
                    <label className="d-flex flex-column" htmlFor="companyName">
                        Şirket Adı
                        <input id="companyName" type="text" name="companyName" />
                    </label>
                    <label className="d-flex flex-column" htmlFor="taxId">
                        Vegi No
                        <input id="taxId" type="number" name="taxId" />
                    </label>
                    <label className="d-flex flex-column" htmlFor="officialName">
                        Yetkili Adı Soyadı
                        <input id="officialName" type="text" name="officialName" />
                    </label>
                    <label className="d-flex flex-column" htmlFor="companyEmail">
                        Şirket Eposta
                        <input id="companyEmail" type="email" name="companyEmail" />
                    </label>
                    <label className="d-flex flex-column" htmlFor="password">
                        Şifre
                        <input id="password" type="password" name="password" />
                    </label>
                    <label className="d-flex flex-column" htmlFor="passwordControl">
                        Şifre Onayı
                        <input id="passwordControl" type="password" name="passwordControl" />
                    </label>
                    <button className="btn btn-lg btn-outline-primary" type="submit">GÖNDER</button>
                    <a href="http://localhost:5173/register">
                        <button className="btn btn-lg btn-outline-secondary w-100" type="button">Vazgeç</button>
                    </a>
                </form>

            </section>

        </div>
    )

}

function RegisterGuest() {
    return (
        <div className="guest d-flex flex-row justify-content-center align-items-center">

            <section className="section-two w-50 d-flex flex-column justify-content-center align-items-center" style={{ borderRight: "1px solid #003C6B" }}>

                <form action="" className="d-flex flex-column align-items-center gap-2">
                    <NavLink to="/">
                        <img className="logo" src="/img/ikolay-logo.svg" alt="ikolay logo" />
                    </NavLink>
                    <label className="d-flex flex-column" htmlFor="guestFullname">
                        Ad Soyad
                        <input id="guestFullname" type="text" name="guestFullname" />
                    </label>
                    <label className="d-flex flex-column" htmlFor="guestEmail">
                        Eposta
                        <input id="guestEmail" type="email" name="guestEmail" />
                    </label>
                    <label className="d-flex flex-column" htmlFor="password">
                        Şifre
                        <input id="password" type="password" name="password" />
                    </label>
                    <label className="d-flex flex-column" htmlFor="passwordControl">
                        Şifre Onayı
                        <input id="passwordControl" type="password" name="passwordControl" />
                    </label>
                    <button className="btn btn-lg btn-outline-primary" type="submit">GÖNDER</button>
                    <a href="http://localhost:5173/register">
                        <button className="btn btn-lg btn-outline-secondary w-100" type="button">Vazgeç</button>
                    </a>
                </form>

            </section>

            <section className="section-one w-50 d-flex flex-column justify-content-center align-items-center text-center  p-2 gap-5">
                <img src="/img/ikolay-guest.svg" alt="beş yıldız değerlendirmesi yapan kadın" />
                <h1>Üye şirketlerimizin çalışan değerlendirmelerini inceleyin.</h1>

            </section>


        </div>
    )

}