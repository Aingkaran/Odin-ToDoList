
let taskNumber= 0
const addTask=(()=>{
   
    const submitTask= document.querySelector(".submit-task")

    const taskContainer= document.querySelector(".tasks-container")

    const node = document.querySelector(".task")

    const titleInput= document.querySelector("#input-title")
    const dateInput= document.querySelector("#input-date")
    const priorityInput= document.querySelector("#input-priority")




    node.remove()


    submitTask.addEventListener('click', ()=>{
        
        const clone = node.cloneNode(true)
        taskNumber+= 1
        console.log(taskNumber)
       

        clone.setAttribute("value", taskNumber)

        

        const taskTitle =  clone.querySelector(".task-title")
        const taskPriority =  clone.querySelector(".task-priority")
        const taskDate =  clone.querySelector(".task-date")

        taskTitle.textContent= titleInput.value
        taskPriority.textContent= priorityInput.value
        taskDate.textContent= dateInput.value
        
        taskContainer.appendChild(clone)

    

    })


})






export {addTask, taskNumber}

