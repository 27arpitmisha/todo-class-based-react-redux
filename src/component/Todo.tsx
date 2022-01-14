import { Component } from "react";
import { convertTypeAcquisitionFromJson } from "typescript";

type TodoProps = {
  todo: string;
  id: number; 
};
class Todo extends Component<TodoProps> {
  constructor(props: TodoProps) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <>
        <h3 onClick={() => {
            console.log("object");           
          }}>
          {this.props.id} ) {this.props.todo}
        </h3>        
      </>
    );
  }
}
export default Todo;
