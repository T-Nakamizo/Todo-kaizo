import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import { Buttonarea } from "./components/Buttonarea";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [inputTodoShowFlag, setInputTodoShowFlag] = useState(false);
  const [incompleteShowFlag, setIncompleteShowFlag] = useState(false);
  const [completeShowFlag, setCompleteShowFlag] = useState(false);
  const [mypageShowFlag, setMypageShowFlag] = useState(true);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickAllView = () => {
    setInputTodoShowFlag(false);
    setIncompleteShowFlag(false);
    setCompleteShowFlag(false);
    setMypageShowFlag(true);
  };

  const onClickIncompleteView = () => {
    setInputTodoShowFlag(true);
    setIncompleteShowFlag(true);
    setCompleteShowFlag(false);
    setMypageShowFlag(true);
  };

  const onClickCompleteView = () => {
    setInputTodoShowFlag(true);
    setIncompleteShowFlag(false);
    setCompleteShowFlag(true);
    setMypageShowFlag(true);
  };

  const onMyPageView = () => {
    setInputTodoShowFlag(true);
    setIncompleteShowFlag(true);
    setCompleteShowFlag(true);
    setMypageShowFlag(false);
  };

  return (
    <>
      <Buttonarea
        onClickAllView={onClickAllView}
        onClickCompleteView={onClickCompleteView}
        onClickIncompleteView={onClickIncompleteView}
        onMyPageView={onMyPageView}
      />
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
        showFlag={inputTodoShowFlag}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までです。消化してください。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        showFlag={incompleteShowFlag}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
        showFlag={completeShowFlag}
      />
      <div
        className="mypage-area"
        style={{ display: mypageShowFlag ? "none" : "" }}
      >
        <p>氏名：</p>
        <p>住所：</p>
        <p>電話番号：</p>
      </div>
    </>
  );
};
