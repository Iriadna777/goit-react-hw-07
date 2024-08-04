import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
