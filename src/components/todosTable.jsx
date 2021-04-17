import React from "react";

const TodosTable = ({ todosList, handleComplete, handleDelete }) => {
  return (
    <>
      <div className="renderTable">
        <div>
          {todosList.map((todo) => (
            <div className="todosRender" key={Math.random()}>
              <h3 className={todo.complete ? "completeTodo" : ""}>
                {todo.text}
              </h3>
              <button onClick={() => handleDelete(todo)}>Delete</button>
              <button onClick={() => handleComplete(todo)}>Mark</button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodosTable;
