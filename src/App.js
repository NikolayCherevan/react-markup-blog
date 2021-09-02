import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home.jsx'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter,
    useLocation
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
