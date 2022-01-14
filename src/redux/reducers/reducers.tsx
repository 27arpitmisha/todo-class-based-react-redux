import TodoList from "../../component/TodoList";
import Todo from "../../component/TodoModal";
import actionConstant from "../action-constants/ActionContants";

export interface todoModel {
    name: string;
    id: number;  
}

export const init: todoModel[] = [];

 export const initialState = {
    todo : init
}


const todoReducer = (state = initialState, action: { type: string; payload: Todo }) => {  
  switch (action.type) {
    case actionConstant.ADD_TODO:
      {      
        const todoList = [
          ...state.todo,
           {
            name: action.payload.name,
            id: action.payload.id,
          },
        ];  
        console.log(state)
        return {todo : todoList};
      }
      break;
    case actionConstant.DELETE_TODO:
      {
        const upDatedToDo = state.todo.filter((item: any) => {
          return item.id != action.payload.id;
        });
        return upDatedToDo;
      }
      break;
    default:
      return state;
  }
};

export default todoReducer;
