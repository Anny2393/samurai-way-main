import React from 'react';
import style from './Profile.module.css';
import {MyPosts} from "./MyPosts";

export const Profile = () => {
    return <div>
        <div>
            <img
                src='https://png.pngtree.com/thumb_back/fh260/background/20201015/pngtree-vector-cloud-background-image_418495.jpg'/>
        </div>

        <div>
            Ava + description
        </div>
        <MyPosts/>
    </div>
}
