import React from "react";
import HelloRedux from "./HelloRedux"
import CounterRedux from "./CounterRedux";
import Addredux from "./AddRedux"
import TodoForm from "./todos/TodoForm";
const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <Addredux/>
      <TodoForm/>
    </div>
  );
};

export default ReduxExamples;