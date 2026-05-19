
import PostList from "../components/PostList";
import Modal from "../components/Modal";
import { Outlet } from "react-router-dom";
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
