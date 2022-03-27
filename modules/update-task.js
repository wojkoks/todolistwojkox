export const update_task = (item)=>{
    
    const newStatus = item.classList.contains('ready') ? 'to do' : 'ready'
    
    item.classList.toggle('ready')

    const tasks = JSON.parse(localStorage.getItem('to_do_tasks'))
    console.log(item.innerText)
    console.log(tasks)
    const newState = tasks.map(task => 
    
    task.name === item.textContent ? {name:task.name, status:newStatus} : task
    // if(task.name===item.innerText){
    //     return {...task,status:newStatus}
    // }
    // else return {...task}
    )
    
    localStorage.setItem('to_do_tasks',JSON.stringify(newState))
}