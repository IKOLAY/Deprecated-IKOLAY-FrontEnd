import { useEffect, useState } from "react"

export function IncomeOutcomeMethod() {
    const payment = {
        companyId: 1,
        name: "",
        transactionDate: "",
        transactionAmount: "",
        isPaid: false,
        type: "OUTCOME"
    }
    const [addPayment, setAddPayment] = useState({ ...payment });

    function handleChange(e) {
        if (e.target.name === "isPaid") {
            setAddPayment({ ...addPayment, [e.target.name]: e.target.checked })
        } else {
            setAddPayment({ ...addPayment, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:80/transaction/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addPayment)
        }
        ).then(response => {
            console.log(response);            
            return response.json();
        }).then(data => {
            setAddPayment({...payment})
            console.log(data);
        }).catch(error => console.log(error));
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3 className="text-center p-2" style={{ color: "white" }}>HARCAMA EKLE</h3>
            <div className="d-flex flex-column">

                <div className="input-group">
                    <label>Ödeme Tarihini Giriniz</label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="taridateh"
                        aria-label="date"
                        aria-describedby="basic-addon1"
                        name="transactionDate"
                        value={addPayment.transactionDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mt-1">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ödeme Adını Giriniz"
                        aria-label="payment-type"
                        aria-describedby="basic-addon2"
                        name="name"
                        value={addPayment.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mt-1" >
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Ödeme Tutarınızı Giriniz"
                        aria-label="Amount (to the nearest dollar)"
                        name="transactionAmount"
                        value={addPayment.transactionAmount}
                        onChange={handleChange}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text">TL</span>
                    </div>
                </div>
                <div className="input-group d-flex justify-content-center mt-1">
                    <select name="type" value={addPayment.type} onChange={handleChange} >
                        <option value="OUTCOME" >GIDER</option>
                        <option value="INCOME">GELIR</option>
                    </select>
                    <p style={{ color: "#156CAD" }}>{addPayment.type} SEÇTİNİZ !!</p>
                </div>
            </div>
            <div className="form-check mt-1 d-flex justify-content-between align-items-center">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="isPaid"
                    checked={addPayment.isPaid}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault" style={{ color: "white" }}>
                    Daha Önceden Ödenmiş Ise Burayı Doldurun !!
                </label>
            </div>
            <div className="d-flex flex-row justify-content-center mt-2">
                <button type="submit" className="btn btn-primary" >EKLE</button>
            </div>
        </form>
    )
}