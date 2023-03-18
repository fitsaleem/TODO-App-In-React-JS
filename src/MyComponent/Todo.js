import React from "react";
import "./Todo.css";
function Todo({ title="saleem", description="hi" }) {
  console.log("i am todo Component");
  return (
    <>
    
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      
    </>
  );
}

export default Todo;
