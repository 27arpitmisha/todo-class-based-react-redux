import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import TodoList from "./component/TodoList";
import store from "./redux/store";

function App() {
  return (
    <>
    
        <TodoList />
       
    </>
  );
}

export default App;
