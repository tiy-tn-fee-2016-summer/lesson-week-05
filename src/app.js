import getOptionData from 'get-option-data';
import LunchOptionItem from 'lunch-option-item';

export default class App {
  constructor(element) {
    this.element = element;
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
    this.data.forEach((singleOptionData) => {
      const optionItem = new LunchOptionItem(singleOptionData);
      optionItem.render();

      this.element.querySelector('.lunch-options').appendChild(optionItem.element);
    });
  }
}
