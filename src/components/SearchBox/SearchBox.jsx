import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import {
  selectNameFilter,
  selectPhoneFilter,
} from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const phoneFilter = useSelector(selectPhoneFilter);

  const handleNameChange = (e) => {
    disp;
    dispatch(changeFilter({ type: "name", value: e.target.value }));
  };

  const handlePhoneChange = (e) => {
    dispatc;
    dispatch(changeFilter({ type: "phone", value: e.target.value }));
  };

  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={nameFilter}
        onChange={handleNameChange}
      />
      <p className={css.label}>Find contacts by number</p>
      <input
        className={css.input}
        type="text"
        value={phoneFilter}
        onChange={handlePhoneChange}
      />
    </div>
  );
};

export default SearchBox;
