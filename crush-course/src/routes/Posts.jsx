import { Outlet } from "react-router-dom";

import PostList from "../components/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch(
    "https://effective-eureka-xqg9g64qwgpfv65w-8080.app.github.dev/posts"
  );
  const resData = await response.json();
  return resData.posts;
}
