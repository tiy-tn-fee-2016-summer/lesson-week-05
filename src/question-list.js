class QuestionListItem {
  constructor(data, list) {
    this.data = data;
    this.list = list;

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
    this.setupEvents();
  }

  setupEvents() {
    // selectTheH3
    this.element.querySelector('.question-card__delete').addEventListener('click', () => {
      // Ask user if they are sure
      if (confirm('Are you sure you want to delete this')) {
        this.list.remove(this.data._id);
      }
    });
  }

  render() {
    this.element.querySelector('.question-card__title').innerHTML = this.data.value;
  }
}

export default class QuestionList {
  constructor(element, app) {
    this.element = element;
    this.app = app;
    this.data = [];
  }

  setData(data) {
    this.data = data;
  }

  remove(id) {
    this.app.remove(id);
  }

  render() {
    this.element.innerHTML = '';

    this.data.map((question) => new QuestionListItem(question, this))
      .forEach((questionItem) => {
        questionItem.render();

        this.element.appendChild(questionItem.element);
      });
  }
}
