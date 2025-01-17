import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.nav}>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default UserMenu;
