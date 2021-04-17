import React, { useState, useEffect } from "react";
import InputTodos from "./inputTodos";
import TodosTable from "./todosTable";
import SelectTodo from "./selectTodo";

const Todos = () => {
  let [inputText, setInput] = useState("");
  const [todosList, setTodoList] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  let [complete, setComplete] = useState(false);
  let [status, setStatus] = useState("");
  const todo = { id: 1, complete: false, text: inputText };

  useEffect(() => {
    handleGenreSelect();
  }, [status, todosList]);

  const handleGenreSelect = () => {
    let filtered = todosList;

    if (status === "complete")
      filtered = todosList.filter((m) => m.complete === true);
    else if (status === "uncomplete")
      filtered = todosList.filter((m) => m.complete === false);
    else filtered = todosList;

    setFilteredTodos(filtered);
  };

  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (!inputText) return;
    todosList.unshift(todo);
    setStatus("all");
    setInput("");
  };

  const handleDelete = (todo) => {
    const orignalTodosList = todosList;
    const filteredList = orignalTodosList.filter((e) => e !== todo);
    setTodoList(filteredList);
  };

  const handleComplete = (todo) => {
    const orignalTodosList = todosList;
    if (todosList.map((m) => m.id === todo.id)) {
      todo.complete = complete;
      setComplete(!complete);
      setTodoList(orignalTodosList);
    }
  };

  return (
    <React.Fragment>
      <h2 className="appName">Todos App</h2>
      <InputTodos
        value={inputText}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <SelectTodo setStatus={setStatus} />
      <TodosTable
        todosList={filteredTodos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
      <div className="empty_todo">
        {todosList.length === 0 ? <h2>Not todo Yet.</h2> : ""}
      </div>
    </React.Fragment>
  );
};

export default Todos;
