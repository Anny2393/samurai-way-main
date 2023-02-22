import React from 'react';
import stile from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={stile.posts}>
                <Post message='Hi, how are you' likes='23'/>
                <Post message='It is my first post' likes='15'/>
            </div>
        </div>
    );
}

export default MyPosts;