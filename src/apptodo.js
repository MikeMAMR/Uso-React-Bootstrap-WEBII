import React from "react";
import {Button, Container, Form, ListGroup} from "react-bootstrap";

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
}

render() {
      return (
        <Container>
        <h3>ToDo</h3>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label >¿Qué se necesita hacer?</Form.Label>
                <Form.Control
                    onChange={this.handleChange}
                    value={this.state.text}
                    placeholder="Tarea ..."
                ></Form.Control>
            </Form.Group>
          <Button variant="primary" type="submit">Añadir #{this.state.items.length+1}</Button>
          <h1></h1>
          <h4>Tareas pendientes</h4>
        <TodoList items={this.state.items} />
          </Form> 
        </Container>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });   
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    
    }
  }
  class TodoList extends React.Component {
    render() {
      return (
          
        <ListGroup as="ol" numbered>
        {this.props.items.map(item => (
          <ListGroup.Item as="li" action variant="light" key={item.id}>{item.text}</ListGroup.Item>
        ))}
      </ListGroup>
  
      );
    }
}

export default TodoApp;