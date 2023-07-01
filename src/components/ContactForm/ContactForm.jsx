import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ButtonSubmit, Form, Input, InputName } from './ContactForm.style';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  // Обробник зміни значень полів вводу
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  // Обробник подання форми
  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;

    onSubmit({
      id: nanoid(), // Створюємо унікальний ідентифікатор для контакту
      ...this.state, // Додаємо поля зі стану компонента до контакту
    });

    this.reset(); // Очищаємо поля після відправлення форми
  };
  // Метод для очищення полів форми
  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputName htmlFor={this.nameInputId}>
          {name && 'Name'}
          <Input
            placeholder="Enter contact name"
            id={this.nameInputId}
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputName>

        <InputName htmlFor={this.numberInputId}>
          {number && 'Number'}
          <Input
            placeholder="Enter phone number"
            id={this.numberInputId}
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputName>

        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
