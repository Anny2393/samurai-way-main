import React from 'react';
import stile from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={stile.content}>
        <div>
            <img
                src='https://media.istockphoto.com/id/1183534384/sv/vektor/landskap-av-dimmiga-berg-och-barrskog-akvarell-illustration.jpg?s=612x612&w=0&k=20&c=msXh4VX7eD4zgal9LfG4DX5P-ANQcrzT1FF7gypiQcA='/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;