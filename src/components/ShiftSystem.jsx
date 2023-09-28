import { useEffect, useState } from "react"


export function ShiftSystem() {
    const user = JSON.parse(window.localStorage.getItem("user"))
    const companyId = user.companyId
    const defShift = {
        companyId: companyId,
        shiftName: "",
        startTime: "",
        endTime: "",
        breakTime: ""
    }
    const [newShift, setNewShift] = useState({ ...defShift })
    function handleChange(e) {
        setNewShift({ ...newShift, [e.target.name]: e.target.value });
    }
    function handleSubmit() {
        const shifts = { ...newShift }

        fetch(`http://localhost:80/shift/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(shifts)
        }).then
            (response => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data);
                if (data.message)
                    throw new Error(data.message)
                setNewShift({ ...defShift })
            }).catch(err => console.log(err));            
        
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-white">Vardiya Ekle</h2>
                    <div className="">
                        <input type="text" className="form-control mt-1" name="shiftName" placeholder="Vardiya Adı Ekleyiniz" onChange={handleChange} value={newShift.shiftName} />
                    </div>
                    <div className="">
                        <input type="time" className="form-control mt-1" name="startTime" placeholder="Baslangıc Zamanı Giriniz" onChange={handleChange} value={newShift.startTime} />
                    </div>
                    <div className="">
                        <input type="time" className="form-control mt-1" name="endTime" placeholder="Bitiş Zamanı Giriniz" onChange={handleChange} value={newShift.endTime} />
                    </div>
                    <div className="">
                        <input type="number" className="form-control mt-1" name="breakTime" placeholder="Mola Süresi Giriniz" onChange={handleChange} value={newShift.breakTime} />
                    </div>
                </form>
                <button type="button" className="btn btn-primary mt-2 d-flex justify-content-center align-items-center" onClick={handleSubmit}>
                    Vardiya Ekle
                </button>

            </div>
            <AssignShift />
            <Shifts />
        </>
    )
}



function AssignShift() {
    const user = JSON.parse(window.localStorage.getItem("user"))
    const companyId = user.companyId
    const defAssignShift = {
        companyId: companyId,
        shiftName: "",
        email: "",
    }
    const [newAssignShift, setNewAssignShift] = useState({ ...defAssignShift })
    function handleChange(e) {
        setNewAssignShift({ ...newAssignShift, [e.target.name]: e.target.value });
    }
    function handleSubmit() {
        const assignedShift = { ...newAssignShift }

        fetch(`http://localhost:80/user/setshift`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(assignedShift)
        }).then
            (response => {
                console.log(response);
                return response.json();
            }).then(data => {
                if (data.message)
                    throw new Error(data.message)
                console.log(data);
                setNewAssignShift({ ...defAssignShift })
            }).catch(err => console.log(err));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className="text-white">Vardiya Ata</h2>
                <div className="">
                    <input type="text" className="form-control mt-1" name="shiftName" onChange={handleChange} value={newAssignShift.shiftName} placeholder="Vardiya Adı Ekleyiniz" />
                </div>
                <div className="">
                    <input type="email" className="form-control mt-1" name="email" value={newAssignShift.email} onChange={handleChange} placeholder="Bu vardiyanın ekleneceği çalışanın email'ini giriniz !!" />
                </div>

            </form>
            <button type="button" className="btn btn-primary mt-2 d-flex justify-content-center align-items-center" onClick={handleSubmit}>
                Vardiyayı Ata
            </button>
        </>
    )
}

function Shifts() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    const companyId = user.companyId;
    const [shiftsList, setShiftsList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:80/shift/findshiftsbycompanyid?companyId=${companyId}`).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            setShiftsList(data);
        }).catch(error => console.log(error))
    }, []);


    return (
        <section className="mb-0 bg-white text-center mt-3">
            <h1>EKLI VARDIYALAR</h1>
            <table className="table align-middle">
                <thead className="bg-light">
                    <tr>
                        <th className="font-weight-bold" scope="col">Vardiyalar</th>
                    </tr>
                </thead>
                <tbody>
                    {shiftsList.length != 0 && shiftsList.map(
                        shift => {
                            return <GetShifts key={shift.shiftName} {...shift} />
                        }
                    )}
                </tbody>
            </table>
        </section>
    )
}

function GetShifts({ shiftName }) {
    return (
        <tr>
            <td>{shiftName}</td>
        </tr>
    )
}
