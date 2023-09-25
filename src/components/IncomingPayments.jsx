import { useState } from "react";
import { useEffect } from "react"



export function IncomingPayments() {
    //localStroage.getItem("user").companyId'den gelicek.
    const companyId = 1;
    const [incomingPayments, setIncomingPayments] = useState([]);

useEffect( ()=>{
    fetch(`http://localhost:80/transaction/payments?companyId=${companyId}`).then(resp => {
    if (!resp.ok)
        throw new Error("Hata initiate");
    return resp.json();
}).then(data => {
    setIncomingPayments(data);
    console.log(incomingPayments);
}).catch(err => console.log(err))
},[]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center col-8">
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Tarih</th>
                        <th>Ödeme Tipi</th>
                        <th>Ödeme Miktarı</th>

                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {incomingPayments.length!=0 && incomingPayments.map(payment=>{
                       return <IncomingExpensesRow key={payment.name} {...payment}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

function IncomingExpensesRow({ transactionDate, name, transactionAmount }) {

    return (
        <tr>
            <th>{transactionDate}</th>
            <td>{name}</td>
            <td>{transactionAmount}TL</td>
        </tr>
    )
}