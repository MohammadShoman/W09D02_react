import React, { useState, useEffect } from "react";

// jsx
const App = () => {
  const [posts, setPosts] = useState([
    { userId: 1, id: 150, title: "subject", body: "nothing" },
    { userId: 2, id: 200, title: "react", body: "nothing" },
  ]);
  const newPosts = posts.map((elem, i) => {
    return (
      <p key={i}>
        title:{elem.title}<br/>
        <span>body:{elem.body}</span>
      </p>
    );
  });

  return (
    <>
      <div>
        <h1>Blog App</h1>
      </div>
      <div>{posts && newPosts}</div>
    </>
  );
};

export default App;
