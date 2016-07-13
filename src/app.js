import getOptionData from 'get-option-data';

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
    this.data.forEach((option) => {
      const listItem = document.createElement('li');

      this.element.querySelector('.lunch-options').appendChild(listItem);
      listItem.innerHTML = `
        <span class="lunch-option__restaurant"></span>
        suggested by:
        <span class="lunch-option__name"></span>`;
      listItem.querySelector('.lunch-option__restaurant').innerText = option.restaurant;
      listItem.querySelector('.lunch-option__name').innerText = option.name;
    });
  }
}
