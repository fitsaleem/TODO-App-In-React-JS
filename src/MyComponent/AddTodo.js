

import { useState } from "react"
import "./AddTodo.css"
let initialValue={
    title: "",
    description: ""}

function AddTodo({AddYoutubeVideo}){
    console.log("rendaring playButton")
    const [todo , setTodo]=useState(initialValue)
        

    function handleSubmit(e){
        e.preventDefault()
        AddYoutubeVideo(todo)
        setTodo(initialValue)

    }

    function handleChange(e){
        setTodo({...todo,[e.target.name]: e.target.value})

    }



    return(
<form className="form-container">
      <input className="form-input"  onChange={handleChange}   name="title" type="text" value={todo.title} placeholder="Enter Title" />
      <input className="form-input"   onChange={handleChange}  name="description" type="text" value={todo.description} placeholder="Enter Description" />
      <button className="form-submit" onClick={handleSubmit} >Add</button>
    </form>
    )
}

export default AddTodo