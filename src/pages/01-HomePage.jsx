import { NavLink } from "react-router-dom";
import NavHeader from "../components/NavHeader";
import MainFooter from "../components/MainFooter";
import "../assets/styles/HomePage.css"


export function HomePage() {


    return (
        <>
            <NavHeader />
            <main>

                <section className="hero d-flex flex-row justify-content-around align-items-center w-100">
                    <div className="row-md">
                        <h1>İnsan Kaynakları yönetimi artık çok kolay!</h1>
                        <h2>Siz de aramıza katılın</h2>
                        <div className="buttons d-flex flex-row justify-content-left">
                            <NavLink to="/register">
                                <button type="button" className="btn btn-lg btn-outline-primary me-2">KAYIT OL!</button>
                            </NavLink>
                            <NavLink to="/login">
                            <button type="button" className="btn btn-lg btn-outline-secondary">GİRİŞ YAP</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row-md">
                        <img src="/img/hero-img.svg" alt="arkalarında bir roket kalkan mutlu çalışanlar illüstrasyon" />
                    </div>
                </section>

                <section className="about d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                        <h3 id="services">Vizyonumuz</h3>

                        <p>Vizyonumuz, insan kaynakları yönetimini daha kolay, verimli ve etkili hale getirerek dünya genelinde şirketlerin ve çalışanların başarısını artırmak ve iş dünyasına olumlu bir etki yapmaktır. İşimizi daha iyi hale getirmek için sürekli çaba gösterir, yenilikçi çözümler sunarız ve müşteri memnuniyetini en üst düzeye çıkarmak için çalışırız.</p>
                    </div>
                </section>

                <section className="services d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="services-general">
                        <h3>Hizmetlerimiz</h3>
                        <p>İnsan Kaynakları’na dair her şeyi tek bir yerden yönetin!</p>
                        <div className="services-container d-flex flex-row justify-content-between mb-2 align-items-center gap-4">
                            <ul className="d-flex flex-column align-items-left">
                                <li className="d-flex justify-content-between align-items-center text-start mb-2">
                                    PERSONEL ONBOARDING
                                    <img src="/img/icons/onboarding.svg" alt="el sıkışma ikonu" />
                                </li>
                                <li className="d-flex justify-content-between align-items-center mb-2">
                                    PERSONEL YÖNETİMİ
                                    <img src="/img/icons/management.svg" alt="el sıkışma ikonu" />
                                </li>
                                <li className="d-flex justify-content-between align-items-center text-start">
                                    MAAŞ VE ÜCRET YÖNETİMİ
                                    <img src="/img/icons/wage.svg" alt="el sıkışma ikonu" />
                                </li>
                            </ul>
                            <ul className="d-flex flex-column align-items-left">
                                <li className="d-flex justify-content-between align-items-center text-start mb-2">
                                    VARDİYA YÖNETİMİ
                                    <img src="/img/icons/shift.svg" alt="el sıkışma ikonu" />
                                </li>
                                <li className="d-flex justify-content-between align-items-center text-start mb-2">
                                    ŞİRKET DEĞERLENDİRMELERİ
                                    <img src="/img/icons/rating.svg" alt="el sıkışma ikonu" />
                                </li>
                                <li className="d-flex justify-content-between align-items-center text-start">
                                    7/24 DESTEK
                                    <img src="/img/icons/support.svg" alt="el sıkışma ikonu" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact text-center">
                    <h3 className="py-4">Bize Ulaşın</h3>
                    <div className="contact-container d-flex justify-content-center align-items-center pb-4 gap-4">
                        <img className="ms-5" src="/img/ikolay-contact-img.svg" alt="laptop başında otururken telefon eden kadın illüstrasyon" />
                        <ul className="me-5">
                            <li>
                                <h4>PHONE</h4>
                                <p>(123)456-7890</p>
                            </li>
                            <li>
                                <h4>EMAIL</h4>
                                <p>ikolayhrmanagement@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </section>

            </main>

            <MainFooter />
        </>
    )
}