import React from 'react';
import Routes from '../../routes/routes';
import Sidebar from '../sidebar/Sidebar';
import { BrowserRouter } from "react-router-dom";
import './layout.css';

const Layout = () => {

    return(
        <BrowserRouter>
            <div className="layout">
                <Sidebar/>
                <div className="layout_content">
                    <Routes/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout;