import { Component } from "react";
import Todo from "./Todo";
import { ConnectedProps, connect } from "react-redux";
import { initialState, init, todoModel } from "../redux/reducers/reducers";
import { addToDo, removeTodo } from "../redux/action-creators/ActionCreators";

interface State {
  id: number;
  name: string;
}
type MyState = {
  todoItems: State[];
  itemEntered: string;
};

const mapStateToProps = (state: typeof initialState) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = {
  addToDo,
  removeTodo,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux;

class TodoList extends Component<Props, MyState> {
  state: MyState = {
    todoItems: [],
    itemEntered: "",
  };

  onChangeHandle = (e: any) => {
    this.setState({
      itemEntered: e.target.value,
    });
  };

  count = 0;

  //   onDeleteHandle = (id: number) => {
  //     const upDatedToDo = this.state.todoItems.filter((item: State) => {
  //       return item.id != id;
  //     });
  //     this.setState({
  //       todoItems: [...upDatedToDo],
  //       itemEntered: "",
  //     });
  //   };

  onAddTodoHandler = () => {
    if (this.state.itemEntered != "") {
      const todoItem: State = {
        id: this.count++,
        name: this.state.itemEntered,
      };

      this.props.addToDo(todoItem);

      //   this.setState({
      //     todoItems: [...this.state.todoItems, todoItem],
      //     itemEntered: "",
      //   });
    }
  };
  render() {   
    console.log(this.props.todo)     
    return (
      <div>
        <input
          type="text"
          value={this.state.itemEntered}
          onChange={this.onChangeHandle}
        />
        <button onClick={this.onAddTodoHandler}> Add Todo </button>
        
        {/* {this.props?.todo.map((item : todoModel )=>{   
          console.log(item)       
          return <Todo key={item.id} id={item.id} todo={item.name}/>
        })} */}

      </div>
    );
  }
}

// const mapStateToProps = (state: TodoType) => {
//   console.log(state);
//   return { todos: state };
// };

export default connector(TodoList);
