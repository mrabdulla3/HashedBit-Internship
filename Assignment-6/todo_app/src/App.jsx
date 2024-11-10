import { useState } from 'react'
import './App.css'

function App() {
     const [value, setValue]=useState('');
     const [display, setDisplay]=useState([]);

     const handleValueChange = (event) => {
      setValue(event.target.value); 
    };

    const handleAddTask=()=>{
      if(value.trim()!==''){
        setDisplay([...display,{text:value,completed: false }]);
        setValue('');
      }
    
    }

    const handleToggleComplete=(index)=>{
    const updateTask=display.map((task,i)=>
      i===index? {...task,completed:!task.completed}:task
    );
setDisplay(updateTask);
    }

    const handleDeleteTask=(index)=>{
     const updatedTask=display.filter((_, i) => i !== index);
     setDisplay(updatedTask);
    }

  return (
    <>
    <div className="container">
      <input type="text" placeholder='Enter your task'value={value} onChange={handleValueChange}/><button onClick={handleAddTask} style={{ marginLeft: '5px' }}>Add</button>

      <div className="taskList">
      <ul >
        {display.map((task, index) => (
          <li
            key={index}
            style={{
              alignItems: 'center',
              marginBottom: '8px',
               textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? 'gray' : 'black'
            }}
          >
            <span style={{ flex: 1 }} onClick={() => handleToggleComplete(index)}>
              {task.text}
            </span>
            <button onClick={()=> handleDeleteTask(index)} style={{marginLeft:'100px'}}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
    </>
  )
}

export default App
