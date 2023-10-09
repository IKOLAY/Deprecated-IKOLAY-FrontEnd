import { NavLink } from "react-router-dom"
import "../assets/styles/EmployeePage.css";
import { useEffect, useState } from "react";
import { PublicHoliday } from "../components/PublicHoliday";
import { IncomeOutcomeForEmployeeMethod } from "../components/IncomeOutcomeMethod";
import { EmployeesAllPayments } from "../components/EmployeesAllPayments";

export default function EmployeePage() {
    const [status, setStatus] = useState(); //success, pending, error
    let defUser = JSON.parse(window.localStorage.getItem("user"));
    const defMessage = { userId: defUser.id, companyId: defUser.companyId, content: "" };
    const [operation, setOperation] = useState(null);
    const [message, setMessage] = useState({ ...defMessage })
    function handleMessageChange(e) {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }
    function handleCommentClick(e) {

        fetch(`http://localhost:80/comment/finduserscomment/${defUser.id}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                if (data.message)
                    throw new Error(data.message)
                setMessage(data)
            }).catch(err => {
                console.log(err);
                setMessage({ ...defMessage })
            })
    }

    function handleSendMessage(e) {
        console.log(message);
        e.preventDefault();
        setStatus("pending")
        fetch("http://localhost:80/comment/addcomment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message)
        }).then
            (response => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                if (data.hasOwnProperty("field")) {
                    throw new Error(data.message)
                }
                setStatus("success")
            }).catch(err => {
                setStatus("error")
                console.log(err);
            });
    }


    function handleClick(e) {
        e.preventDefault();
        setOperation(e.target.name)
    }

    function handleLogout(e) {
        window.localStorage.clear("token")
        window.localStorage.clear("user")
        window.localStorage.clear("company")
        window.localStorage.clear("shift")
    }

    const company = JSON.parse(localStorage.getItem("company"));
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
                            <li className="fw-bold border-bottom mb-2">
                                <div> Şirket İsmi</div>
                                {company.companyName}

                            </li>
                            <li className="mb-1">
                                <div>Şirket İK Telefonu:</div>
                                {company.phone}
                            </li>
                            <li>
                                <div> Şirket Adresi:</div>
                                {company.address}
                            </li>

                            <button
                                type="button"
                                className="btn btn-sm btn-info m-2 text-center"
                                data-bs-toggle="modal"
                                data-bs-target="#modalRating"
                                onClick={handleCommentClick}
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
                                            <form typeof="submit" onSubmit={handleSendMessage}>
                                                <div className="border border-warning rounded mb-4 small">
                                                    <p style={{ color: "orange" }} className="py-2 mb-0 fw-bold" >
                                                        Değerlendirme/Yorum Kuralları
                                                    </p>
                                                    <ul className="pe-2" style={{ listStyleType: "circle" }}>
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
                                                    <p style={{ color: "orange" }}>
                                                        Her çalışanın çalıştığı şirkete tek bir yorum yapma hakkı bulunmaktadır. Değerlendirme yaparken yukarıdaki kurallara uyulmazsa yorumunuz şirketin değerlendirme sayfasında yayınlanmayacaktır.
                                                    </p>

                                                </div>
                                                <div className="form-group py-3  border-top">
                                                    <label htmlFor="content">Yorumunuz</label>
                                                    <textarea className="w-100" style={{ minHeight: "150px" }} name="content" id="content" cols="30" rows="10" placeholder="Şirketinizle ilgili düşüncelerinizi giriniz...(Boş bırakılamaz!)" onChange={handleMessageChange} required value={message.content}></textarea>
                                                </div>
                                                <div className={`mb-3 mx-5 rounded ${message.commentType == "REJECTED" && "bg-danger"} ${message.commentType == "PENDING" && "bg-warning"} ${message.commentType == "ACCEPTED" && "bg-success"}`}>
                                                    {message.commentType == "PENDING" && <label>Önceki gönderiniz karar aşamasındadır. Yorumunuz onaylanana veya reddedilene kadar yorumunuzu yenileyemezsiniz!</label>}
                                                    {message.commentType == "ACCEPTED" && <label>Yorumunuz onaylanmıştır! Yorumunuzu güncelleyebilirsiniz!</label>}
                                                    {message.commentType == "REJECTED" && <label >Yorumunuz reddedilmiştir! Lütfen yorumunuzu güncelleyiniz!</label>}
                                                    {message.commentType == null && <label>Daha önce yorum yapmadınız!</label>}

                                                </div>
                                                <div className="modal-footer justify-content-between">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Vazgeç
                                                    </button>
                                                    <button type="submit" data-bs-dismiss="modal"
                                                        className={`btn btn-info ${status == "error" && "btn-danger"} ${status == "success" && "btn-success"}`}
                                                        disabled={(status == "pending" || message.commentType == "PENDING" || message.content == "") && true}>
                                                        Gönder
                                                        {status == "pending" && <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>}
                                                    </button>
                                                </div>
                                            </form>
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
                        <a
                            href="#"
                            className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                            name="send-expense-request"
                            onClick={handleClick}
                        >
                            Harcama Talebi Oluştur
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
                                            <NavLink className="dropdown-item" to="/" onClick={handleLogout}>
                                                Çıkış
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container-fluid px-4 w-100 text-center" style={{ minWidth: "700px" }}>
                        {operation === null && <Welcome />}
                        {operation === "leave" && <Leave {...defUser} />}
                        {operation === "employee-profile" && <EmployeeProfile setOperation={setOperation} />}
                        {operation === "send-expense-request" && <IncomeOutcomeForEmployeeMethod />}
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

    // const defUser = {
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     phone: "",
    //     address: ""
    // }

    let defUser = JSON.parse(window.localStorage.getItem("user"));
    let userShiftDetails = JSON.parse(window.localStorage.getItem("shift"));

    const [user, setUser] = useState({ ...defUser })

    function handleCancel(e) {
        setUser({ ...defUser })
    }

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSave() {
        fetch("http://localhost:80/user/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then
            (response => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                if (data.message) {

                    throw new Error(data.message)
                }
                localStorage.setItem("user", JSON.stringify(data))
                setUser({ ...data })
            }).catch(err => {
                setUser({ ...defUser })
                console.log(err);
            });
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
                                                        value={user.firstname}
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
                                                        value={user.lastname}
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
                                                        value={user.email}
                                                        onChange={handleChange}

                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phone">Telefon</label>
                                                    <input
                                                        type="phone"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                        value={user.phone == null ? "" : user.phone}
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
                                                        value={user.address == null ? "" : user.address}
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
                                                onClick={handleCancel}
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
                                <h5 className="my-3">{defUser.firstname} {defUser.lastname}</h5>

                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <div className="row">
                                    <div className="col-sm-12 fw-bold">
                                        <p className="mb-0">Maaş Bilgisi</p>
                                    </div>
                                    <div className="col-sm-12">
                                        <hr />
                                        <p className="mb-0">{defUser.salary} ₺ / ay</p>
                                    </div>
                                </div>
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
                                        <p className="text-muted mb-0">{defUser.firstname} {defUser.lastname}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Kişisel Eposta</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{defUser.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Telefon</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{defUser.phone == null ? "Belirlenmedi." : defUser.phone}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="mb-0">Adres</p>
                                    </div>
                                    <div className="col-sm-8">
                                        <p className="text-muted mb-0">{defUser.address == null ? "Belirlenmedi." : defUser.address}</p>
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
                                        <p className="text-muted mb-0">{userShiftDetails == undefined ? "TBD" : userShiftDetails.shiftName}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        <p className="mb-0">Başlangıç Saati</p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p className="text-muted mb-0">{userShiftDetails == undefined ? "TBD" : userShiftDetails.startTime}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        <p className="mb-0">Bitiş Saati</p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p className="text-muted mb-0">{userShiftDetails == undefined ? "TBD" : userShiftDetails.endTime}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-5">
                                        <p className="mb-0">Mola Hakkı</p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p className="text-muted mb-0">{userShiftDetails == undefined ? "TBD" : userShiftDetails.breakTime}</p>
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

function Leave({ id, companyId }) {
    const defLeave = { leaveName: "", startingDate: "", duration: "", userId: id, companyId: companyId };
    const [newLeave, setNewLeave] = useState({ ...defLeave });
    const [myRequest, setMyRequest] = useState(null);
    const [leaveList, setLeaveList] = useState([]);
    const user = JSON.parse(window.localStorage.getItem("user"));
    useEffect(() => {
        fetch(`http://localhost:80/leave/getmyleaverequests?companyId=${companyId}&userId=${id}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.message)
                    throw new Error(data.message);
                setMyRequest(data);
                console.log(data);
            })
        fetch(`http://localhost:80/leave/getcompanyleaves?companyId=${user.companyId}`).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            console.log(data);
            setLeaveList(data);
            console.log(leaveList);
        }).catch(err => console.log(err))
    }, [])

    function handleChange(e) {
        setNewLeave({ ...newLeave, [e.target.name]: e.target.value })
    }

    function handleClick(e) {
        fetch(`http://localhost:80/leave/sendleaverequest`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newLeave)
        }).then(resp => resp.json())
            .then(data => {
                if (data.message)
                    throw new Error(data.message)
                console.log(data);
                setMyRequest([...myRequest, { ...data }])
                setNewLeave({ ...defLeave })
                console.log(defLeave);
            })
    }
    function handleCancel(e) {
        setNewLeave({ ...defLeave })
    }
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
                                                name="leaveName"
                                                onChange={handleChange}
                                                value={newLeave.leaveName}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="startDate">Başlangıç Tarihi</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="startDate"
                                                name="startingDate"
                                                onChange={handleChange}
                                                value={newLeave.startingDate}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="duration">Süre</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Gün sayısını giriniz..."
                                                id="duration"
                                                name="duration"
                                                onChange={handleChange}
                                                value={newLeave.duration}
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        onClick={handleCancel}
                                    >
                                        Vazgeç
                                    </button>
                                    <button type="button"
                                        className="btn btn-info"
                                        onClick={handleClick}
                                        data-bs-dismiss="modal"
                                    >
                                        Gönder
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <PublicHoliday leaveList={leaveList} setLeaveList={setLeaveList} />

            <section className="mb-0 bg-white text-center overflow-y-scroll" style={{ height: "400px" }}>
                <h1>PERSONELE ÖZEL İZİNLER</h1>
                <table className="table align-middle">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col">Gerekçe</th>
                            <th scope="col">İzin Başlangıç Tarihi</th>
                            <th scope="col">İş günü</th>
                            <th scope="col">Onay durumu</th>
                            <th scope="col">Talep Oluşturulma Tarihi</th>
                            <th scope="col">Vazgeç</th>

                        </tr>
                    </thead>
                    <tbody>
                        {myRequest != null && myRequest.map(request => <MyRequestEmployeeTableRow setMyRequest={setMyRequest} myRequest={myRequest} {...request} />)}
                    </tbody>
                </table>
            </section>
        </>
    )
}


