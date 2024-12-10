import "./NavigationMenu.scss";

import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import { NavLink} from "react-router-dom";

export const NavigationMenu = () => {

  return (
    <div className="navigation-menu">
      <ul className="navigation-menu__list list-reset">
        <li className="navigation-menu__item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <HomeIcon />
          </NavLink>
        </li>
        <li className="navigation-menu__item">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <AccountCircleIcon />
          </NavLink>
        </li>
        <li className="navigation-menu__item">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <CodeIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
