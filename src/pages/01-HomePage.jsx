import { NavLink, useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../assets/styles/HomePage.css"
import { useEffect, useState } from "react";


export function HomePage() {


    return (
        <>
            <MainHeader />

            {/* {guest === null && <MainIndex />} */}
            <MainGuestIndex />

            <MainFooter />
        </>
    )

}

function MainIndex() {
    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <section className="hero limited-width d-flex justify-content-center align-items-center px-4 pb-4 gap-5">
                <div>
                    <h1>İnsan Kaynakları yönetimi artık çok kolay!</h1>
                    <h2>Siz de aramıza katılın</h2>
                    <div className="buttons d-flex flex-row">
                        <NavLink to="/register">
                            <button type="button" className="btn btn-lg btn-outline-primary me-2">KAYIT OL!</button>
                        </NavLink>
                        <NavLink to="/login">
                            <button type="button" className="btn btn-lg btn-outline-secondary">GİRİŞ YAP</button>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <img src="/img/hero-img.svg" alt="arkalarında bir roket kalkan mutlu çalışanlar illüstrasyon" />
                </div>
            </section>

            <section className="secondary-container d-flex flex-column justify-content-center align-items-center p-4 text-center">
                <h3>Vizyonumuz</h3>
                <p className="limited-width">Vizyonumuz, insan kaynakları yönetimini daha kolay, verimli ve etkili hale getirerek dünya genelinde şirketlerin ve çalışanların başarısını artırmak ve iş dünyasına olumlu bir etki yapmaktır. İşimizi daha iyi hale getirmek için sürekli çaba gösterir, yenilikçi çözümler sunarız ve müşteri memnuniyetini en üst düzeye çıkarmak için çalışırız.</p>
            </section>

            <section className="services limited-width d-flex flex-row justify-content-center align-items-center text-center p-4 gap-5">
                <div className="w-50">
                    <h3>Hizmetlerimiz</h3>
                    <h4>İnsan Kaynakları’na dair her şeyi tek bir yerden yönetin!</h4>
                </div>
                <div className="d-flex flex-row  justify-content-center align-items-center w-50">
                    <ul className="services-container d-flex flex-column align-items-left">
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            PERSONEL ONBOARDING
                            <img src="/img/icons/onboarding.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            PERSONEL YÖNETİMİ
                            <img src="/img/icons/management.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            MAAŞ VE ÜCRET YÖNETİMİ
                            <img src="/img/icons/wage.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            VARDİYA YÖNETİMİ
                            <img src="/img/icons/shift.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            ŞİRKET DEĞERLENDİRME
                            <img src="/img/icons/rating.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end">
                            7/24 DESTEK
                            <img src="/img/icons/support.svg" alt="el sıkışma ikonu" />
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
function CompanyListComponent({ companyName, logo, address, about, id }) {
    const navigate = useNavigate();
    function handleClick(){        
        navigate(`/company?companyName=${companyName}&logo=${logo}&address=${address}&about=${about}&companyId=${id}`)
    }
    return (
        <button type="button" className="list-group-item list-group-item-action bg-bg-black d-flex align-items-center justify-content-center w-50" onClick={handleClick}>{logo}-Şirket Adı:{companyName}-Adres:{address}</button>
    )
}

function MainGuestIndex() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    const [guest, setGuest] = useState(user);
    const [companyList, setCompanyList] = useState([])
   if(localStorage.getItem("user")!=null){
   useEffect(() => {
    fetch(`http://localhost/company/findbycompanynametopfive`)
        .then
        (response => {
            console.log(response);
            if (!response.ok)
                throw new Error("Hata olustu")
            return response.json();
        }).then(data => {
            console.log(data);
            setCompanyList(data)
        }).catch(err => console.log(err));
}, [])}
    return (
        <main className="d-flex flex-column justify-content-center align-items-center">
            <section className="hero limited-width d-flex justify-content-center align-items-center px-4 pb-4 gap-5">
                {guest == null && <div>
                    <h1>İnsan Kaynakları yönetimi artık çok kolay!</h1>
                    <h2>Siz de aramıza katılın</h2>
                    <div className="buttons d-flex flex-row">
                        <NavLink to="/register">
                            <button type="button" className="btn btn-lg btn-outline-primary me-2">KAYIT OL!</button>
                        </NavLink>
                        <NavLink to="/login">
                            <button type="button" className="btn btn-lg btn-outline-secondary">GİRİŞ YAP</button>
                        </NavLink>
                    </div>
                </div>}
                {guest !== null && <div className="buttons d-flex flex-column p-5">
                    <h1> IKOLAY'a Hoşgeldiniz</h1>
                    <h2>{guest.firstname} {guest.lastname}</h2>
                </div>}
                <div>
                    <img src="/img/hero-img.svg" alt="arkalarında bir roket kalkan mutlu çalışanlar illüstrasyon" />
                </div>
            </section>

            <section className="secondary-container d-flex flex-column justify-content-center align-items-center p-4 text-center">
                <h3>Vizyonumuz</h3>
                <p className="limited-width">Vizyonumuz, insan kaynakları yönetimini daha kolay, verimli ve etkili hale getirerek dünya genelinde şirketlerin ve çalışanların başarısını artırmak ve iş dünyasına olumlu bir etki yapmaktır. İşimizi daha iyi hale getirmek için sürekli çaba gösterir, yenilikçi çözümler sunarız ve müşteri memnuniyetini en üst düzeye çıkarmak için çalışırız.</p>
            </section>

            <section className="services limited-width d-flex flex-row justify-content-center align-items-center text-center p-4 gap-5">
                <div className="w-50">
                    <h3>Hizmetlerimiz</h3>
                    <h4>İnsan Kaynakları’na dair her şeyi tek bir yerden yönetin!</h4>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center w-50">
                    <ul className="services-container d-flex flex-column align-items-left">
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            PERSONEL ONBOARDING
                            <img src="/img/icons/onboarding.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            PERSONEL YÖNETİMİ
                            <img src="/img/icons/management.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            MAAŞ VE ÜCRET YÖNETİMİ
                            <img src="/img/icons/wage.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            VARDİYA YÖNETİMİ
                            <img src="/img/icons/shift.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end mb-3">
                            ŞİRKET DEĞERLENDİRME
                            <img src="/img/icons/rating.svg" alt="el sıkışma ikonu" />
                        </li>
                        <li className="d-flex justify-content-between align-items-center text-end">
                            7/24 DESTEK
                            <img src="/img/icons/support.svg" alt="el sıkışma ikonu" />
                        </li>
                    </ul>
                </div>
            </section>
            {guest !== null && <section className="companies text-center p-2 w-100 ">
                <div className="w-l-50">
                    <h3>Kimlerle Çalışıyoruz?</h3>
                    <h4>Çalışan Yorumları 1 Tık Uzağınızda </h4>
                </div>
                <div className="companies-div list-group l-w-50 d-flex justify-content-center align-items-center">
                    {companyList.length !== 0 && companyList.map(company => <CompanyListComponent key={company.companyName} {...company} />)}

                </div>

            </section>}
        </main>
    )
}