import React from "react";
import "./css/TodoItems.css";
import cross from "./assets/cross.png";
import notTick from "./assets/not_tick.png";
import tick from "./assets/tick.png";

const TodoItems = ({ no, display, text }) => {
  return (
    <div className="TodoItem">
      <div className="TodoItem-container">
        <img src={notTick} alt="" />
        <img src={tick} alt="" />
        <div className="todoitemText">{text} </div>
      </div>

      <img src={cross} alt="" />
    </div>
  );
};

export default TodoItems;
  