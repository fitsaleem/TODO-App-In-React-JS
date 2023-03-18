import { useState } from "react";
import "./App.css";
import AddTodo from "./MyComponent/AddTodo";
import Todo from "./MyComponent/Todo";
import TodoList1 from "./MyComponent/TodoList";

function App() {
  const [TodoList, setTodoList]=useState(TodoList1)

  function AddYoutubeVideo(todo){
    setTodoList([...TodoList,{...todo,id: TodoList.length+1}])
  }


  return (
    <>
      <div>
        <h1>ToDO App</h1>
      </div>
      <AddTodo AddYoutubeVideo={AddYoutubeVideo}></AddTodo>
      {TodoList.map((value) => (
        <Todo
          title={value.title}
          description={value.description}
          key={value.id}
        ></Todo>
      ))}
    </>
  );
}

export default App;
