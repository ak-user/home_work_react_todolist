import React from "react";
import { connect } from "react-redux";
import { showAll, showActive, showDone } from "../../ducks/todos";
import NewItemForm from "./NewItemForm";
import List from "../Todo/List";

class Todo extends React.Component {
  render() {
    const { showAll, showActive, showDone } = this.props;
    return (
      <div>
        <h1>todo</h1>
        <button onClick={() => showAll()}>All</button>
        <button onClick={() => showActive()}>Active</button>
        <button onClick={() => showDone()}>Done</button>
        <NewItemForm />
        <List />
      </div>
    );
  }
}

export default connect(
  () => {},
  {
    showAll,
    showActive,
    showDone
  }
)(Todo);
