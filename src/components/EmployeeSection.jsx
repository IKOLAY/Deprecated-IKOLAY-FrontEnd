import { useState, useEffect } from "react";

export function EmployeeSection() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <>

            <ListEmployeeAndAddEmployee {...user} />
        </>
    )
}

function ListEmployeeAndAddEmployee({ companyId }) {

    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:80/user/getallpersonelwithcompanyid?companyId=${companyId}`).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            setEmployeeList(data);
        }).catch(err => console.log(err))
    }, []);

    return (
        <div className="d-flex flex-column gap-1">

            <EmployeeAdd employeeList={employeeList} setEmployeeList={setEmployeeList} companyId={companyId} />
            
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Personel</th>
                        <th>Telefon</th>
                        <th>İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map(emp => <EmployeeRow employeeList={employeeList} setEmployeeList={setEmployeeList} companyId={companyId} key={emp.email} {...emp} />)}
                </tbody>
            </table>
        </div>
    )
}

function EmployeeRow({employeeList,setEmployeeList, firstname, lastname, email, phone,companyId }) {

    return (
        <>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <img
                            src={`https://mdbootstrap.com/img/new/avatars/${Math.ceil(Math.random()*7)}.jpg`}
                            alt=""
                            style={{ width: 45, height: 45 }}
                            className="rounded-circle"
                        />
                        <div className="ms-3">
                            <p className="fw-bold mb-1">{firstname} {lastname}</p>
                            <p className="text-muted mb-0">{email}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p className="fw-normal mb-1">{phone}</p>
                </td>
                <td>
                    <EmployeeDelete employeeList={employeeList} setEmployeeList={setEmployeeList} email={email} companyId={companyId}/>
                </td>
            </tr>
        </>
    )
}

function EmployeeAdd({ companyId,employeeList,setEmployeeList }) {
    const defUser = { firstname: "", lastname: "", email: "",salary:"" };
    const [newEmployee, setNewEmployee] = useState({ ...defUser })

    function handleSubmit(e) {
        e.preventDefault()
        const saveEmployee = { ...newEmployee, password: "random", role: "EMPLOYEE", companyId: companyId }
        setNewEmployee(saveEmployee)
        fetch("http://localhost:80/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(saveEmployee)
        }).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            setNewEmployee({ ...defUser })
            console.log(data);
            const newList = [...employeeList,saveEmployee];
            setEmployeeList(newList);
        }).catch(err => console.log(err))
    }

    function handleChange(e) {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
    }


    return (
        <>
            <button
                type="button"
                className="btn btn-outline-primary w-100"
                data-bs-toggle="modal"
                data-bs-target="#modalAdd"
            >
                +Personel Ekle
            </button>

            <div
                className="modal fade"
                id="modalAdd"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                IKOLAY Personel Ekle
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form typeof="submit" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={newEmployee.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstname">İsim</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="Çalışan İsmini Giriniz"
                                        value={newEmployee.firstname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Soyisim</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Çalışan Soyismini Giriniz"
                                        value={newEmployee.lastname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="salary">Maaş</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="salary"
                                        name="salary"
                                        placeholder="Personelin maaşını giriniz."
                                        value={newEmployee.salary}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        
                                    >
                                        Vazgeç
                                    </button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                                        Kaydet
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

function EmployeeDelete({email,companyId,employeeList,setEmployeeList}) {
    const defDeleteInfo={companyId:companyId,email:""}
    const [deleteInfo,setDeleteInfo] = useState({...defDeleteInfo})
    function handleChange(e){
        setDeleteInfo({...deleteInfo,[e.target.name]:e.target.value})
    }
    function handleCancel(e){
        setDeleteInfo({...defDeleteInfo})
    }
    function handleClick(e){
        console.log(deleteInfo);
        fetch("http://localhost:80/user/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(deleteInfo)
        }).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            if(data)
            setEmployeeList(employeeList.filter(emp=>emp.email!=email ))
        }).catch(err => console.log(err))
    }
    return (
        <>
            <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                data-bs-toggle="modal"
                data-bs-target="#modalDelete"
            >
                Personel Sil
            </button>
            <div
                className="modal fade"
                id="modalDelete"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 style={{ color: "black" }} className="modal-title fs-5" id="exampleModalLabel">
                                IKOLAY Personel Sil
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
                                    <div className="border rounded p-1 m-2 mb-4" style={{ color: "#FF99BF", borderColor: "#FF99BF" }}>
                                        <small>Lütfen silme işlemini onaylamak için personel kişisel emailini giriniz. <br /> <b>BU İŞLEM GERİ ALINAMAZ!</b></small>
                                    </div>
                                    <label htmlFor="exampleInputEmail1">Silinmek istenen kişinin e-mail adresi:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={email}
                                        disabled
                                    />
                                    <label htmlFor="exampleInputEmail1">Personel Kisisel Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={handleChange}
                                        value={deleteInfo.email}
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
                                    <button type="button" onClick={handleClick} className="btn btn-outline-danger" data-bs-dismiss="modal"> 
                                        Silmeyi Onayla
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
