import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Content() {
  const [posts, setPosts] = useState([]);  
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

const handleIndexPosts = () => {
  axios.get('http://localhost:3000/posts.json').then(response => {
      setPosts(response.data)
    })
};

const showModal = (thePost) => {
  setCurrentPost(thePost);
  setIsPostsShowVisible(true)
}

const closeModal = () => {
  setIsPostsShowVisible(false)
}

useEffect(handleIndexPosts, [])

  return (
    <div>
      <PostsNew />
      <br />
      <br />
      <button onClick={handleIndexPosts}>get the posts from the api</button>
      <PostsIndex posts={posts} onShowPosts={showModal}/>
      <Modal show={isPostsShowVisible} onClose={closeModal}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
