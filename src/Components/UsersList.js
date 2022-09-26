import React from "react";
import "./UsersList.css";

const UsersLists = (props) => {
  return (
    <div className="users">
      <ul>
        {props?.usersArray?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersLists;
