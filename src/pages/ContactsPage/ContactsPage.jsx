import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