function MyRequestEmployeeTableRow({ id, leaveName, createDate, duration, startingDate, status, setMyRequest, myRequest }) {

    const date = new Date(createDate + 10800000);

    const stringDate = date.toISOString().split("T")[0];
    function backgroundFixer(status) {
        switch (status) {
            case "PENDING": return "bg-warning"
            case "ACCEPTED": return "bg-success"
            case "REJECTED": return "bg-danger"
            case "CANCELED": return "bg-secondary"
        }
    }

    function handleEnglish(status) {
        switch (status) {
            case "PENDING": return "BEKLEMEDE"
            case "ACCEPTED": return "ONAYLANDI"
            case "REJECTED": return "REDDEDILDI"
            case "CANCELED": return "IPTAL EDILDI"
        }
    }

    function handleClick(e) {
        fetch(`http://localhost:80/leave/cancelleave/${id}`).then(resp => resp.json())
            .then(data => {
                if (data.message)
                    throw new Error(data.message)
                setMyRequest([...myRequest.map(req => {
                    if (req.id == id)
                        return { ...data }
                    return req
                })])
            })
    }


    return (<>

        <tr>
            <td>{leaveName}</td>
            <td>{startingDate}</td>
            <td>{duration}</td>
            <td><span className={`"badge px-2 rounded text-black ${backgroundFixer(status)}`}>{handleEnglish(status)}</span></td>
            <td>{stringDate}</td>
            <td><button type="button"
                className="btn btn-danger"
                disabled={status != "PENDING" ? true : false}
                onClick={handleClick}
            >IPTAL ET</button></td>
        </tr>

    </>
    )
}



