import todoitem from './createtodo.js';
import {project ,newproject} from './createproject';

let taskNumber= 0

const addProject=(()=>{
    const submitProject= document.getElementById("input-project")
    const projectContainer= document.querySelector(".projects-container")
    const addProjectBtn =document.querySelector(".project-add1")

    addProjectBtn.addEventListener('click', ()=>{
        const projectName= document.createElement('div')
        projectName.innerText = submitProject.value
        projectName.setAttribute("class","projects-sidebar")

        projectContainer.appendChild(projectName)


    })


})


const deleteTask = (()=>{
    



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

           

    })
    


})






export {addTask, taskNumber, addProject, deleteTask}

