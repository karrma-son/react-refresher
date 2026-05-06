import { useState } from "react";
import Modal from "./Modal";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css"

function PostList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [showModal, setShowModal] = useState(true);

    function changeBodyHandler(e) {
        setEnteredBody(e.target.value);
    }

    function changeAuthorHandler(e) {
        setEnteredAuthor(e.target.value);
    }

    function hideModalHandler(e) {
        setShowModal(false);
    }


    return (
        <>
            {showModal ? (
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        onBodyChange={changeBodyHandler}
                        onAuthorChange={changeAuthorHandler}
                    />
                </Modal>
            ) : null}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author=" Tony" body="Gabagool" />
            </ul>
        </>
    )
}

export default PostList;