import React from "react";

import './NavigationMenu.scss';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from "react-router-dom";

export const NavigationMenu = () => {

    const navigate = useNavigate();

    return (
        <div className="navigation-menu">
            <ul className="navigation-menu__list list-reset">
                <li onClick={() => navigate('/')} className="navigation-menu__item"><HomeIcon /></li>
                <li onClick={() => navigate('/profile')} className="navigation-menu__item"><AccountCircleIcon /></li>
                <li onClick={() => navigate('/projects')} className="navigation-menu__item"><CodeIcon /> </li>
                <li className="navigation-menu__item"><WhatshotIcon /></li>
                <li className="navigation-menu__item"><GitHubIcon /></li>
            </ul>
        </div>
    )
}
