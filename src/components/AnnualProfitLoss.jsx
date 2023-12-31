import { useState } from "react"
export function AnnualProfitLoss() {
    return (
        <PeriodSelection />
    )
}

function PeriodSelection() {
    //companyId için => const defUser = window.localStorage.getItem("user"); dan user çekilip localstorage kaydedilecek.
    const [cardList, setCardList] = useState([]);
    const [status, setStatus] = useState("active");
    const [period, setPeriod] = useState({ start: "", end: "" })
    function handleChange(e) {
        setPeriod({ ...period, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("pending")
        const annuals = { ...period, companyId: 1 }
        setPeriod(annuals);
        fetch("http://localhost:80/transaction/annualprofitloss", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(annuals)
        }).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            setCardList(data)
            setStatus("success")
        }).catch(err => setStatus("error"))

    }

    return (
        <>
            <form typeof="submit" className="bg-light text-start border rounded p-4" onSubmit={handleSubmit}>
                <h3 className="text-center pb-2">YILLIK KAR/ZARAR BİLGİLERİ</h3>
                <div className="border rounded p-4 mb-4 shadow-sm ">
                    <div className="row mb-3">
                        <label htmlFor="start" className="col-6">
                            Başlangıç Tarihi
                        </label>
                        <input type="date" className="col-6" name="start" id="start" onChange={handleChange} value={period.start} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="end" className="col-6">
                            Bitiş Tarihi
                        </label>
                        <input type="date" className=" col-6" name="end" id="end" onChange={handleChange} value={period.end} />
                    </div>
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-info">Sorgula</button>
                </div>
            </form>


            {status == "success" && <div className="row d-flex justify-content-center gap-3 p-1">
                {cardList.map(content => <AnnualCard key={content.year} year={content.year} yearsTotal={content.yearsTotal} />)}
                {cardList.length == 0 && <div className="row border border-danger rounded text-center text-danger">
                    <span>Girilen aralık değerleri için herhangi bir Kar/Zarar bilgisi bulunmamaktadır!</span>
                </div>}
            </div>}
            {status == "pending" && <div className="text-center">Yükleniyor...</div>}
            {status == "error" && <div className="row border border-danger rounded text-center text-danger">
                <span>Hata meydana geldi lütfen istenilen türde giriş yapın.</span>
            </div>}

            
        </>
    )
}

function AnnualCard({ year, yearsTotal }) {

    const style = {
        width: "18rem",
    }

    return (
        <>
            <div className="card text-center shadow" style={style}>
                <div className="card-body">
                    <h5 className="card-title">{year}</h5>
                    <p className={`${yearsTotal > 0 ? "text-success" : "text-danger"} card-text shadow`}>{yearsTotal}</p>
                </div>
            </div>
        </>
    )

}