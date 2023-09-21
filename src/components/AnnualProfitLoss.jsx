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

    function handleSubmit(e){
        e.preventDefault();
        setStatus("pending")
        setPeriod({ ...period, companyId: 1 });
        fetch("http://localhost:80/transaction/annualprofitloss", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(period)
        }).then(resp => {
            if(!resp.ok)
           throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            setCardList(data)
           setStatus("success")
        }).catch(err =>setStatus("error"))
 
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-8 m-auto my-4">
                            <form action="" className="border p-5" onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <label htmlFor="start" className="text-light col-6">
                                        Başlangıç Tarihi
                                    </label>
                                    <input type="date" className="col-6" name="start" id="start" onChange={handleChange} value={period.start} />
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="end" className="text-light col-6">
                                        Bitiş Tarihi
                                    </label>
                                    <input type="date" className=" col-6" name="end" id="end" onChange={handleChange} value={period.end} />
                                </div>
                                <div className="row text-right">
                                    <button type="submit" className="btn btn-primary">Sorgula</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

               { status=="success" && <div className="row d-flex justify-content-center gap-3 p-1">
                    {cardList.map(content => <AnnualCard year={content.year} yearsTotal={content.yearsTotal}/>)}
                    {cardList.length==0 && <div className="row border border-danger rounded text-center text-danger">
                        <span>Girilen aralık değerleri için herhangi bir Kar/Zarar bilgisi bulunmamaktadır!</span>
                    </div>}
                </div>}
                { status =="pending" && <div className="text-center">Yükleniyor...</div>}
                {  status =="error" && <div className="row border border-danger rounded text-center text-danger">
                        <span>Hata meydana geldi lütfen istenilen türde giriş yapın.</span>
                    </div>}
            </div>

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