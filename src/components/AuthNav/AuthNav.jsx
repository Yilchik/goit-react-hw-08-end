import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default AuthNav;
