import React from 'react'
import './DisplayTask.css'
export const Displaytask = (props) => {
  


  
  return (
    <>
    <div className='row displayBody' style={{ backgroundColor: !props.dark ? '#2B3945' : '#fafafa', color: !props.dark ? 'white' : 'black' }}>
        <div className='col-4 task'>{props.task}</div>
        <div className='col-1 pen'><i class="fa-solid fa-pen"></i></div>
        <div className='col-1 delete' onClick={()=>{props.onSelect(props.id)}}><i class="fa-solid fa-trash"></i></div>
    </div>
    </>
  )
}
