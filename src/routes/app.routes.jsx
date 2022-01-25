import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Customers from '../pages/customers/Customers';

const AppRoutes = () => {
    return(
        <Routes path="/dashboard">
            <Route index element={<Dashboard/>}/>
            <Route path="customers" element={<Customers/>}/>
        </Routes>
    );
}

export default AppRoutes;