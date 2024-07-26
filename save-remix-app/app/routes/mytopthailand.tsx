import { useState } from "react";
import { mydata } from "./wherehousedata";

export default function Topthai () {
    const [status, setstatus]= useState(true)

    function handleclickactive () {
        setstatus(true)
    }
    function handleclicknonactive () {
        setstatus(false)
    }
    const nobrin = mydata.filter(syx =>
        syx.status=== status
    )
    const item = nobrin.map(item =>
        <div key={item.id}>
            <h1>{item.name} (รหัสนักศึกษา: {item.id} )</h1>
            <p>{item.age}</p>
            <img 
                src= {item.url}
                title= {item.name}
                className="h-128 w-full object-contain"
            
            />
        </div>
    ) ;
return (
<>
    <h1 className="text-3xl text-teal-500 bg-slate-800">รายชื่อสมาชิก</h1>
    <hr/>
    {item}
    <hr/>
    <button className="bg-emerald-400 rounded-3xl h-18 w-20" onClick={handleclickactive}>active</button>
    <button className="bg-emerald-400 rounded-3xl h-18 w-20" onClick={handleclicknonactive}>nonactive</button>

</>
)

}