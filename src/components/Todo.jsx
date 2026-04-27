import React, { useEffect, useRef } from "react";
import "./css/Todo.css";
import { useState } from "react";

let count = 0
const Todo = () => {
  const [Todo, setTodo] = useState([]);
  const inputref = useRef(null);

   const add = ()=>{
    setTodo([...Todo,{no:count++, text:inputref.current.value}]);
    inputref.current.value = ''

   }

  useEffect(()=>{
console.log(Todo)
  },[Todo])

  return (
    <div className="Todo">
      <div className="Header">Todo List</div>
      <div className="Input">
        <input ref={inputref} type="text" placeholder="Add a task" />
        <button onClick={()=>{add()}}>Add</button>
      </div>
      <div className="todoList">
 {Todo.map((Todo)=>{return <div key={Todo.no}>{Todo.text}</div>})}
      </div>
    </div>
  );
};

export default Todo;
