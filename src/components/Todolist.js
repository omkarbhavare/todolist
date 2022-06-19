import React, { useState } from 'react'
import { Card } from './Card'
import './todolistStyle.css'

export const Todolist = () => {
const [dark,setDark]=useState(false)

const handleDark=()=>{
    setDark(!dark)
}

  return (
    <>
  <div className="title" style={{backgroundColor:!dark ? '#2B3945':'#fafafa', color:!dark ? 'white':'black'}} >

      <h1>TodoList</h1>
      <span className='theme' onClick={()=>handleDark()}>
      {!dark ? (
        <>
        <i class="fa-solid fa-moon fa-2xl"></i>
        </>
      ):(
        <>
        <i class="fa-solid fa-sun fa-2xl"></i>
        </>
      )}
      </span>
  </div>
  <Card dark={dark}/>
    </>
  )
}
