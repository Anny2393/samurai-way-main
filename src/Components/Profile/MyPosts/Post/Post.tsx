import React from 'react';
import style from './Post.module.css';

type PostPropsType = {
    message: string
    like: string
}

export const Post = (props: PostPropsType) => {
    return <div className={style.item}>
        <img src='https://animals.pibig.info/uploads/posts/2023-04/1681195047_animals-pibig-info-p-kotik-s-ulibkoi-zhivotnie-instagram-1.jpg'/>
        {props.message}
        <div>
            <span>like {props.like} </span>
        </div>
    </div>
}
