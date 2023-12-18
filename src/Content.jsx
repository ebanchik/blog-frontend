import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from 'axios';
import { useState, useEffect } from "react";

export function Content() {
  const [posts, setPosts] = useState([]);  

const handleIndexPosts = () => {
  console.log("test, test, 123")
  axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data)
      setPosts(response.data)
    })
};

useEffect(handleIndexPosts, [])

  return (
    <div>
      <PostsNew />
      <br />
      <br />
      <button onClick={handleIndexPosts}>get the posts from the api</button>
      <PostsIndex posts={posts} />
    </div>
  );
}
