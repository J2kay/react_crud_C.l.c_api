import React, { Component } from "react";
import { Form } from "react-bootstrap";

class TodolistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: "",
      Date: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addGoals(this.state);
  };
  render() {
    return (
      <>
        <div>
          <Form
            onSubmit={this.handleSubmit}
            className="d-flex justify-content-center align-items-center mb-4"
          >
            <div className="form-outline flex-fill">
              <Form.Control
                placeholder="To do list here"
                as="textarea"
                rows={3}
                name="goal"
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-info ms-2">
              Add
            </button>
          </Form>
        </div>
        <div>
          <Form.Label>Due date</Form.Label>
          <Form.Control
            placeholder="Due date"
            className="date"
            type="date"
            name="Date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}

export default TodolistForm;
