import PropTypes from 'prop-types';
import contactlist from './ContactList.module.css';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={contactlist.list__item}>
      <p className={contactlist.text}>{name}</p>
      <p className={contactlist.text}>{number}</p>
      <button
        className={contactlist.button}
        type="button"
        id={id}
        onClick={e => {
          // eslint-disable-next-line no-lone-blocks
          {
            window.confirm('Are you sure you want to delete this contact?') &&
              onDelete(e.target.id);
          }
        }}
      >
        Delete
      </button>
    </li>
  );
};

// const confirmResult = window.confirm()
// if (confirmResult) {
//  onDelete()
// }

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export { ContactItem };
