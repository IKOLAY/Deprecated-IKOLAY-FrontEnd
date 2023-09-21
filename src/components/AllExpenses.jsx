import { useRef } from "react";


export function AllExpenses(){

    return(
        <>
        <ExpenseList />
        </>
    )
}

function ExpenseList(){
    let total = 0
    const denemeList = [{name:"Expenses1",totalCost:-10000},{name:"Expenses2",totalCost:-10000},{name:"Expenses3",totalCost:-10000},]
    
    return (
        <>
        <div className="contaier ">
            <div className="row my-5">
                <div className="col-8 mx-auto">
                <ul className="list-group mx-auto">
                <li className="list-group-item active text-center" aria-current="true">Harcamalar:</li>
                    {denemeList.map(x=>{
                        total= total+x.totalCost
                        return <ExpenseDetails name={x.name} totalCost={x.totalCost}/>
                    })}
                  
                    <li className="list-group-item active text-end" aria-current="true"> Total: {total}</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

function ExpenseDetails({name,totalCost}) {

return <>
  <li className="list-group-item d-flex justify-content-center gap-5"><span className="border">{name}:</span> <span>{totalCost}</span></li>
</>

}

