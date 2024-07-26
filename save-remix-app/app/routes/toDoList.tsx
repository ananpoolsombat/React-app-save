const ToDos = [
    {
        id : 100 , 
        title : "โครงการสัมมนากีฬาอีสปอร์ต" ,
        status : true
    } ,
    {
        id : 200 ,
        title : "โครงการกิจกรรมสานสัมพันธ์นักศึกษา" ,
        status : false
    } ,
    {
        id : 300 ,
        title : "ROV BUSIT CHAMPIONSHIP" ,
        status : false
    } ,
    {
        id : 400 ,
        title : "โครงการอบรมนักศึกษา" ,
        status : true
    } 
] ;


function ToDoitem ( {id , title , status }  :  { id : number , title : string , status : boolean  } ) {
    if(status)
        return <li key = {id} >  {title} ✔️ </li> ;
    else
        return <li key = {id} > {title} </li> ;
}

export default function ToDoLists () {
    const item = ToDos.map(item => 
        <ToDoitem  key={item.id} id ={item.id} title={item.title} status ={item.status} />
    ) ;

    return (
    <>  
        <h1>กิจกรรมที่จะเกิดขึ้นเร็วๆนี้</h1>
        <hr></hr>
        <ul>{item}</ul>
    </>
    )
}