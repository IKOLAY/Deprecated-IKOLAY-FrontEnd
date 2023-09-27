import { NavLink } from "react-router-dom"
import "../assets/styles/EmployeePage.css";
import { useState } from "react";

export default function EmployeePage() {
    const [operation, setOperation] = useState(null);

    function handleClick(e) {
        e.preventDefault();
        setOperation(e.target.name)
    }

    function handleLogout(e) {
        e.preventDefault()
        window.localStorage.clear("token")
        window.localStorage.clear("user")
        window.location.reload();
    }


    return (
        <main className="d-flex justify-content-lg-start employee h-100">
            <div className="d-flex w-100" id="wrapper">
                <div className="bg-dark-subtle p-2 d-flex flex-column" id="sidebar-wrapper">
                    <NavLink to="/">
                        <div className="sidebar-heading text-center border-bottom">
                            <img src="/img/ikolay-logo-light.svg" alt="" />
                        </div>
                    </NavLink>
                    <div className="border border-info rounded text-black p-2 text-center bg-light shadow-lg ">
                        <h5>ŞİRKET BİLGİLERİ</h5>

                        <img width={40} className="rounded-circle" src="/img/ikolay-companypp.svg" alt="şirket logo" />

                        <ul className="m-0 p-0">
                            <li className="fw-bold">
                                Şirket İsmi
                            </li>
                            <li>
                                Şirket İK Telefon
                            </li>
                            <li>
                                Şirket Adres
                            </li>

                            <button
                                type="button"
                                className="btn btn-sm btn-info m-2 text-center"
                                data-bs-toggle="modal"
                                data-bs-target="#modalRating"
                            >Şirket Değerlendir</button>

                            <section
                                className="modal fade"
                                id="modalRating"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                                Şirket Değerlendir
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">
                                            <form typeof="submit">
                                                <div className="border border-warning rounded mb-4 small">
                                                    <p style={{ color: "orange" }} className="py-2 mb-0 fw-bold" >
                                                        Değerlendirme/Yorum Kuralları
                                                    </p>
                                                    <ul className="pe-2" style={{listStyleType:"circle"}}>
                                                        <li className="mb-2">Kişisel Bilgilerin Gizliliği:

                                                            Çalışanlar, yorumlarında kişisel bilgilerini (örneğin, tam ad, telefon numarası, e-posta adresi) paylaşmamalıdır.</li>
                                                        <li className="mb-2">İhlal ve Taciz:

                                                            Yorumlar, şirketler veya çalışanlar hakkında tehdit edici, aşağılayıcı, ırkçı, cinsiyetçi, ayrımcı veya saldırgan dil içeremez.</li>
                                                        <li className="mb-2">Yorumların Doğruluğu:

                                                            Yorumlar, gerçek ve doğru bilgilere dayanmalıdır. Yanıltıcı veya yanıltıcı yorumlar kabul edilmez.</li>
                                                        <li className="mb-2">Yorumların İş Odaklı Olması:

                                                            Yorumlar, işle ilgili olmalıdır. Şirketin dışındaki kişisel konulara odaklanan yorumlar kabul edilmemelidir.</li>
                                                        <li className="mb-2">Öznel İfade:

                                                            Yorumlar, kişisel deneyimlere dayalı olmalıdır. Diğer çalışanların deneyimleri ve bakış açılarına saygılı olunmalıdır.</li>
                                                        <li className="mb-2">Telif Hakkı ve İçerik Koruması:

                                                            Yorumlar, başkalarının telif hakkına tabi materyali izinsiz kullanmamalıdır.</li>
                                                        <li className="mb-2">Reklam ve Spam:

                                                            Yorumlar, reklam içermemeli veya spam amaçlı olmamalıdır. Reklam veya promosyon yapmak için uygun bir alan sağlanmalıdır.</li>
                                                        <li className="mb-2">Moderasyon ve Silme Hakkı:

                                                            Site yönetimi, uygunsuz veya kural dışı yorumları silme veya düzenleme hakkına sahiptir. Moderasyon kararlarına saygı gösterilmelidir.</li>
                                                        <li className="mb-2">Kimlik Doğrulama ve İzleme:

                                                            Yorum yapanların kimliklerini doğrulamak ve gerektiğinde izleme yapmak için gereken önlemleri alabilirsiniz.</li>
                                                    </ul>
                                                    <p style={{color:"orange"}}>
                                                        Her çalışanın çalıştığı şirkete tek bir yorum yapma hakkı bulunmaktadır. Değerlendirme yaparken yukarıdaki kurallara uyulmazsa yorumunuz şirketin değerlendirme sayfasında yayınlanmayacaktır.
                                                    </p>

                                                </div>
                                                <div className="form-group py-3  border-top">
                                                    <label htmlFor="comment">Yorumunuz</label>
                                                    <textarea className="w-100" style={{minHeight:"150px"}} name="comment" id="comment" cols="30" rows="10" placeholder="Şirketinizle ilgili düşüncelerinizi giriniz..."></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer justify-content-between">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Vazgeç
                                            </button>
                                            <button type="button" data-bs-dismiss="modal" className="btn btn-info">
                                                Gönder
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </ul>

                    </div>
                    <div className="list-group list-group-flush my-4 border-top p-3">
                        <a
                            href="#"
                            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                            name="leave"
                            onClick={handleClick}
                        >
                            Resmi Tatiller / İzin
                        </a>
                    </div>
                </div>
                <div id="page-content-wrapper d-flex w-100" className="">
                    <nav className="navbar navbar-expand navbar-light bg-transparent pe-4 d-flex w-100">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle second-text fw-bold text-center text-white"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img width={40} className="rounded-circle" src="/img/ikolay-adminpp.svg" alt="" />

                                        <p>Personel İsim</p>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#" name="employee-profile" onClick={handleClick}>
                                                Profil
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={handleLogout}>
                                                Çıkış
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid px-4 w-100 text-center" style={{ minWidth: "700px" }}>
                        {operation === null && <Welcome />}
                        {operation === "leave" && <Leave />}
                        {operation === "employee-profile" && <EmployeeProfile setOperation={setOperation} />}
                    </div>
                </div>
            </div>
        </main>

    )
}

