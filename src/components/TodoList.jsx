import React, { useEffect, useState } from 'react'
import CreateTask from '../models/CreateTask'
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [taskList,setTaskList]=useState([])
    

    useEffect(() => {
        let arr=JSON.parse(localStorage.getItem("taskList"))
        if(arr){
            setTaskList(arr)
        }
    }, [])
    
    const saveTask=(taskObj)=>{
        console.log(taskObj);
        
        taskList.push(taskObj)
        console.log(taskList)

        localStorage.setItem("taskList",JSON.stringify(taskList))
        setModal(false)
        // console.log(taskList);
    }

    const deleteTask=(index)=>{
        
        const arr=taskList.filter((obj,ind)=>ind!==index)
        // console.log("arr",arr);
        localStorage.setItem("taskList",JSON.stringify(arr))
        setTaskList(arr)
        window.location.reload()
        console.log(index+1," Item deleted");
    }
    const updateTask=(task,index)=>{
        let temp=taskList
        temp[index]=task
        localStorage.setItem("taskList",JSON.stringify(temp))
        setTaskList(temp)
        window.location.reload()
    }

    return (
        <>
        <div className='header text-center'>
            <h3>Todo List</h3>
            <button 
                className='btn btn-primary mt-2'
                onClick={()=>setModal(true)}
            >
            Create Task
            </button>
        </div>
        <div className="task-container">
            {taskList.map((task,index)=>(
                <Card key={index} task={task} index={index} deleteTask={deleteTask} updateTask={updateTask}/>
            ))}
        </div>
        <CreateTask modal={modal} toggle={toggle} save={saveTask} />
        </>
        
    )
}
export default TodoList