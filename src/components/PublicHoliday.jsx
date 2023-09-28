import { useEffect, useState } from "react";

export function PublicHoliday() {
    const user = JSON.parse(window.localStorage.getItem("user"))
    const companyId = user.companyId
    const [leaveList, setLeaveList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:80/leave/getcompanyleaves?companyId=${companyId}`).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            console.log(data);
            setLeaveList(data);
            console.log(leaveList);
        }).catch(err => console.log(err))
    }, []);
    return (
        <section className="mb-0 bg-white text-center">
            <h1>RESMİ TATİLLER</h1>
            <table className="table align-middle">
                <thead className="bg-light">
                    <tr>
                        <th className="font-weight-bold" scope="col">İzin Adı</th>
                        <th scope="col">Başlangıç Tarihi</th>
                        <th scope="col">Zaman</th>
                    </tr>
                </thead>
                <tbody>
                    {leaveList.length != 0 && leaveList.map(
                        leave => {
                            return <GetLeaveRow key={leave.startingDate + leave.leaveName} {...leave} />
                        }
                    )}
                </tbody>
            </table>
        </section>
    )
}

function GetLeaveRow({ leaveName, startingDate, duration, }) {
    return (
        <tr>
            <td>{leaveName}</td>
            <td>{startingDate}</td>
            <td>{duration} Gün</td>
        </tr>
    )
}