import { useDispatch } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { registerOperation } from "../../redux/auth/operations";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const register = (userData) => {
    dispatch(registerOperation(userData));
  };

  return (
    <div>
      <h2>Register</h2>
      <br />
      <RegistrationForm submit={register} />
    </div>
  );
};

export default RegisterPage;
