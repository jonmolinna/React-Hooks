import React, { useEffect, memo } from "react";
import Item from "./Item";

const List = memo(({ users, handleDelete }) => {
  useEffect(() => {
    console.log("List Render");
  });

  return (
    <ul>
      {users.map((user) => (
        <Item key={user.id} user={user} handleDelete={handleDelete} />
      ))}
    </ul>
  );
});

export default List;
