function SelectRole({ setRole }) {

    return (
        <div className="d-flex flex-row" >
            <section className="section-right w-50 d-flex flex-column p-4 justify-content-center  align-items-center">
                <img src="/img/ikolay-role-selection.svg" alt="mutlu ik çalışanları illüstrasyon" />
            </section>
            <section className="section-left w-50 d-flex flex-column p-4 justify-content-center align-items-center selection-left" style={{ backgroundColor: "white", height: "100vh" }}>
                <NavLink to="/">
                    <img className="logo" src="/img/ikolay-logo.svg" alt="" />
                </NavLink>
                <form className="text-center d-flex flex-column gap-2">
                    <label className="question w-100">Hangi seçenek sizi daha iyi tanımlıyor?</label>
                    <select className="w-100" name="role" id="role" onChange={(e) => setRole(e.target.value)}>
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
        <div className="d-flex flex-row" >
            <section className="selction-left w-50 d-flex flex-column p-4 justify-content-center align-items-center text-center">
                <h1>İK hiç bu kadar kolay olmamıştı!</h1>
                <h2>İlk 1 ay tamamen ücretsiz</h2>
            </section>
            <section className="section-right w-50 d-flex flex-column p-4 justify-content-center align-items-center">
                <NavLink to="/">
                    <img className="logo" src="/img/ikolay-logo.svg" alt="" />
                </NavLink>
                <form className="text-center d-flex flex-column gap-2">
                    <label className="question w-100">Hangi seçenek sizi daha iyi tanımlıyor?</label>
                    <select className="w-100" name="role" id="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="null" defaultValue={null}>Seçiniz</option>
                        <option value="company">Şirket sahibi/yöneticisi</option>
                        <option value="guest">Ziyaretçi</option>
                    </select>
                </form>

            </section>
        </div>
    )
}

function RegisterGuest() {
    return (
        <div>
            <section>
                <img src="" alt="" />
                <form action="">
                    <label htmlFor="guestFullname">
                        Ad Soyad
                        <input id="guestFullname" type="text" name="guestFullname" />
                    </label>
                    <label htmlFor="guestEmail">
                        Eposta
                        <input id="guestEmail" type="email" name="guestEmail" />
                    </label>
                    <label htmlFor="password">
                        Şifre
                        <input id="password" type="password" name="password" />
                    </label>
                    <label htmlFor="passwordControl">
                        Lütfen şifrenizi tekrar giriniz
                        <input id="passwordControl" type="password" name="passwordControl" />
                    </label>
                    <button type="submit">GÖNDER</button>
                </form>

            </section>
            <section>
                <h2>Üye şirketlerimizin çalışan değerlendirmelerini inceleyin.</h2>
            </section>
        </div>
    )
}