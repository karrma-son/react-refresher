import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";
import Modal from "./components/Modal";
function App() {

  const [showModal, setShowModal] = useState(true);

  
    function hideModalHandler(e) {
        setShowModal(false);
    }


    function showModalHandler(e) {
        setShowModal(true);
    }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>

        <PostList 
        isPosting={showModal} 
        onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}



export default App;
