

const project =(()=>{
    let projectlist = []

    return {projectlist}

})()


const newproject=(projectTitle,tasks)=>{

    let getprojecTitle=()=> projectTitle;

    let getprojectTasks=()=> tasks


return {getprojecTitle,getprojectTasks}
}



export  {project, newproject}