import React, { useState } from "react";

import "./App.css";

import AddUser from "./Components/Users/AddUser";

import UsersList from "./Components/Users/UserList";

function App() {
  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevuserlist) => {
      return [
        ...prevuserlist,
        { name: uName, age: uAge, id: new Date().getTime() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
