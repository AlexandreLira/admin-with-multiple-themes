import React from 'react';
import Routes from '../../routes/routes';
import Sidebar from '../sidebar/Sidebar';
import { BrowserRouter } from "react-router-dom";
import './layout.css';
import TopNav from '../topnav/TopNav';

const Layout = () => {

    return(
        <BrowserRouter>
            <div className="layout">
                <Sidebar/>
                <div className="layout_content">
                    <TopNav/>
                    <div className="layout_content-main">
                        <Routes/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout;