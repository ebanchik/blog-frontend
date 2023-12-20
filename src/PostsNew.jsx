export function PostsNew(props) {
  const createPost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onCreatePost(params)
    event.target.reset()
    console.log('creating post...')
  }  
  
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={createPost}>
        <p>Title: <input name="title" type="text" /> </p>
        <p>Body: <input name="body" type="text" /> </p>
        <p>Image: <input name="image" type="text" /> </p>
        <button>New Post</button>
      </form>
    </div>
  );
}
