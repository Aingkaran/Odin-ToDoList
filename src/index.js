
import './style.css';
import todoitem from './createtodo.js';
import {project ,newproject} from './createproject';
import HTMLManipulation from './HTMLDOM.js'


HTMLManipulation

const submitTask= document.querySelector(".submit-task")

const taskContainer= document.querySelector(".tasks-container")

const node = document.querySelector(".task")

const clone = node.cloneNode(true)

node.remove()


submitTask.addEventListener('click', ()=>{
    taskContainer.appendChild(clone)
})


let newtask = todoitem("Clean Room","Make sure you get everything", "3/2/2022","High")
let newtask2 = todoitem("Clean Room","Make sure you get everything", "3/2/2022","High")




let addlist= [newtask.gettitle(),newtask.getdescription(), newtask.getdueDate(),newtask.getpriority()]
let addlist2= [newtask2.gettitle(),newtask2.getdescription(), newtask2.getdueDate(),newtask2.getpriority()]
let cleaningProject= newproject("Clean your room", addlist)
let bookingProject= newproject("Clean your room", addlist2)


project.projectlist.push(cleaningProject)
project.projectlist.push(bookingProject)

console.log(project.projectlist[0].getprojecTitle())

console.log(bookingProject.getprojecTitle())

console.log(newtask.getdescription())



