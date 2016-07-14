class QuestionListItem {
  constructor(data) {
    this.data = data;

    this.element = document.createElement('li');
    this.element.classList.add('question-list__item');
    this.element.innerHTML = `<div class="question-card">
      <h3 class="question-card__checkbox">
        <i class="fa fa-fw"></i>
      </h3>
      <h3 class="question-card__title"></h3>
      <h3 class="question-card__delete">
        <i class="fa fa-spin fa-trash"></i>
      </h3>
    </div>`;
  }

  render() {
    this.element.querySelector('.question-card__title').innerHTML = this.data.value;
  }
}

export default class QuestionList {
  constructor(element) {
    this.element = element;
    this.data = [];
  }

  setData(data) {
    this.data = data;
  }

  render() {
    // this.element.innerHTML = '';

    this.data.map((question) => new QuestionListItem(question))
      .forEach((questionItem) => {
        questionItem.render();

        this.element.appendChild(questionItem.element);
      });
  }
}
