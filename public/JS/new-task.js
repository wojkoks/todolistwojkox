import {update_task} from '../../modules/update-task.js'
import {delete_task} from '../../modules/delete-task.js'

{document.getElementById("task").addEventListener('keyup',function(event){
    if(event.key==='Enter'){

        const task = document.getElementById('task').value
        if(task){
            addNewTask(task)
            document.getElementById('task').value = ''
        }
    }
})
}
function addNewTask(task){

    let tasks

    if(localStorage.hasOwnProperty('to_do_tasks')){
        tasks = JSON.parse(localStorage.getItem('to_do_tasks'))
        tasks.push({name:task,status:'to do;'})
        

    } else{

        tasks = [
            {
                name:task,
                status:'to do'
            }
        ]
        
    }
    localStorage.setItem('to_do_tasks',JSON.stringify(tasks))

    const tasks_list = document.getElementById("tasks-list")
    const newTask = document.createElement("li")
    newTask.innerText = task

    
    const buttons = document.createElement("div")
    buttons.classList.add("buttons")
    
    const remove = document.createElement("button")
    remove.classList.add("remove")
    
    remove.addEventListener('click',function(){
        delete_task(this.parentNode.parentNode)
    })
    const complete = document.createElement("button")
    complete.classList.add("complete")

    complete.addEventListener('click',function(){
        update_task(this.parentNode.parentNode)
    })

    buttons.appendChild(complete)
    buttons.appendChild(remove)
    newTask.appendChild(buttons)
    
    console.log(newTask)

    tasks_list.prepend(newTask)

}

function _addNewTask(task){

    new Promise((resolve)=>{

        setTimeout(()=>{
            let tasks
        
            if(localStorage.hasOwnProperty('to_do_tasks')){
                tasks = JSON.parse(localStorage.getItem('to_do_tasks'))
                tasks.push({name:task,status:'to do;'})
                resolve(tasks)
                
            } else{
                
                tasks = [
                    {
                        name:task,
                        status:'to do'
                    }
                ]    
                resolve(tasks)
            }
        },3000)
    }).then((tasks)=>{
        localStorage.setItem('to_do_tasks',JSON.stringify(tasks))
    
        const tasks_list = document.getElementById("tasks-list")
        const newTask = document.createElement("li")
        newTask.innerText = task
    
        
        const buttons = document.createElement("div")
        buttons.classList.add("buttons")
        
        const remove = document.createElement("button")
        remove.classList.add("remove")
        
        const complete = document.createElement("button")
        complete.classList.add("complete")
        
        buttons.appendChild(complete)
        buttons.appendChild(remove)
        newTask.appendChild(buttons)
        
        console.log(newTask)
    
        tasks_list.prepend(newTask)
    })

}
