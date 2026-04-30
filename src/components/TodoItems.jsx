import React from "react";
import "./css/TodoItems.css";
import cross from "./assets/cross.png";
import notTick from "./assets/not_tick.png";
import tick from "./assets/tick.png";

const TodoItems = ({ no, display, text, deleteItem }) => {

    const toggle = (no ) => {
        const data = JSON.parse(localStorage.getItem("Todo"));
        // const updated = data.map((item) => {
        //   if (item.no === no) {
        //     return { ...item, display: item.display === "  " ? "✓" : "  " };
        //   }
        //   return item;
        // });
        // localStorage.setItem("Todo", JSON.stringify(updated));
      };
  return (
    <div className="TodoItem">
      <div className="TodoItem-container" onClick={()=>{
        toggle(no)
      }}>
        {display === "  "? 
          <img src={notTick} alt="" />
         : 
          <img src={tick} alt="" />
        }
        <div className="todoitemText">{text} </div>
      </div>

      <img src={cross} onClick={() => deleteItem(no)} />
    </div>
  );
};

export default TodoItems;
  