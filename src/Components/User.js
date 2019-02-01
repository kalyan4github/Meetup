import React from "react";
import { Button, Form } from "semantic-ui-react";

class User extends React.Component {
  render() {
    const { firstName, lastName, designation } = this.props.location.state;
    return (
      <Form onSubmit={this.onUserAdd}>
        <Form.Field width={3}>
          <label>First Name</label>
          <input
            placeholder="First Name"
            defaultValue={firstName}
            onBlur={this.onFirstNameBlur}
          />
        </Form.Field>
        <Form.Field width={3}>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            defaultValue={lastName}
            onBlur={this.onLastNameBlur}
          />
        </Form.Field>
        <Form.Field width={3}>
          <label>Designation</label>
          <input
            placeholder="Designation"
            defaultValue={designation}
            onBlur={this.onLastNameBlur}
          />
        </Form.Field>
        <Form.Field width={3}>
          <Button type="submit">Update</Button>
        </Form.Field>
      </Form>
    );
  }
}

export default User;
