import { useState } from "react";
import { useEffect } from "react"



export function IncomingPayments() {
    const user = JSON.parse(window.localStorage.getItem("user"))
    const companyId = user.companyId;
    const [incomingPayments, setIncomingPayments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:80/transaction/payments?companyId=${companyId}`).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            setIncomingPayments(data);
            console.log(incomingPayments);
        }).catch(err => console.log(err))
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-white">
            <h3 className="text-center p-2">15 GÜN İÇERİSİNDEKİ ÖDEMELER </h3>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Tarih</th>
                        <th>Ödeme Tipi</th>
                        <th>Ödeme Miktarı</th>

                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {incomingPayments.length != 0 && incomingPayments.map(payment => {
                        return <IncomingExpensesRow key={payment.name} {...payment} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

function IncomingExpensesRow({ transactionDate, name, transactionAmount,currencyType,currencyMultiplier }) {

    return (
        <tr>
            <th>{transactionDate}</th>
            <td>{name}</td>
            <td>{currencyType!=null && transactionAmount/currencyMultiplier} {currencyType}</td>
        </tr>
    )
}