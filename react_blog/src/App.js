import React, { useState, useEffect } from "react";

// jsx
const App = () => {
  const [posts, setPosts] = useState([
    { userId: 1, id: 150, title: "subject", body: "nothing" },
    { userId: 2, id: 200, title: "react", body: "nothing" },
  ]);

  const [userId,setUserId]=useState(1)
  const [id,setId]=useState(101)
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")
  const newPosts = posts.map((elem, i) => {
    return (
      <p key={i}>
        title:{elem.title}<br/>
        <span>body:{elem.body}</span>
      </p>
    );
  });

const addNewPost=()=>{
  setPosts([...posts, {userId,id,title,body}])
}

  return (
    <>
      <div>
        <h1>Blog App</h1>
      </div>
      <div>{posts && newPosts}
      <button onClick={addNewPost}>OK</button>
      <input type="text" placeholder="userId" name="userId" onChange={(e)=>{
        setUserId(e.target.value)
      }}></input>
      <input type="text" placeholder="Id" name="Id" onChange={(e)=>{
        setId(e.target.value)
      }}></input>
      <input type="text" placeholder="title" name="title" onChange={(e)=>{
        setTitle(e.target.value)
      }}></input>
      <input type="text" placeholder="body" name="body" onChange={(e)=>{
        setBody(e.target.value)
      }}></input>
      </div>
    </>
  );
};

export default App;
