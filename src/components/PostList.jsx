import { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostList.module.css"

function PostList({ }) {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState([false])

    useEffect(() => {
        setIsFetching(true);
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            // if (!response.ok){
            //     throw new Error(`Oops...something went wrong: ${response.status}`)
                
            // }
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();

    }, [])

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPost) => [postData, ...existingPost]);
    }
    return (
        <>
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: "center", color: 'plum' }} >
                    <h2>No posts yet</h2>
                    <p>Start adding some</p>
                </div>
            )}
            {isFetching && <div> <p>Loading Posts...</p> </div>}
        </>
    )
}

export default PostList;