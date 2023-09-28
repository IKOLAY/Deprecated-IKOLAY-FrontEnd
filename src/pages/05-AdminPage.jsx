import { useEffect, useState } from "react";
import "../assets/styles/AdminPage.css"
import { NavLink } from "react-bootstrap";

export default function AdminPage() {
    const [section, setSection] = useState(null)

    const [confirmInfo, setConfirmInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost/user/pendingmanagers").then(resp => resp.json()).then(data => setConfirmInfo(data));
    }, [])
    console.log(confirmInfo);
    function handleClick(e) {
        e.preventDefault();
        setSection(e.target.name)
    }



    return (
        <>
            <AdminHeader />
            <main style={{ height: "80vh" }}>
                <div className="d-flex justify-content-between align-items-start">
                    <div className="adminbar d-flex flex-column flex-shrink-0 p-3" style={{ height: "85vh" }}>
                        <ul className="nav flex-column mb-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active text-white" aria-current="page" name="register-requests" onClick={handleClick}> Şirket Kayıt İstekleri
                                </a>
                            </li>
                            <hr />
                            <li className="nav-item">
                                <a href="#" className="nav-link active text-white" aria-current="page" name="confirm-comments" onClick={handleClick}> Onay Bekleyen Yorumlar
                                </a>
                            </li>
                            <hr />
                        </ul>
                    </div>
                    <div className="w-100">

                        <section style={{ height: "85vh", backgroundColor: "white" }} className="d-flex flex-column align-items-start p-2">
                            {section === "register-requests" && confirmInfo.map(companyInfo => <RegisterRequest key={companyInfo.companyId} {...companyInfo} />)}
                            {section === "confirm-comments" && <AcceptOrRejectComments />}
                        </section>
                    </div>
                </div>
            </main>
        </>

    )
}

function AdminHeader() {
    function handleLogout(e) {
        window.localStorage.clear("token")
        window.localStorage.clear("user")
    }

    return (
        <header className="px-4">
            <nav className="navbar w-100" style={{ height: "15vh" }}>
                <a href="/">
                    <img src="/img/ikolay-admin.svg" alt="ikolay-admin logo" />
                </a>
                <div className="dropdown">
                    <a
                        href="#"
                        className="d-flex align-items-center text-decoration-none dropdown-toggle"
                        id="dropdownUser1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <img
                            src="/img/ikolay-adminpp.svg"
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-circle me-2"
                        />
                        <strong>KullanıcıAdı</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow"
                        aria-labelledby="dropdownUser1">
                        <li className="text-center">
                            <a href="http://localhost:5173/" onClick={handleLogout}>Çıkış</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

function RegisterRequest({ companyId, email, firstname, lastname, companyName, taxNo }) {
    const defConfirm = { isAccepted: true, companyId: companyId, email: email, content: "Üzgünüz!" };
    const [confirm, setConfirm] = useState({ isAccepted: true, companyId: companyId, email: email, content: "Üzgünüz!" });

    function handleRefuseSubmit(e) {
        const refuse = { ...confirm, isAccepted: false }
        fetch("http://localhost:80/auth/approve", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(refuse)
        }).then(resp => {
            console.log(resp);
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            setConfirm({ ...defConfirm })
        }).catch(err => console.log(err))
    }

    function handleClick(e) {
        fetch("http://localhost:80/auth/approve", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(confirm)
        }).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            setConfirm({ ...defConfirm })
        }).catch(err => console.log(err))
    }

    function handleCancel() {
        setConfirm({ ...defConfirm })
    }

    function handleChange(e) {
        setConfirm({ ...confirm, [e.target.name]: e.target.value })
    }

    return (
        <div className="border border-primary rounded p-3 w-100 d-flex justify-content-between align-items-center">
            <span style={{ color: "black" }}>{companyName} - {taxNo} - {firstname} - {lastname}</span>
            <div className="d-flex gap-2">
                <button className="btn btn-outline-primary" onClick={handleClick}>Onayla</button>
                <button type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target={`#modalAdd${companyId}`} >Reddet</button>
                <div
                    className="modal fade"
                    id={`modalAdd${companyId}`}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                    Başvuruyu Reddet
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCancel}
                                />
                            </div>
                            <div className="modal-body">
                                <form typeof="submit">

                                    <div className="form-group">
                                        <label htmlFor="content">Red Sebebi</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="content"
                                            name="content"
                                            placeholder="Red sebebini giriniz."
                                            value={confirm.content}
                                            onChange={handleChange}
                                        />
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
                                        <button onClick={handleRefuseSubmit} type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                            Gönder
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AcceptOrRejectComments() {
    const [pendingComments, setPendingComments] = useState([])

    useEffect(() => {
        fetch("http://localhost/comment/findallcommentforadmin")
            .then(resp => resp.json())
            .then(data => setPendingComments(data))
            .catch(err => console.log(err));
    }, [])


    return (
        pendingComments.map(comment => <CommentRow key={comment.userId} {...comment} comments={pendingComments} setComments={setPendingComments} />)
    )
}

