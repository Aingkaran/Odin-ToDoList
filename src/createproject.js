

const project =(()=>{
    let projectlist = []

    return {projectlist}

})()


const newproject=(projectTitle,tasks,taskNumber)=>{

    let getprojecTitle=()=> projectTitle;

    let getprojectTasks=()=> tasks
    
    let getprojecttaskNumber=()=> taskNumber


return {getprojecTitle,getprojectTasks,getprojecttaskNumber}
}



export  {project, newproject}