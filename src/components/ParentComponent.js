import Form from "./Form";
import React, { useState } from "react";

const ParentComponent = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <Form
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
    />
  );
};

export default ParentComponent;
