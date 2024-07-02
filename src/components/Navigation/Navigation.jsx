import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
