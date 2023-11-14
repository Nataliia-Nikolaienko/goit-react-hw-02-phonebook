import { Component } from 'react';
import ContactForm from './components/Forms/ContactForm';
import TodoList from './components/TodoList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import css from './components/ContactForm.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addTodo = newTodo => {
    const todoObj = {
      ...newTodo,
      id: nanoid(),
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, todoObj],
    }));
  };

  deleteTodo = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleTodos = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div className={css.formWrapper}>
          <h1 className={css.phonebookTitle}>Phonebook</h1>
          <ContactForm addTodo={this.addTodo} />
        </div>

        <div className={css.contactsWrapper}>
          <h2 className={css.contactsTitle}>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <TodoList contacts={visibleTodos} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;

// const isExist = this.state.contacts.map(contact => contact.name);
//     if (isExist === e.currentTarget.value) {
//       return alert(`${name} is already in contacts.`);;
//     }
