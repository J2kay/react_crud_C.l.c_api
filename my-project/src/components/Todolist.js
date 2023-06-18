import React, { Component } from "react";
import Todoitems from "./Todoitems";

class Todolist extends Component {
  render(props) {
    return (
      <div>
        {this.props.madeList.map((item, index) => {
          return <Todoitems itemInfo={item} key={index} />;
        })}
      </div>
    );
  }
}

export default Todolist;
