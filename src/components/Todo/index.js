import css from '../ContactForm.module.css';

const Todo = ({ contact, deleteTodo }) => {
  return (
    <li className={css.todoListItem}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.telefon}>{contact.number}</p>
      <button onClick={() => deleteTodo(contact.id)} className={css.btnDelete}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
