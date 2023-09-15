import { useState } from "react";

export function RegisterPage() {
    const [role, setRole] = useState(null);


    return (
        <>
            <img src="" alt="" />
            <div>
                <img src="/img/ikolay-role-selection.svg" alt="" />
                <label htmlFor="role">Hangi seçenek sizi daha iyi tanımlıyor?</label>
                <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="null" defaultValue={null}>Seçiniz</option>
                    <option value="company">Şirket sahibi/yöneticisi</option>
                    <option value="guest">Ziyaretçi</option>
                </select>
            </div>
            {role === "company" && <RegisterCompanyManager />}
            {role === "guest" && <RegisterGuest />}
        </>
    )
}

function RegisterCompanyManager() {
    return (
        <div>
            <section>
                <h1>İK hiç bu kadar kolay olmamıştı!</h1>
                <h2>İlk 1 ay tamamen ücretsiz</h2>
            </section>
            <section>
                <img src="" alt="" />
                <form action="">
                    <label htmlFor="companyName">
                        Şirket Adı
                        <input id="companyName" type="text" name="companyName" />
                    </label>
                    <label htmlFor="taxId">
                        Vergi No
                        <input id="taxId" type="number" name="taxId" />
                    </label>
                    <label htmlFor="officialFullname">
                        Yetkili Adı Soyadı
                        <input id="officialFullname" type="text" name="officialFullname" />
                    </label>
                    <label htmlFor="companyEmail">
                        Şirket Eposta Adresi
                        <input id="companyEmail" type="email" name="companyEmail" />
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