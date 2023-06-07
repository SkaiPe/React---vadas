import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="users">
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/user/${user.id}`}>
            <h3>{user.name}</h3>
          </Link>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
