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
        <div className="d-flex flex-column justify-content-center align-items-center ">
            <table className="table table-hover table-striped table-responsive border border-5 border-primary">
                <thead>
                    <tr>
                        <th scope="col">Tarih</th>
                        <th scope="col">Ödeme Tipi</th>
                        <th scope="col">Ödeme Miktarı</th>

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