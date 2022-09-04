
import './style.css';
import todoitem from './createtodo.js';
import {project ,newproject} from './createproject';
import {addTask, taskNumber, addProject, deleteTask,newProjectTasks, allProjectsTasks} from './HTMLDOM.js'
import { forEach } from 'lodash';


addTask()
addProject()
deleteTask()
newProjectTasks()
allProjectsTasks()

const titleInput= document.querySelector("#input-title")
const dateInput= document.querySelector("#input-date")
const priorityInput= document.querySelector("#input-priority")
const descriptionInput= document.querySelector("#input-description")

const projectTitle= document.querySelector(".project-title")
const projectSelect= document.querySelectorAll(".projects-sidebar")
const taskContainer= document.querySelector(".tasks-container")


const submitTask= document.querySelector(".submit-task")
const node = document.querySelector(".task-template")
















