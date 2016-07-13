const template = `
  <span class="lunch-option__restaurant"></span>
  suggested by:
  <span class="lunch-option__name"></span>`;

export default class LunchOptionItem {
  constructor(data) {
    this.data = data;

    this.element = document.createElement('li');
    this.element.innerHTML = template;

    this.selectors = {
      restaurant: this.element.querySelector('.lunch-option__restaurant'),
      name: this.element.querySelector('.lunch-option__name'),
    };
  }

  render() {
    this.selectors.restaurant.innerText = this.data.restaurant;
    this.selectors.name.innerText = this.data.name;
  }
}
