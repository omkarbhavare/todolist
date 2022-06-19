import React, { useState } from 'react'
import Calendar from 'react-calendar';
import './cardSection.css'
import 'react-calendar/dist/Calendar.css';
import { Displaytask } from './Displaytask';

export const Card = (props) => {
    
    const [task,setTask]=useState();
    const [data,setData]=useState([]);

    const handleTask=(e)=>{
        setTask(e.target.value);        
        console.log(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newData=task;
        console.log(task)
        setData([...data,newData]);
        console.log(data)
    }

    const handleDelete=(x)=>{
        const finalData=data.filter((value,index)=>{
          return index!=x;
        })
        setData(finalData);
      }
    

    return (
        <>
        <div className='cardSection' style={{ backgroundColor: !props.dark ? '#2B3945' : '#fafafa', color: !props.dark ? 'white' : 'black' }} >
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <input type="text" class="form-control" id="inputText" placeholder="Add Task" onChange={handleTask} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Add</button>
                </div>
            </form>
            </div>
            {data.map((value,index)=>{
                return(
                <Displaytask
                key={index} id={index} task={value} dark={props.dark} onSelect={handleDelete}/>
            )})}
        </>
    )
}
