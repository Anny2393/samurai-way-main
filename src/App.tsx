import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Profile/>
            <Navbar/>
        </div>);
}

export default App;
