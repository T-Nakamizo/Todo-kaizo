import React from "react";

export const Buttonarea = (props) => {
  const {
    onClickAllView,
    onClickCompleteView,
    onClickIncompleteView,
    onMyPageView
  } = props;
  return (
    <div className="button-area">
      <button onClick={onClickAllView}>TOP</button>
      <button onClick={onClickCompleteView}>未完了のTODO</button>
      <button onClick={onClickIncompleteView}>完了のTODO</button>
      <button onClick={onMyPageView}>マイページ</button>
    </div>
  );
};
