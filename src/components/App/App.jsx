import LocalStorage from '../../helpers/localStorage';

import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';

import { Component } from 'react';
import { NotificationContactList, NotificationForm } from './App.style';

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localStorageData = LocalStorage.load('contact');
    const localStorageDataLength = localStorageData.length;
    if (localStorageData && localStorageDataLength > 0) {
      this.setState({ contacts: localStorageData });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    // if (contacts !== prevState.contacts) {
    LocalStorage.save('contact', contacts);
    // }
  }

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  removeContact = contactId => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(({ id }) => id !== contactId) };
    });
  };

  addContact = (contact, actions) => {
    this.setState(prevState => {
      const isExist = prevState.contacts.find(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      );

      if (isExist) {
        alert(`${contact.name} is already in contacts.`);
        return;
      }

      actions.resetForm();
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filterContacts = this.getFilterContacts();
    const isPhonebookEmpty = contacts.length === 0;

    return (
      <Section title={'phonebook'}>
        <ContactForm onSubmit={this.addContact}>
          {isPhonebookEmpty && (
            <NotificationForm message="Add first contact!" />
          )}
        </ContactForm>

        {!isPhonebookEmpty ? (
          <Contacts
            title={'contact list'}
            contacts={filterContacts}
            value={filter}
            onChange={this.changeFilter}
            onRemoveContact={this.removeContact}
          >
            {!isPhonebookEmpty && filterContacts.length === 0 && (
              <Notification message="nothing found" />
            )}
          </Contacts>
        ) : (
          <NotificationContactList message="Your phonebook is empty." />
        )}
      </Section>
    );
  }
}
