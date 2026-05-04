import React, { useEffect, useRef } from "react";
import "./css/Todo.css";
import { useState } from "react";
import TodoItems from "./TodoItems";

let count = 0;
const Todo = () => {
  const [Todo, setTodo] = useState([]);
  const inputref = useRef(null);

  const add = () => {
    setTodo([
      ...Todo,
      { no: count++, text: inputref.current.value, display: "" },
    ]);
    inputref.current.value = "";
    localStorage.setItem("Todo_count", count);
  };

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("Todo")));
    count = localStorage.getItem('Todo_count')
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("Todo", JSON.stringify(Todo));
      console.log(Todo)
    }, 100);
  }, [Todo]);

  // const deleteItem = (id) => {
  //   const updated = Todo.filter((item) => item.no !== id);
  //   setTodo(updated);
  // };

  return (
    <div className="Todo">
      <div className="Header">Todo List</div>
      <div className="Input">
        <input ref={inputref} type="text" placeholder="Add a task" />
        <button
          onClick={() => {
            add();
          }}
        >
          Add
        </button>
      </div>
      <div className="todoList">
        {Todo.map((item, index) => {
          return (
            <TodoItems
              key={index}
              no={item.no}
              text={item.text}
              display={item.display}
              text={item.text}
              setTodo ={setTodo}
              // deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
