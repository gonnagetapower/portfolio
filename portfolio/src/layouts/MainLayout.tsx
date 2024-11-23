import React from 'react';
import { Outlet } from "react-router";
import NavigationMenu from 'src/shared/ui/navigationMenu/NavigationMenu';

const MainLayout = () => {
    return (
        <div>
            <Outlet />
            <NavigationMenu />
        </div>
    )
}

export default MainLayout;