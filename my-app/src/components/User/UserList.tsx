import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { User, createUserApi, fetchAllUsers } from "../../services/UserService";
import CreateUser from "./CreateUser";
import { DisplayBoard } from "./DisplayBoard";

import "./User.scss";
import { Users } from "./Users";

export const UserList = () => {
  const initialUser: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  const [user, setUser] = useState<User>(initialUser);
  const [users, setUsers] = useState<User[]>([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "firstName") {
      user.firstName = e.target.value;
    } else if (e.target.name === "lastName") {
      user.lastName = e.target.value;
    } else if (e.target.name === "email") {
      user.email = e.target.value;
    }
    setUser(user);
  };

  const createUser = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    createUserApi(user).then((response) => {
      console.log(response);
      setNumberOfUsers(numberOfUsers + 1);
    });
  };
  const getAllUsers = () => {
    fetchAllUsers().then((users) => {
      console.log(users);
      setUsers(users);
      setNumberOfUsers(users.length);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, [numberOfUsers]);

  return (
    <Container fluid>
      <div className="row">
        <div className="col-md-8">
          <CreateUser
            onChangeForm={onChangeForm}
            createUser={createUser}
          ></CreateUser>
        </div>
        <div className="col-md-4">
          <DisplayBoard
            numberOfUsers={numberOfUsers}
            getAllUsers={getAllUsers}
          ></DisplayBoard>
        </div>
        <div className="col-md-12 mt-4">
          <Users users={users}></Users>
        </div>
      </div>
    </Container>
  );
};
