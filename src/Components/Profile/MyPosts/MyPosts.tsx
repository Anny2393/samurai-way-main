import React from 'react';
import style from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={style.content}>
            <Post message = "Hi, how are you?"
                  like = "15"/>
            <Post message = "It's my first post"
                  like = "20"/>
        </div>
    </div>
}
