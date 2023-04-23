import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal,task,toggle ,updateTask}) => {
    const [name,setName]=useState(task.name)
    const [description,setDesription]=useState(task.description)
    
    function handleSubmit(e) {
        e.preventDefault()
        let task={name,description}
        setDesription('')
        setName('')
        console.log(task);
        updateTask(task)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
                <ModalBody>
                    <form >
                        <div className="form-group">
                            <label className='form-label'>Task Name</label>
                            <input 
                                type='text'
                                className='form-control'
                                placeholder='write somethying...'
                                value={name}
                                name='Name'
                                onChange={(e)=>setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className='form-label'>Description</label>
                            <textarea 
                                rows="5"
                                required
                                name='Description'
                                value={description}
                                onChange={(e)=>setDesription(e.target.value)}
                                className='form-control'
                            ></textarea>
                        </div>
                        
                    </form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={handleSubmit}>
                    Edit Task
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditTask