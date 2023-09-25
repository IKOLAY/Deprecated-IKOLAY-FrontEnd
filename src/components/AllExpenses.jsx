import { useState } from "react";
import { useEffect } from "react";


export function AllExpenses(){

    return(
        <>
        <ExpenseList />
        </>
    )
}

function ExpenseList(){
    let total = 0
    const companyId=1;
    //const denemeList = [{name:"Expenses1",totalCost:-10000},{name:"Expenses2",totalCost:-10000},{name:"Expenses3",totalCost:-10000},]
    const[expenseList,setExpenseList] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:80/transaction/test?companyId=${companyId}`).then(resp => {
            if (!resp.ok)
                throw new Error("Hata initiate");
            return resp.json();
        }).then(data => {
            
           setExpenseList(data);
        }).catch(err => console.log(err))
    },[]);
    return (
                <div className="col-8">
                {expenseList == null ? "Yükleniyor...":<ul className="list-group mx-auto">
                <li className="list-group-item text-center" aria-current="true">Harcamalar:</li>
                    {expenseList.map(x=>{
                        total= total+x.totalCost
                        return <ExpenseDetails name={x.name} totalCost={x.totalCost}/>
                    })}
                  
                    <li className="list-group-item text-end" aria-current="true"> Total: {total}</li>
                    </ul>}
                </div>
    )
}

function ExpenseDetails({name,totalCost}) {

return <>
  <li className="list-group-item d-flex justify-content-center gap-5"><span className="">{name}:</span> <span>{totalCost}</span></li>
</>

}

