import React, { useState, useEffect, useRef } from "react";
import getPost from "./helpers/getPost";

// Los componentes que se desmontan mas ocurren en los Routes, es Decir
// Cuando pasamos de un pestaña a otro pestaña muy rapido

const Card = () => {
  const [post, setPost] = useState({ title: "post1" });
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);

  const updatePost = () => {
    getPost().then((newPost) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(newPost);
          setLoading(false);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    updatePost();

    // componente dismount
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (loading) return <h1>Loading ...</h1>;

  return (
    <div>
      <h2>Card</h2>
      <p>{post.title}</p>
    </div>
  );
};

export default Card;
