export default class PersonItem {
  constructor(person) {
    this.personInfo = person;
    this.element = document.createElement('person-item');
    this.element.innerHTML = `
      <span class="person__name"></span> -
      <span class="person__age"></span>`;
  }

  /**
   * Take current data for this component
   * Fill in the element with the updated data
   */
  render() {
    this.element.querySelector('.person__name').innerText = this.personInfo.name;
    this.element.querySelector('.person__age').innerText = this.personInfo.age;
  }
}
