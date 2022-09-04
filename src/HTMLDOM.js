import todoitem from './createtodo.js';
import {project ,newproject} from './createproject';


let taskNumber= 0

const allProjectsTasks=(()=>{

    const titleInput= document.querySelector("#input-title")
const dateInput= document.querySelector("#input-date")
const priorityInput= document.querySelector("#input-priority")
const descriptionInput= document.querySelector("#input-description")

const projectTitle= document.querySelector(".project-title")
const projectSelect= document.querySelectorAll(".projects-sidebar")
const taskContainer= document.querySelector(".tasks-container")


const submitTask= document.querySelector(".submit-task")
const node = document.querySelector(".task-template")







const allTasks= document.querySelector(".all-tasks")

allTasks.addEventListener('click', ()=>{
    newProjectTasks()

    projectTitle.textContent= allTasks.textContent
    const taskDelete = document.querySelectorAll(".task")

        taskDelete.forEach((removeTask)=>{

            removeTask.remove()
        })

        for (let i=0;i<project.projectlist.length;i++){
            const clone = node.cloneNode(true)
    
            clone.setAttribute("value", project.projectlist[i].getprojecttaskNumber())
            clone.setAttribute("class", "task")

            const taskTitle =  clone.querySelector(".task-title")
            const taskPriority =  clone.querySelector(".task-priority")
            const taskDate =  clone.querySelector(".task-date")
    
            taskTitle.textContent= project.projectlist[i].getprojectTasks().gettitle()
            taskPriority.textContent= project.projectlist[i].getprojectTasks().getpriority()
            taskDate.textContent= project.projectlist[i].getprojectTasks().getdueDate()
            
            taskContainer.appendChild(clone)

            deleteTask()

              
            

        }
    })

})

const newProjectTasks=(()=>{

    const titleInput= document.querySelector("#input-title")
const dateInput= document.querySelector("#input-date")
const priorityInput= document.querySelector("#input-priority")
const descriptionInput= document.querySelector("#input-description")

const projectTitle= document.querySelector(".project-title")
const projectSelect= document.querySelectorAll(".projects-sidebar")
const taskContainer= document.querySelector(".tasks-container")


const submitTask= document.querySelector(".submit-task")
const node = document.querySelector(".task-template")




projectSelect.forEach((projectName)=>{
    projectName.addEventListener('click', ()=>{
        deleteTask()
        

        const taskDelete = document.querySelectorAll(".task")

        taskDelete.forEach((removeTask)=>{

            removeTask.remove()
        })

        projectTitle.textContent= projectName.textContent

        for (let i=0;i<project.projectlist.length;i++){
            if(project.projectlist[i].getprojecTitle()== projectTitle.textContent ){
                const clone = node.cloneNode(true)
        
                clone.setAttribute("value", project.projectlist[i].getprojecttaskNumber())
                clone.setAttribute("class", "task")

                const taskTitle =  clone.querySelector(".task-title")
                const taskPriority =  clone.querySelector(".task-priority")
                const taskDate =  clone.querySelector(".task-date")
        
                taskTitle.textContent= project.projectlist[i].getprojectTasks().gettitle()
                taskPriority.textContent= project.projectlist[i].getprojectTasks().getpriority()
                taskDate.textContent= project.projectlist[i].getprojectTasks().getdueDate()
                
                taskContainer.appendChild(clone)
                deleteTask()

              
            }

        }
        

        })
})


})

const addProject=(()=>{
    
    const submitProject= document.getElementById("input-project")
    const projectContainer= document.querySelector(".projects-container")
    const addProjectBtn =document.querySelector(".project-add1")

    addProjectBtn.addEventListener('click', ()=>{
        const projectName= document.createElement('div')
        projectName.innerText = submitProject.value
        projectName.setAttribute("class","projects-sidebar")

        projectContainer.appendChild(projectName)
        newProjectTasks()
        deleteTask()
        allProjectsTasks()


        


    })


})


const deleteTask = (()=>{
    
    const deleteBtn= document.querySelectorAll(".delete")
    
    deleteBtn.forEach((deleteTask)=>{
        deleteTask.addEventListener('click',()=>{
            const deletedTask= deleteTask.parentElement.parentElement
        deletedTask.remove()

        for (let i=0;i<project.projectlist.length;i++){
            if(project.projectlist[i].getprojecttaskNumber()==deleteTask.parentElement.parentElement.attributes["value"].value){
                project.projectlist.splice(i,1)
          

            }
        }


        })
        


    })


})

const addTask=(()=>{
   
    const submitTask= document.querySelector(".submit-task")

    const taskContainer= document.querySelector(".tasks-container")

    const node = document.querySelector(".task-template")

    const titleInput= document.querySelector("#input-title")
    const dateInput= document.querySelector("#input-date")
    const priorityInput= document.querySelector("#input-priority")


    const descriptionInput= document.querySelector("#input-description")

    const projectTitle= document.querySelector(".project-title")
    const projectSelect= document.querySelectorAll(".projects-sidebar")






    submitTask.addEventListener('click', ()=>{
        deleteTask()
        const clone = node.cloneNode(true)
        taskNumber+= 1
        console.log(taskNumber)
       

        clone.setAttribute("value", taskNumber)
        clone.setAttribute("class", "task")

    

        const taskTitle =  clone.querySelector(".task-title")
        const taskPriority =  clone.querySelector(".task-priority")
        const taskDate =  clone.querySelector(".task-date")

        taskTitle.textContent= titleInput.value
        taskPriority.textContent= priorityInput.value
        taskDate.textContent= dateInput.value
        
        taskContainer.appendChild(clone)
        let newtaskconsole = todoitem(titleInput.value,descriptionInput.value, dateInput.value,priorityInput.value)

        let newProject = newproject(projectTitle.textContent, newtaskconsole, taskNumber)
    
        project.projectlist.push(newProject)

        deleteTask()

    })
    


})






export {addTask, taskNumber, addProject, deleteTask, newProjectTasks, allProjectsTasks}

