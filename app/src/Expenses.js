import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Container, Input, Button, Label, Form, FormGroup } from "reactstrap";
import AppNav from "./AppNav";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

class Expenses extends Component {
  state = {
    date: new Date(),
    isLoading: true,
    expenses: [],
    categories: []
  };

  async componentDidMount() {
    const respose = await fetch("/api/categories");
    const body = await respose.json();
    this.setState({categories: body, isLoading: false });
  }

  render() {
    const title = <h3>Adding expense</h3>;
    const { categories, isLoading } = this.state;

    if (isLoading) return (<div>Loading ...</div>)

    let optionList = categories.map((category) => (
        <option id={category.id}>{category.name}</option>
      ))

    return (
      <div>
        <AppNav />
        <Container>
          {title}
          <Form>
            <FormGroup>
              <label for="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={this.handleChange}
              ></input>
            </FormGroup>

            <FormGroup>
              <label for="category">Category</label>
              <select>
                  {optionList}
              </select>
            
            </FormGroup>

            <FormGroup>
              <label for="Date">Expense date</label>
              <DatePicker
                selected={this.state.date}
                onChange={this.handleChange}
              ></DatePicker>
            </FormGroup>

            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/categories">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Expenses;
