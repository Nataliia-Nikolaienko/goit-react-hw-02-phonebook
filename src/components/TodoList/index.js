import Todo from 'components/Todo';
import css from '../ContactForm.module.css';

const TodoList = ({ contacts, deleteTodo }) => {
  return (
    <ul className={css.todoList}>
      {contacts.map(contact => (
        <Todo
          key={contact.id}
          contact={contact}
          deleteTodo={() => deleteTodo(contact.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
