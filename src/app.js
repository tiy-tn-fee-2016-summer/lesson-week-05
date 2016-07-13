import getOptionData from 'get-option-data';
import LunchOptionItem from 'lunch-option-item';
import parseJson from 'parse-json';

export default class App {
  constructor(element) {
    this.element = element;

    this.setupForm();
  }

  setupForm() {
    const nameInput = this.element.querySelector('.form-field__input--name');
    const restaurantInput = this.element.querySelector('.form-field__input--restaurant');
    const form = this.element.querySelector('.option-form');

    form.addEventListener('submit', (ev) => {
      const name = nameInput.value;
      const restaurant = restaurantInput.value;

      ev.preventDefault();

      fetch('http://tiny-tn.herokuapp.com/collections/lunch', {
        method: 'POST',
        body: JSON.stringify({ name, restaurant }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(parseJson)
      .then((newSuggestion) => {
        this.data = [...this.data, newSuggestion];
        this.render();
      });
    });
  }

  // Gets data for all suggestions as an array
  // then stores this data on the App instance
  getOptions() {
    return getOptionData()
      .then((data) => {
        this.data = data;
      });
  }

  // Take current information from data
  // to shove it into element
  render() {
    this.element.querySelector('.lunch-options').innerHTML = '';

    this.data.forEach((singleOptionData) => {
      const optionItem = new LunchOptionItem(singleOptionData);
      optionItem.render();

      this.element.querySelector('.lunch-options').appendChild(optionItem.element);
    });
  }
}
