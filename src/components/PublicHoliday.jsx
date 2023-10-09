import { useEffect, useState } from "react";

export function PublicHoliday({setLeaveList,leaveList}) {
    const user = JSON.parse(window.localStorage.getItem("user"))
    const companyId = user.companyId
    
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
                    {leaveList !== undefined && leaveList.length !== 0 && leaveList.map(
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