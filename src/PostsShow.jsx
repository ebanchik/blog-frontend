export function PostsShow(props) {  
  return (
    <div>
      <p>posts show</p>
      <p><b>title: </b>{props.post.title}</p>
      <p><b>ingredients: </b>{props.post.body}</p>
      <img src={props.post.image_url} />
    </div>
  );
}