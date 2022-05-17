import React, { useState, useEffect, useCallback } from "react";

import getPosts from "./helpers/getPosts";
import getUser from "./helpers/getUser";

// const initialUser = {
//   id: 1,
//   name: "Kendra",
//   email: "contreras123@gmail.com",
// };

// const initialPosts = [
//   { id: 1, title: "Post 1" },
//   { id: 2, title: "Post 2" },
// ];

// Usa useCallback en la funciones que son dependientes de useEffect, este hook hace que la funcion
// no se ejecute cuando se renderize el componente

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = () => {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  };

  useEffect(() => {
    updateUser();
  }, []);

  const updatePosts = useCallback(() => {
    getPosts(user.id).then((newPosts) => {
      setPosts(newPosts);
    });
  }, [user?.id]);

  useEffect(() => {
    if (user?.id) {
      updatePosts();
    }
  }, [user, updatePosts]);

  return (
    <div>
      <h2>Fetch Api</h2>
      <button onClick={updateUser}>Another User</button>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>User id: {user.id}</p>
      <ul>
        {posts.length > 0 &&
          posts.map((post) => <li key={post?.id}>{post?.name}</li>)}
      </ul>
    </div>
  );
};

export default FetchCard;
