import React from 'react';
import stile from './Profile.module.css';

const Profile = () => {
    return <div className={stile.content}>
        <div>
            <img src='https://media.istockphoto.com/id/1183534384/sv/vektor/landskap-av-dimmiga-berg-och-barrskog-akvarell-illustration.jpg?s=612x612&w=0&k=20&c=msXh4VX7eD4zgal9LfG4DX5P-ANQcrzT1FF7gypiQcA='/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My post
            <div>
                New post
            </div>
            <div className={stile.posts}>
                <div className={stile.item}>
                    post 1
                </div>
                <div className={stile.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;