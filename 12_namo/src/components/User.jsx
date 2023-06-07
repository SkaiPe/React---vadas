import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return <div>User {user && user.name}</div>;
};
export default User;
