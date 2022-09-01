
import './style.css';
import todoitem from './createtodo.js';
import {project ,newproject} from './createproject';
import {addTask, taskNumber} from './HTMLDOM.js'


addTask()

const titleInput= document.querySelector("#input-title")
const dateInput= document.querySelector("#input-date")
const priorityInput= document.querySelector("#input-priority")
const descriptionInput= document.querySelector("#input-description")

const projectTitle= document.querySelector(".project-title")


const submitTask= document.querySelector(".submit-task")

submitTask.addEventListener('click', ()=>{
    
    let newtaskconsole = todoitem(titleInput.value,descriptionInput.value, dateInput.value,priorityInput.value)

    let newProject = newproject(projectTitle.textContent, newtaskconsole, taskNumber)
    
    project.projectlist.push(newProject)
  
    

})






