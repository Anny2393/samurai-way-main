import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Navbar from "./Components/Navbar";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Profile/>
            <Navbar/>
        </div>);
}

export default App;
