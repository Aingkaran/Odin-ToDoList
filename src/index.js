
import './style.css';
import todoitem from './createtodo.js';
import {project ,newproject} from './createproject';
import {addTask, taskNumber} from './HTMLDOM.js'
import { forEach } from 'lodash';


addTask()






    
    
    
    
    

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
              
            }

        }
        

        })
})


const allTasks= document.querySelector(".all-tasks")

allTasks.addEventListener('click', ()=>{
    projectTitle.textContent= allTasks.textContent


    })












for (let i=0;i<project.projectlist.length;i++){

    console.log(project.projectlist[i].getprojectTasks().gettitle())
    console.log(project.projectlist[i].getprojectTasks().getdescription())
    console.log(project.projectlist[i].getprojectTasks().getdueDate())
    console.log(project.projectlist[i].getprojectTasks().getpriority())

}