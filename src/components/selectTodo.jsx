import React from "react";

const SelectTodo = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="filter_todos">
      <select onChange={statusHandler} name="todos">
        <option id="1" value="all">
          All
        </option>
        <option id="2" value="complete">
          Complete
        </option>
        <option id="3" value="uncomplete">
          Uncompleted
        </option>
      </select>
    </div>
  );
};

export default SelectTodo;
