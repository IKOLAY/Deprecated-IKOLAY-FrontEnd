import { NavLink } from "react-router-dom";



export function HomePage() {

    return (
        <>
            <header>
                <nav className="navbar navbar-light fixed-top bg-light px-5">

                    <div className="container-fluid">
                        <a href="#about">
                            <img src="./img/ikolay-logo.svg" alt="ikolay logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Ana Sayfa
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Hakkımızda
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">
                                        Bize Ulaşın
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>
            </header>

            <main>
                <section id="hero" className="d-flex flex-row justify-content-around align-items-center">
                    <div className="row-md">
                        <h1>İnsan Kaynakları yönetimi artık çok kolay!</h1>
                        <h2>Siz de aramıza katılın</h2>
                        <div className="buttons d-flex flex-row justify-content-left">
                            <button type="button" className="btn btn-lg btn-outline-primary">KAYIT OL!</button>
                            <button type="button" className="btn btn-lg btn-outline-secondary">GİRİŞ YAP</button>
                        </div>
                    </div>
                    <div className="row-md">
                        <img src="./img/hero-img.svg" alt="arkalarında bir roket kalkan mutlu çalışanlar illüstrasyon" />
                    </div>
                </section>

                <section id="about" className="d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                        <h3>Vizyonumuz</h3>
                        <p>Vizyonumuz, insan kaynakları yönetimini daha kolay, verimli ve etkili hale getirerek dünya genelinde şirketlerin ve çalışanların başarısını artırmak ve iş dünyasına olumlu bir etki yapmaktır. İşimizi daha iyi hale getirmek için sürekli çaba gösterir, yenilikçi çözümler sunarız ve müşteri memnuniyetini en üst düzeye çıkarmak için çalışırız.</p>
                    </div>
                </section>

                <section id="services">
                    <div className="services-general text-start">
                        <h3>Hizmetlerimiz</h3>
                        <p>İnsan Kaynakları’na dair her şeyi tek bir yerden yönetin!</p>
                        <div id="services-container" className="d-flex flex-row justify-content-between mb-2 align-items-center gap-4">
                            <ul className="d-flex flex-column align-items-left">
                                <li className="d-flex justify-content-between align-items-center text-start mb-2">
                                    PERSONEL ONBOARDING
                                    <img src="./img/icons/onboarding.svg" alt="el sıkışma ikonu" />
                                </li>
                                <li className="d-flex justify-content-between align-items-center mb-2">
                                    PERSONEL YÖNETİMİ
                                    <img src="./img/icons/management.svg" alt="el sıkışma ikonu" />
                                </li>
                                <li className="d-flex justify-content-between align-items-center text-start">
                                    MAAŞ VE ÜCRET YÖNETİMİ
                                    <img src="./img/icons/wage.svg" alt="el sıkışma ikonu" />
                                </li>
                            </ul>
                            <ul className="d-flex flex-column align-items-left">
                                <li className="d-flex justify-content-between align-items-center text-start mb-2">
                                    VARDİYA YÖNETİMİ
                                    <img src="./img/icons/shift.svg" alt="el sıkışma ikonu" />
                                </li>
                                <li className="d-flex justify-content-between align-items-center text-start mb-2">
                                    ŞİRKET DEĞERLENDİRMELERİ
                                    <img src="./img/icons/rating.svg" alt="el sıkışma ikonu" />
                                </li>
                                <li className="d-flex justify-content-between align-items-center text-start">
                                    7/24 DESTEK
                                    <img src="./img/icons/support.svg" alt="el sıkışma ikonu" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="contact" className="text-center">
                    <h3 className="py-4">Bize Ulaşın</h3>
                    <div className="contact-container d-flex justify-content-center align-items-center pb-4 gap-4">
                        <img className="ms-5" src="./img/ikolay-contact-img.svg" alt="laptop başında otururken telefon eden kadın illüstrasyon" />
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
            <footer className="footer bg-light text-center p-4">
                <small><p className="mb-0">© 2023 İKolay, Inc.</p></small>
            </footer>
        </>
    )
}