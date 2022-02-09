import React, { useState } from 'react'

import Button from './Button'

import './AddTask.css'

const AddTask = ({ handleTaskAddition }) => {

    const [inputData, setInputDate] = useState('')

    const handleInputChange = e => {
        setInputDate(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputDate('')
    }

    return ( 
        <div className='add-task-container'>
            <input onChange={handleInputChange} value={inputData} className='add-task-input' type="text" />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Criar</Button>
            </div>
        </div>
     )
}
 
export default AddTask