import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled, showFlag } = props;
  return (
    <div className="input-area" style={{ display: showFlag ? "none" : "" }}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
