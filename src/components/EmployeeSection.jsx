import { useState, useEffect } from "react";

export function EmployeeSection() {
    const user = JSON.parse(localStorage.getItem("user"));
 
    return (
       <>
     
       <ListEmployeeAndAddEmployee {...user} />
       </>
    )
}

function ListEmployeeAndAddEmployee({companyId}) {
   
    const [employeeList,setEmployeeList] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:80/user/getallpersonelwithcompanyid?companyId=${companyId}`).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
           setEmployeeList(data);
        }).catch(err => console.log(err))
    },[]);

    

    return (
        <div className="d-flex flex-column gap-1">
            <section className="d-flex flex-row gap-2">
                <EmployeeAdd companyId={companyId} />
                <EmployeeDelete />
            </section>
            <table className="table table-hover table-striped table-responsive">
                <thead>
                    <tr>
                        
                        <th scope="col">İsim</th>
                        <th scope="col">Soyisim</th>
                        <th scope="col">E-Mail</th>
                        <th scope="col">Telefon</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map(emp => <EmployeeRow key={emp.email} {...emp}/>)}
                </tbody>
            </table>

        </div>
    )
}

function EmployeeRow({firstname,lastname,email,phone}){

    return(
        <tr>            
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{email}</td>
        <td>{phone}</td>
    </tr>
    )
}

function EmployeeAdd({companyId}) {
    const defUser ={firstname:"",lastname:"",email:""};
    const[newEmployee,setNewEmployee] = useState({...defUser})

    function handleSubmit(e){
        e.preventDefault()
        setNewEmployee({...newEmployee, password:"random",role:"EMPLOYEE",companyId:companyId})
        fetch("http://localhost:80/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEmployee)
        }).then(resp => {
            if(!resp.ok)
           throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
             setNewEmployee({...defUser})
            console.log(data);
        }).catch(err => console.log(err))
    }

    function handleChange(e){
        setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
    }



    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalAdd"
            >
                Personel Ekle
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
                            <form onSubmit={handleSubmit}>
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
                                <div className="modal-footer justify-content-between">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Vazgeç
                            </button>
                            <button type="submit" className="btn btn-primary">
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

function EmployeeDelete() {
    return (
        <>
            <button
                type="button"
                className="btn btn-danger"
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
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Personel Kisisel Email Giriniz</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
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
                            <button type="button" className="btn btn-primary">
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
