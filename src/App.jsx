// import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
// import SearchBox from './components/SearchBox/SearchBox';
// import styles from './App.module.css';

// const App = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Phonebook</h1>
//       <ContactForm />
//       <h2 className={styles.title}>Contacts</h2>
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// };

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
