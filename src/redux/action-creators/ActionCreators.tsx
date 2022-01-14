import Todo from "../../component/TodoModal";
import actionConstant from "../action-constants/ActionContants";

export const addToDo = (todos: Todo) => {
  return {
    type: actionConstant.ADD_TODO,
    payload: todos,
  };
};

export const removeTodo = (id: number) => {
  return {
    type: actionConstant.ADD_TODO,
    payload: id,
  };
};
