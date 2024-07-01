import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <div className={css.title}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
