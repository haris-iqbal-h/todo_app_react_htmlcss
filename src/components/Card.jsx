import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import EditTask from '../models/EditTask';

const Card = ({task,index,deleteTask,updateTask}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const handleDelete=()=>{
        deleteTask(index)
    }
    const updateTask1=(task)=>{
        updateTask(task,index)
    }

    return (
        <div className = "card-wrapper rounded">
            <div className = "card-top rounded-top w-100" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header rounded p-2 text-white" style={{"backgroundColor": colors[index%5].primaryColor}}>
                    Title: {task['name']}
                </span>
                <p className = "card-description" style={{"borderColor": colors[index%5].primaryColor}}>
                    {task['description']}
                </p>

                <div className='d-flex mt-auto mx-auto'>
                    <div className='card-edit'>
                        <FontAwesomeIcon
                            icon={faPenToSquare} 
                            style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} 
                            onClick = {()=>setModal(true)} />
                    </div>
                    <div className='card-del'>
                        <FontAwesomeIcon
                            icon={faTrashCan} 
                            style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}}
                            onClick={handleDelete}
                            />
                    </div>
                    
                </div>
        </div>
        <EditTask modal = {modal} toggle = {()=>setModal(false)} updateTask = {updateTask1} task = {task}/>
        </div>  
    )
}

export default Card