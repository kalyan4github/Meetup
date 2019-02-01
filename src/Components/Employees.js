import React from "react";
import { Button, Table, Form } from "semantic-ui-react";

class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      employees: [
        {
          id: 1,
          firstName: "Aakash",
          lastName: "Raina",
          designation: "Frontend Engineer"
        },
        {
          id: 2,
          firstName: "Aditya",
          lastName: "Chilka",
          designation: "Frontend Engineer"
        },
        {
          id: 3,
          firstName: "Sarthak",
          lastName: "Munshi",
          designation: "FullStack Engineer"
        },
        {
          id: 4,
          firstName: "Yash",
          lastName: "Katariya",
          designation: "ML Engineer"
        }
      ]
    };

    this.firstNameRef = null;
    this.lastNameRef = null;
  }

  onUserAdd = e => {
    e.preventDefault();
    console.log("FN:", this.firstNameRef.value);
    console.log("LN:", this.lastNameRef.value);
  };

  onFirstNameBlur = e => {
    console.log("FN:", e.target.value);
  };

  onLastNameBlur = e => {
    console.log("LN:", e.target.value);
  };

  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {Object.keys(this.state.employees[0]).map((item, index) => {
                return <Table.HeaderCell key={index}>{item}</Table.HeaderCell>;
              })}
              <Table.HeaderCell />
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.employees.map(person => {
              return (
                <Table.Row key={person.id}>
                  <Table.Cell>{person.id}</Table.Cell>
                  <Table.Cell>{person.firstName}</Table.Cell>
                  <Table.Cell>{person.lastName}</Table.Cell>
                  <Table.Cell>{person.designation}</Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        console.log("View Person", person);
                      }}
                    >
                      View
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        console.log("Delete Person", person);
                      }}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <Form onSubmit={this.onUserAdd}>
          <Form.Field width={3}>
            <label>First Name</label>
            <input
              placeholder="First Name"
              ref={instance => {
                this.firstNameRef = instance;
              }}
              defaultValue={this.state.firstName}
              onBlur={this.onFirstNameBlur}
            />
          </Form.Field>
          <Form.Field width={3}>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              ref={instance => {
                this.lastNameRef = instance;
              }}
              defaultValue={this.state.lastName}
              onBlur={this.onLastNameBlur}
            />
          </Form.Field>
          <Form.Field width={3}>
            <Button type="submit">Submit</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default Employees;
