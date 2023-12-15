import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "First Post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rerum saepe error voluptatibus similique, perspiciatis voluptatem reprehenderit nobis asperiores ipsum, itaque quidem accusantium tempore, repellendus quibusdam perferendis obcaecati at porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit consectetur, quidem sapiente reiciendis blanditiis dolorum. Obcaecati soluta mollitia commodi minima omnis saepe nisi optio! Voluptate exercitationem hic quae molestiae?",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Hello%21_Logo.jpg"
    },
    {
      id: 2,
      title: "Second Post",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto cum aliquid modi a est ducimus quod exercitationem laboriosam quae eius, libero maiores quasi aliquam. Repudiandae mollitia tenetur odit eligendi. Ut repellat ad, aliquam eaque placeat cupiditate architecto cumque magni omnis, quidem deserunt esse. Explicabo earum necessitatibus et incidunt modi! Neque eos veniam possimus quo beatae officia. Voluptatum, deserunt adipisci! Suscipit recusandae accusantium animi amet, exercitationem perferendis pariatur ut in eligendi sapiente doloribus non voluptatibus quod omnis aperiam consequuntur quisquam quaerat, officiis veniam. Non nihil sapiente porro voluptatum recusandae molestiae.Aliquam nam cupiditate deserunt, at iusto voluptas libero, a quaerat pariatur ipsam porro repellat non, sapiente esse! Ipsum provident impedit labore nostrum. Est ducimus nulla ea eos facere quibusdam accusantium.",
      image: "https://hips.hearstapps.com/hmg-prod/images/burger-king-cheeseburger-1666891208.jpg"
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
