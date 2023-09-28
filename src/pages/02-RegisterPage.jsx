import { useState } from "react";
import "../assets/styles/RegisterPage.css"
import { NavLink } from "react-router-dom";
import { FormValidationMessage, WarningMessage } from "../components/InfoMessages";
import { ModalTitle, OffcanvasTitle } from "react-bootstrap";

export function RegisterPage() {
    const [role, setRole] = useState(null);
    const [warningMessage, setWarningMessage] = useState(null);

    return (
        <>
            {role === null && <SelectRole setRole={setRole} />}
            {role === "company" && <RegisterCompanyManager warningMessage={warningMessage} setWarningMessage={setWarningMessage} />}
            {role === "guest" && <RegisterGuest warningMessage={warningMessage} setWarningMessage={setWarningMessage} />}
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
                    <img src="/img/ikolay-logo-light.svg" alt="ikolay logo" />
                </NavLink>
                <form typeof="submit" className="d-flex flex-column justify-content-center align-items-center gap-2">
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

function RegisterCompanyManager({ warningMessage, setWarningMessage }) {
    const defUser = {

        firstname: "",
        lastname: "",
        password: "",
        passwordControl: "",
        email: "",
        companyName: "",
        taxNo: ""

    }
    const [user, setUser] = useState({ ...defUser });

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const saveManager = { ...user, role: "MANAGER" }
        setUser(saveManager);
        //POST METHODLARINDA PORT BİLGİSİ BELLİ EDİLMELİDİR VEYA localhost yerine 127.0.0.1 tercih edilmelidir !! Yoksa resp ve data 405 hatası döndürür !!
        fetch("http://localhost:80/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(saveManager)
        }).then(resp => {
            if (!resp.ok)
                throw new Error("Üzgünüz bir hata oluştu!");
            return resp.json();
        }).then(data => {
            setUser({ ...defUser })
            console.log(data);
            setWarningMessage(data.message);
        }).catch(err => {
            console.log(err)
            setWarningMessage(err.message)
        })

    }
    return (
        <div className="company d-flex flex-row justify-content-center align-items-center">
            <section className="section-one w-50 d-flex flex-column justify-content-center  text-center  p-3">

                <h1 className="company-heading">İK hiç bu kadar kolay olmamıştı!</h1>
                <h2>İlk 1 ay tamamen ücretsiz</h2>

            </section>

            <section className="section-two w-50 d-flex flex-column justify-content-center align-items-center p-4">

                <form typeof="submit" className="d-flex flex-column gap-2 px-5 align-items-center" onSubmit={handleSubmit}>
                    <NavLink to="/">
                        <img src="/img/ikolay-logo-light.svg" alt="ikolay logo" />
                    </NavLink>
                    <label className="d-flex flex-column" htmlFor="companyName">
                        Şirket Adı
                        <input className="px-3" id="companyName" type="text" name="companyName" onChange={handleChange} value={user.companyName} required onInvalid={e => e.target.setCustomValidity('Şirket Adı boş olamaz!')}
                            onInput={e => e.target.setCustomValidity('')} />
                    </label>
                    <label className="d-flex flex-column" htmlFor="taxNo">
                        Vergi No
                        <input className="px-3" value={user.taxNo} id="taxNo" type="number" name="taxNo" onChange={handleChange} required onInvalid={e => e.target.setCustomValidity('Vergi No boş olamaz!')}
                            onInput={e => e.target.setCustomValidity('')} />
                    </label>
                    <label className="d-flex flex-column" htmlFor="firstname">
                        Yetkili Adı
                        <input className="px-3" value={user.firstname} id="firstname" type="text" name="firstname" onChange={handleChange} required onInvalid={e => e.target.setCustomValidity('Yetkili Adı boş olamaz!')}
                            onInput={e => e.target.setCustomValidity('')} />
                    </label>
                    <label className="d-flex flex-column" htmlFor="lastname">
                        Yetkili Soyadı
                        <input className="px-3" value={user.lastname} id="lastname" type="text" name="lastname" onChange={handleChange} required onInvalid={e => e.target.setCustomValidity('Yetkili Soyadı boş olamaz!')}
                            onInput={e => e.target.setCustomValidity('')} />
                    </label>
                    <label className="d-flex flex-column" htmlFor="email">
                        Şirket Eposta
                        <input className="px-3" value={user.email} id="email" type="email" name="email" onChange={handleChange} required onInvalid={(e) => {
                                if(e.target.value == ""){
                                e.target.setCustomValidity('Eposta boş olamaz!')
                                } else {
                                    e.target.setCustomValidity('Eposta @ içermeli! Örnek: ornek@ornek.com')
                                }
                            }}
                                onInput={e => e.target.setCustomValidity('')} title="Eposta @ içermeli! Örnek: ornek@ornek.com"/>
                    </label>
                    <div className="w-100 text-center">
                    </div>
                    <label className="d-flex flex-column" htmlFor="password">
                        Şifre
                        <input className={`${user.password != user.passwordControl && "border-danger"} px-3`} value={user.password} id="password" type="password" name="password" onChange={handleChange} />
                    </label>
                    <label className="d-flex flex-column" htmlFor="passwordControl">
                        Şifre Onayı
                        <input className={`${user.password != user.passwordControl && "border-danger"} px-3`} value={user.passwordControl} id="passwordControl" type="password" name="passwordControl" onChange={handleChange} />
                    </label>
                    <div className="w-100 text-center">
                        {user.password != user.passwordControl && <FormValidationMessage message="Şifreler uyuşmuyor!" />}
                    </div>
                    <div className="d-flex flex-row justify-content-between gap-4">
                        <a href="http://localhost:5173/register">
                            <button className="btn btn-lg btn-outline-secondary w-100" type="button">Vazgeç</button>
                        </a>
                        <button className="btn btn-lg btn-outline-primary" type="submit">GÖNDER</button>
                    </div>
                </form>
                {warningMessage !== null && <WarningMessage warningMessage={warningMessage} />}
�😔😍

            </section>

        </div>
    )

}





