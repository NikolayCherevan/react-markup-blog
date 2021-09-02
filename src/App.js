import React from 'react';
import Home from './pages/Home.jsx'

import {
    HashRouter
} from "react-router-dom";
import './App.scss'
function App() {
    return (
        <HashRouter>
            <Home/>
        </HashRouter>
    );
}

export default App;
