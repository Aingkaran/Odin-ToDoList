
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



submitTask.addEventListener('click', ()=>{
    
    let newtaskconsole = todoitem(titleInput.value,descriptionInput.value, dateInput.value,priorityInput.value)

    let newProject = newproject(projectTitle.textContent, newtaskconsole, taskNumber)
    
    project.projectlist.push(newProject)
  
    

})






