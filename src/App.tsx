import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {MyPosts} from "./Components/Profile/MyPosts/MyPosts";
import {Profile} from "./Components/Profile/MyPosts/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import style from "./Components/Dialogs/Dialogs.module.css";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Dialogs/>
            </div>

            {/*<Profile/>*/}
        </div>
    );
}

export default App;
