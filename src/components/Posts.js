import React from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div
      style={{
        padding: "3rem 10rem",
      }}
    >
      <h1>
        Blog Posts
        <button
          className="btn btn-primary float-right"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Post
        </button>
      </h1>

      <Modal />

      <div className="row">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
