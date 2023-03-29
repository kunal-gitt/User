import React, { useState, useRef } from "react";

import Card from "../UI/Card";

import classes from "./AddUser.module.css";
import Wrapper from "../Helper/Wrapper";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const collageNameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, seterror] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCollageName = collageNameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      seterror({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      seterror({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge, enteredCollageName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collageNameInputRef.current.value = "";
  };

  const errorHandler = () => {
    seterror(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>

          <label htmlFor="Collagename">Collage name</label>
          <input id="collagename" type="text" ref={collageNameInputRef}></input>

          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>

          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
