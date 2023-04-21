import React, { useEffect, useState } from 'react'
import CreateTask from '../models/CreateTask'
import Card from './Card1';

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
        setTaskList([...taskList,taskObj])
        localStorage.setItem("taskList",JSON.stringify(taskList))
        setModal(false)
        // console.log(taskList);
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
                <Card task={task} index={index} />
            ))}
        </div>
        <CreateTask modal={modal} toggle={toggle} save={saveTask}/>
        </>
        
    )
}
export default TodoList