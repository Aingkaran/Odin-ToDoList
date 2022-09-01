



const todoitem=(title,description,dueDate,priority)=>{

    let gettitle=()=> title;

    let getdescription=()=>  description;

    let getdueDate=()=> dueDate;

    let getpriority=()=> priority;

    return {gettitle,getdescription,getdueDate,getpriority}



}


export default todoitem