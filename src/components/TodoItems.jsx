import "./css/TodoItems.css";
import cross from "./assets/cross.png";
import notTick from "./assets/not_tick.png";
import tick from "./assets/tick.png";

const TodoItems = ({ no, display, text, setTodo }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("Todo"));
    data = data.filter((Todo) => Todo.no !== no);
    setTodo(data);
  };
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("Todo"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodo(data);
  };
  return (
    <div className="TodoItem">
      <div
        className="TodoItem-container"
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={notTick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        <div className="todoitemText">{text} </div>
      </div>

      <img src={cross} onClick={() => deleteTodo(no)} />
    </div>
  );
};

export default TodoItems;
