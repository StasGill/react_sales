import { useState } from "react";
import "./todolist.css";

function ToDoList() {
  const [text, setText] = useState([]);
  const [toDos, setToDos] = useState([]);

  const handleChange = () => {
    const date = Date.now();
    setToDos([...toDos, { text: text, id: date }]);
  };

  const handleDelete = (id) => {
    const result = toDos.filter((item) => item.id !== id);
    setToDos(result);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={handleChange}>Press</button>
      <ul className="list">
        {toDos.map((toDos) => (
          <li key={toDos.id} className="list_item">
            {toDos.text}
            <button
              className="list_button"
              onClick={() => handleDelete(toDos.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
