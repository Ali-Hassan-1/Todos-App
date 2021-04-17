import React from "react";

const InputTodos = ({ value, handleChange, handleClick }) => {
  return (
    <React.Fragment>
      <textarea
        placeholder="Add Your Todos here..."
        value={value}
        onChange={handleChange}
        autoFocus
      />
      <button className="input_btn" onClick={handleClick}>
        Add
      </button>
    </React.Fragment>
  );
};

export default InputTodos;
