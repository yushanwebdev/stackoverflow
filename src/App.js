import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function App() {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    nameL: "",
    email: "",
    contact: "",
    address: "",
    date: "",
  });

  const onChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setSelectedUser({
      ...selectedUser,
      [property]: value,
    });
  };

  return (
    <React.Fragment>
      <Form>
        <FormGroup>
          <Label>FirstName</Label>
          <Input
            type="text"
            name="name"
            value={selectedUser.name}
            onChange={onChange}
            placeholder="enter first name"
          ></Input>
          <Label>Last Name:</Label>
          <Input
            type="text"
            name="nameL"
            value={selectedUser.nameL}
            onChange={onChange}
            placeholder="enter your Last name"
          ></Input>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={selectedUser.email}
            onChange={onChange}
            placeholder="Email Address"
          ></Input>
          <Label>Contact Number:</Label>
          <Input
            type="number"
            name="contact"
            value={selectedUser.contact}
            onChange={onChange}
            placeholder="Contact"
          ></Input>
          <Label>Address:</Label>
          <Input
            type="text"
            name="address"
            value={selectedUser.address}
            onChange={onChange}
            placeholder="enter your Address"
          ></Input>
          <Label>Date</Label>
          <Input
            type="date"
            name="date"
            value={selectedUser.date}
            onChange={onChange}
            placeholder="enter date employed"
          ></Input>
        </FormGroup>
        <Button type="submit" className="btn btn-info">
          Edit{" "}
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default App;
