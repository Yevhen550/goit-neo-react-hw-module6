import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.card}>
      <div className={s.cardInfo}>
        <p className={s.name}>
          <FaUser className={s.icon} /> {contact.name}
        </p>
        <p className={s.number}>
          <FaPhoneAlt className={s.icon} /> {contact.number}
        </p>
      </div>
      <button
        className={s.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
