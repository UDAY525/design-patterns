import React from "react";
import { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, age);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="Name"
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="Age"
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input type="submit" name="Submit" />
    </form>
  );
};

export default ControlledComponent;
