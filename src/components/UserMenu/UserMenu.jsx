import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span>Welcome, {user.name}</span>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default UserMenu;
