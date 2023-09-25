import { NavLink } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "../assets/styles/HomePage.css"


export function HomePage() {


    return (
        <>
            <MainHeader />
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

            <MainFooter />
        </>
    )
}