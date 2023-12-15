export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
