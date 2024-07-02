import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <ul className={css.list}>
      {isLoading && !error && <Loader />}
      {error && <p>Oops, please, try again</p>}
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
