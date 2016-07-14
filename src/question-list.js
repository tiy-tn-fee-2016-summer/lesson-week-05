export default class QuestionList {
  constructor(element) {
    this.element = element;
    this.data = [];
  }

  setData(data) {
    this.data = data;
  }

  render() {
    this.data.map((question) => {
      const el = document.createElement('li');
      el.innerHTML = question.value;

      return el;
    }).forEach((alsoEl) => {
      this.element.appendChild(alsoEl);
    });
  }
}
