import React from 'react';
import stile from './Post.module.css';

export type PostType = {
    message: string
    likes: string
};

const Post = (props:PostType) => {

     return (
        <div className={stile.item}>
            <img src='https://avatars.dzeninfra.ru/get-zen_doc/3446134/pub_5ef2028bfd9c6317c9588cc3_5ef202e6c0a8b817fd53b77f/scale_1200'/>
            {props.message}
            <div>
                <span>like</span> {props.likes}
            </div>
        </div>

    );
}

export default  Post;