function RegisterGuest({ warningMessage, setWarningMessage }) {
    const defUser = {

        firstname: "",
        lastname: "",
        password: "",
        passwordControl: "",
        email: ""

    }
    const [user, setUser] = useState({ ...defUser });

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const saveVisitor = { ...user, role: "VISITOR" }
        setUser(saveVisitor);
        console.log(user)
        fetch("http://localhost:80/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(saveVisitor)
        }).then(resp => {
            if (resp.ok)
                setUser({ ...defUser });
            return resp.json();
        }).then(data => {
            console.log(data);
            setWarningMessage(data.message);
        }).catch(err => {
            console.log(err);
            setWarningMessage(err.message);
        })

    }

    return (
        <main>
            <div className="guest d-flex flex-row">

                <section className="section-two w-50 d-flex flex-column align-items-center justify-content-center p-4" style={{ borderRight: "1px solid #003C6B" }}>

                    <form typeof="submit" className="d-flex flex-column align-items-center gap-2 px-5" onSubmit={handleSubmit}>
                        <NavLink to="/">
                            <img src="/img/ikolay-logo-light.svg" alt="ikolay logo" />
                        </NavLink>
                        <label className="d-flex flex-column" htmlFor="firstname" >
                            Ad
                            <input className="px-3" id="firstname" type="text" value={user.firstname} name="firstname" onChange={handleChange} required onInvalid={e => e.target.setCustomValidity('Ad boş olamaz!')}
                                onInput={e => e.target.setCustomValidity('')} />
                        </label>
                        <label className="d-flex flex-column" htmlFor="lastname" >
                            Soyad
                            <input className="px-3" id="lastname" type="text" value={user.lastname} name="lastname" onChange={handleChange} required onInvalid={e => e.target.setCustomValidity('Soyad boş olamaz!')}
                                onInput={e => e.target.setCustomValidity('')} />
                        </label>
                        <label className="d-flex flex-column" htmlFor="email">
                            Eposta
                            <>
                            <input className="px-3" id="email" type="email" value={user.email} name="email" onChange={handleChange} required onInvalid={(e) => {
                                if(e.target.value == ""){
                                e.target.setCustomValidity('Eposta boş olamaz!')
                                } else {
                                    e.target.setCustomValidity('Eposta @ içermeli! Örnek: ornek@ornek.com')
                                }
                            }}
                                onInput={e => e.target.setCustomValidity('')} title="Eposta @ içermeli! Örnek: ornek@ornek.com"/>
                                </>
                        </label>
                        <label className="d-flex flex-column" htmlFor="password">
                            Şifre
                            <input className={`${user.password != user.passwordControl && "border-danger"} px-3`} id="password" value={user.password} type="password" name="password" onChange={handleChange} />
                        </label>
                        <label className="d-flex flex-column" htmlFor="passwordControl">
                            Şifre Onayı
                            <input className={`${user.password != user.passwordControl && "border-danger"} px-3`} id="passwordControl" value={user.passwordControl} type="password" name="passwordControl" onChange={handleChange} />
                        </label>
                        <div className="w-100 text-center">
                            {user.password != user.passwordControl && <FormValidationMessage message="Şifreler uyuşmuyor!" />}
                        </div>
                        <div className="d-flex flex-row justify-content-between gap-4">
                            <a href="http://localhost:5173/register">
                                <button className="btn btn-lg btn-outline-secondary w-100" type="button">Vazgeç</button>
                            </a>
                            <button className="btn btn-lg btn-outline-primary" type="submit">GÖNDER</button>
                        </div>
                    </form>
                    {warningMessage !== null && <WarningMessage warningMessage={warningMessage} />}
                </section>

                <section className="section-one w-50 d-flex flex-column justify-content-center align-items-center text-center p-2 gap-5">
                    <img src="/img/ikolay-guest.svg" alt="beş yıldız değerlendirmesi yapan kadın" />
                    <h1>Üye şirketlerimizin çalışan değerlendirmelerini inceleyin.</h1>

                </section>


            </div>
        </main>
    )

}