function Welcome() {
    return (
        <>
            <h1 className="text-white">PERSONEL SAYFANIZA HOŞGELDİNİZ </h1>
            <h2>Bugün sizin için ne yapmamızı istersiniz?</h2>
        </>
    )
}

function EmployeeProfile({ setOperation }) {

    const defUser = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: ""
    }

    const loggedUser = JSON.parse(window.localStorage.getItem("user"));

    const [user, setUser] = useState({ ...defUser, ...loggedUser })
    const [updatedUser, setUpdatedUser] = useState({ ...defUser })

    function handleChange(e) {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }

    function handleSave() {
        setUser({ ...user, ...updatedUser })
    }

    return (
        <section className="d-flex w-100 rounded" style={{ backgroundColor: "#eee", minWidth: "max-content" }}>
            <div className="container-fluid py-3 w-100">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-2 d-flex justify-content-between">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="#" onClick={() => setOperation(null)}>Personel Ana Sayfa</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Personel Profili
                                </li>
                            </ol>
                            <section className="d-flex flex-row gap-3">
                                <button
                                    type="button"
                                    className="btn btn-lg btn-info w-50"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalEdit"
                                >Bilgileri Düzenle</button>
                            </section>
                            <section
                                className="modal fade"
                                id="modalEdit"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                                Personel Bilgilerini Düzenle
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">
                                            <form typeof="submit">
                                                <div className="form-group">
                                                    <label htmlFor="firstname">Ad</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstname"
                                                        name="firstname"
                                                        value={updatedUser.firstname}
                                                        onChange={handleChange}

                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="lastname">Soyad</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="lastname"
                                                        name="lastname"
                                                        value={updatedUser.lastname}
                                                        onChange={handleChange}

                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Kişisel Eposta</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        value={updatedUser.email}
                                                        onChange={handleChange}

                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phone">Telefon</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                        value={updatedUser.phone}
                                                        onChange={handleChange}

                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="address">Adres</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="address"
                                                        name="address"
                                                        value={updatedUser.address}
                                                        onChange={handleChange}

                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer justify-content-between">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Vazgeç
                                            </button>
                                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-primary" onClick={handleSave}>
                                                Kaydet
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </nav>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                    src="/img/ikolay-adminpp.svg"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: 150 }}
                                />
                                <h5 className="my-3">{user.firstname} {user.lastname}</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-2">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Tam Ad</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{user.firstname} {user.lastname}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Kişisel Eposta</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{user.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Telefon</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{user.phone}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Adres</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{user.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="mb-0 fw-bold">Vardiya Bilgileri</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Vardiya Adı</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">Gündüz Vardiyası</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        <p className="mb-0">Başlangıç Saati</p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p className="text-muted mb-0">09:00</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        <p className="mb-0">Bitiş Saati</p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p className="text-muted mb-0">17:00</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        <p className="mb-0">Mola Hakkı</p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p className="text-muted mb-0">2 saat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

function Leave() {
    return (
        <>
            <section>
                <div className="d-flex flex-column gap-2">
                    <section className="d-flex flex-row gap-3">
                        <button
                            type="button"
                            className="btn btn-lg btn-outline-primary w-100 mb-4"
                            data-bs-toggle="modal"
                            data-bs-target="#modalLeave"
                        >+ İzin Talebi Gir</button>
                    </section>
                    <section
                        className="modal fade"
                        id="modalLeave"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                        İzin Talebi
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <form typeof="submit">
                                        <div className="form-group">
                                            <label htmlFor="holidayName">Gerekçe</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="holidayName"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="startDate">Başlangıç Tarihi</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="startDate"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="duration">Süre</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="duration"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="additional-info">Ek Bilgi</label>
                                            <textarea className="w-100" name="additional-info" id="additional-info" cols="30" rows="10" placeholder="Lütfen gerekiyorsa izin talebinizle ilgili ek bilgileri giriniz..."></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Vazgeç
                                    </button>
                                    <button type="button" className="btn btn-info">
                                        Gönder
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className="mb-0 bg-white text-center">
                <h1>RESMİ TATİLLER</h1>
                <table className="table align-middle">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col">Tatil Adı</th>
                            <th scope="col">Başlangıç Tarihi</th>
                            <th scope="col">Bitiş Tarihi</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ramazan Bayramı</td>
                            <td>10/04/2024</td>
                            <td>12/04/2024</td>
                        </tr>
                        <tr>
                            <td>Cumhuriyet Bayramı</td>
                            <td>29/10/2023</td>
                            <td>29/10/2023</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-0 bg-white text-center">
                <h1>İZİN TALEPLERİ</h1>
                <table className="table align-middle">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col">Gerekçe</th>
                            <th scope="col">Başlangıç Tarihi</th>
                            <th scope="col">Bitiş Tarihi</th>
                            <th scope="col">Durum</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Doğum İzni</td>
                            <td>10/10/2023</td>
                            <td>30/01/2024</td>
                            <td>Onaylandı</td>
                        </tr>
                        <tr>
                            <td>Hastane İşlemleri - Doktor Randevuları</td>
                            <td>29/09/2023</td>
                            <td>29/09/2023</td>
                            <td>Beklemede</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

