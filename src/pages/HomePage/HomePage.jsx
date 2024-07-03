import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <p>Hallo</p>
      ) : (
        <h1>
          Please, <span>log in</span> or <span>register</span>!
        </h1>
      )}
    </div>
  );
};

export default HomePage;
