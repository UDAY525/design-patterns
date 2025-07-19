import React, { useRef } from "react";

const UncontrolledComponent = () => {
  //   const nameInputRef = React.createRef();
  //   const ageInputRef = React.createRef();
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="Name" type="text" placeholder="Name" ref={nameInputRef} />
      <input name="Age" type="number" placeholder="Age" ref={ageInputRef} />
      <input type="submit" name="Submit" />
    </form>
  );
};

export default UncontrolledComponent;
