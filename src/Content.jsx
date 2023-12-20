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

const handleCreatePost = (params) => {
  console.log('handling post create')
  axios.post("http://localhost:3000/posts.json", params).then(response => {
      // console.log(response.data)         
      // posts + response.data
      // posts.push(response.data)
      setPosts([...posts, response.data])
    })
}

const handleUpdatePost = (id, params) => {
  console.log('handling update post')
  axios.patch("http://localhost:3000/posts/" + id + ".json", params).then(response => {
    console.log(response.data)
    // posts array, add something to it
    // posts array, modify something that already is in it 
    // look through all the posts, find the right one, replace that with json from rails
    setPosts(
      posts.map(post => {
        if (post.id === response.data.id) {
          return response.data
        } else {
          return post
        }
      })
    )
    closeModal()
  })
}

useEffect(handleIndexPosts, [])

  return (
    <div>
      <PostsNew onCreatePost = {handleCreatePost}/>
      <br />
      <br />
      <button onClick={handleIndexPosts}>get the posts from the api</button>
      <PostsIndex posts={posts} onShowPosts={showModal}/>
      <Modal show={isPostsShowVisible} onClose={closeModal}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost}/>
      </Modal>
    </div>
  );
}
