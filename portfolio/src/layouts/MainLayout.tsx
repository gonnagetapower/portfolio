import React from 'react';
import { Outlet } from "react-router";
import {NavigationMenu} from '@shared/index.tsx';

const MainLayout = () => {
    return (
        <div>
            <Outlet />
            <NavigationMenu />
        </div>
    )
}

export default MainLayout;