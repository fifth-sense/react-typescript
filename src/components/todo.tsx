import React, { useState } from "react";

interface Todo {
  id: string;
  text: string;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (text.trim() === "") return;
    const newTodo: Todo = { id: `_${text}_`, text };
    setTodos([...todos, newTodo]);
    setText("");
  };
  const deleteTodo = (id: string) => {
    const updateTodo = todos.filter((t) => t.id !== id);
    setTodos(updateTodo);
  };
  return (
    <div>
      <h2>Todos</h2>
      <input
        type="text"
        value={text}
        placeholder="what are you up to today!"
        onChange={(e) => setText(e.target.value)}
        style={{ padding: 10 }}
      />
      <button onClick={() => addTodo()}>Add</button>
      <div>
        <ul >
          {todos &&
            todos.map((t) => {
              return (
                <div style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between'  }} >
                  <li style={{padding: 8}}>{t.text}</li>
                  <button onClick={() => deleteTodo(t.id)}>X</button>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default Todos;
