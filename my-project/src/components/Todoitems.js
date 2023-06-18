import React, { Component } from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

class Todoitems extends Component {
  render() {
    return (
      <div>
        <Card className="listitem">
          <Card.Header>
            <Nav className="navbar" variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Button variant="outline-info">
                  <FontAwesomeIcon className="button1" icon={faPencil} />
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button className="buttons" variant="outline-danger">
                  <FontAwesomeIcon className="trash" icon={faTrashCan} />
                </Button>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>{this.props.itemInfo.goal}</Card.Text>
            <Card.Text>{this.props.itemInfo.Date}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Todoitems;
