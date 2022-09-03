
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


const submitTask= document.querySelector(".submit-task")

projectSelect.forEach((projectName)=>{

    projectName.addEventListener('click', ()=>{
        projectTitle.textContent= projectName.textContent


        })
})


const allTasks= document.querySelector(".all-tasks")

allTasks.addEventListener('click', ()=>{
    projectTitle.textContent= allTasks.textContent


    })










let testaddtask = todoitem("Test TItle","test-description", "Test-date","Test Priority")

let testaddproject = newproject(projectTitle.textContent, testaddtask, 1)

project.projectlist.push(testaddproject)

for (let i=0;i<project.projectlist.length;i++){

    console.log(project.projectlist[i].getprojectTasks().gettitle())
    console.log(project.projectlist[i].getprojectTasks().getdescription())
    console.log(project.projectlist[i].getprojectTasks().getdueDate())
    console.log(project.projectlist[i].getprojectTasks().getpriority())

}