import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todoitems from "./components/Todoitems";
import Todolist from "./components/Todolist";
import TodolistForm from "./components/TodolistForm";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          goal: "",
          Date: "",
        },
      ],
    };
  }
  addNewGoal = (goals) => {
    this.setState({
      todo: [...this.state.todo, goals],
    });
  };
  render() {
    return (
      <>
        <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
          <i className="fas fa-check-square me-1"></i>
          <u>Day to-do-ay</u>
        </p>
        <div className="mainbox">
          <Container fluid>
            <Row>
              <Col lg={8} className="todobox">
                <TodolistForm addGoals={this.addNewGoal} />
              </Col>
            </Row>
            <Row>
              <Col lg={8} className="todolist">
                <Todolist madeList={this.state.todo} />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default App;
