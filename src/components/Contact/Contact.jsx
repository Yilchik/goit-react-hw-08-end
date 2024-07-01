import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={css.container}>
      <div className={css.card}>
        <p>
          <RiUser3Fill className={css.myIcon} size={20} />
          {contact.name}
        </p>
        <p>
          <BsTelephoneFill className={css.myIcon} size={20} />
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
