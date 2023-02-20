import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://i.pinimg.com/originals/e7/eb/b9/e7ebb9c19633adddc0f06a7869f9c35b.png'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Massages</a>
                </div><div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
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
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                    </div>
                </div>
        </div>);
}

export default App;
