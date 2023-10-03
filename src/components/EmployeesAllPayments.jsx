import { useEffect, useState } from "react";


export function EmployeesAllPayments({myRequests,setMyRequests,user}) {

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center bg-white mt-4">
                <h3 className="text-center p-2">Harcama İsteklerim </h3>
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        {myRequests == null && <tr>Yükleniyor!</tr>}
                        <tr>
                            {(myRequests != null && myRequests.length > 0) ? <><th>Harcama Adı</th>
                                <th>Harcama Türü</th>
                                
                                <th>Harcama Tutarı</th>
                                <th>Talep Tarihi</th>
                                <th>Harcama Kur Değeri</th>
                                <th>Onay/Red tarihi</th>
                                <th>Durumu</th>
                                <th>Harcama Belgesi</th></> : <th>Harcama talebi bulunmuyor!</th>}
                        </tr>

                    </thead>
                    <tbody className="table-group-divider">
                        {myRequests != null && myRequests.map((expense,index) => <ExpensesTableRow key={index} {...expense}/>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

function ExpensesTableRow({confirmationDate,currencyMultiplier,currencyType,expenseType,fileId,name,status,transactionAmount,transactionDate}){

    function backgroundFixer(status){
        switch(status){
            case"PENDING": return "bg-warning"
            case"ACCEPTED": return "bg-success"
            case"REJECTED": return "bg-danger"
        }
    }

    function handleEnglish(status){
        switch(status){
            case"PENDING": return "BEKLEMEDE"
            case"ACCEPTED": return "ONAYLANDI"
            case"REJECTED": return "REDDEDILDI"
            case "TRAVEL": return "SEYAHAT";
            case "EDUCATION": return "EĞİTİM";
            case "HEALTH": return "SAĞLIK";
            case "OTHER" : return "DİĞER";
        }
    }
    return (
        <tr>
            <th>{name}</th>
            <td>{handleEnglish(expenseType)}</td>
            <td>{transactionAmount / currencyMultiplier} {currencyType}</td>
            <td>{transactionDate}</td>
            <td>{currencyMultiplier}</td>
            <td>{confirmationDate==null?"Beklemede":confirmationDate}</td>
            <td className={`badge shadow ${backgroundFixer(status)}`}>{handleEnglish(status)}</td>
            <td>{fileId != null ? <a href={`http://localhost:80/files/${fileId}`} target="_blank"><button className="btn btn-outline-primary" name="accept">İndir</button></a> : "< Belge Yok >"}</td>
           
        </tr>
    )
}