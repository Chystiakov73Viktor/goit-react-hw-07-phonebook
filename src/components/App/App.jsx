import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsValue,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import css from './App.module.css';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/contactsOperations';
import { Loader } from 'Loader/Loader';

export function App() {
  const contacts = useSelector(selectContactsValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.tatel}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.tatel}>Contacts</h2>
      {error !== null && <p className="textError">{error}</p>}
      {isLoading && <Loader />}
      {contacts.length !== 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