function CommentRow({ id, companyId, userId, content, comments, setComments }) {
    const [user, setUser] = useState({ firstname: "", lastname: "" });
    const [company, setCompany] = useState({ companyName: "", taxNo: "" });
    const [toggle, setToggle] = useState(true);



    function handleClick(e) {
        if (e.target.name == "accept") {
            fetch(`http://localhost/comment/acceptcomment/${id}`).then(resp => {
                if (resp.ok) {
                    setComments(comments.filter(comment => comment.id != id));
                }
            }).catch(err => console.log(err))
        } else {
            fetch(`http://localhost/comment/rejectcomment/${id}`).then(resp => {
                if (resp.ok) {
                    setComments(comments.filter(comment => comment.id != id));
                }
            }).catch(err => console.log(err))
        }
    }
    function handleToggle(e) {
        setToggle(false)
    }
    return (
        <div className="border border-primary rounded p-3 w-100 d-flex justify-content-between align-items-center">
            <span style={{ color: "black" }}>{content}</span>
            <div className="d-flex gap-2">
                <button className="btn btn-outline-primary" onClick={handleClick} name="accept">Onayla</button>
                <button className="btn btn-outline-danger" onClick={handleClick} name="reject">Reddet</button>
                <button type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target={`#modalAdd${userId}`}
                    onClick={handleToggle}
                >Detay</button>
                <div
                    className="modal fade"
                    id={`modalAdd${userId}`}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                    Kullanıcı ve Firma Detayları:
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
                                        {toggle ? <label >Kullanici yükleniyor.</label> : <GetFirstAndLastName userId={userId} user={user} setUser={setUser} />}
                                        {toggle ? <label >Firma yükleniyor.</label> : <GetCompanyNameAndTaxNo companyId={companyId} company={company} setCompany={setCompany} />}

                                    </div>
                                    <div className="modal-footer justify-content-between">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Kapat
                                        </button>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


function GetFirstAndLastName({ userId, user, setUser }) {
    useEffect(() => {
        fetch(`http://localhost/user/getusersfirstandlastname/${userId}`).then(resp => resp.json()).then(data => {
            if (!data.firstname)
                throw new Error(data.message);
            setUser(data);
        }).catch(err => console.log(err))
    }, [])

    return <>
        <label>Kullanici Ad Soyad</label>
        <label>{user.firstname} {user.lastname}</label>
    </>
}

function GetCompanyNameAndTaxNo({ companyId, company, setCompany }) {
    useEffect(() => {
        fetch(`http://localhost/company/companyinformation?id=${companyId}`).then(resp => resp.json()).then(data => {
            if (!data.taxNo)
                throw new Error(data.message);
            setCompany(data);
        })
    }, []);


    return <><label>Firma Adı ve Vergi Numarası</label>
        <label>{company.companyName} {company.taxNo}</label></>

}