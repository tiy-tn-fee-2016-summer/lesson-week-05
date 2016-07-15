import QuestionList from 'question-list';

export default class App {
  constructor(element) {
    this.element = element;
    this.data = [];

    const qListEl = element.querySelector('.question-list');
    this.questionList = new QuestionList(qListEl, this);
  }

  start() {
    this.getData()
      .then(() => {
        this.render();
      });
  }

  getData() {
    return fetch('http://tiny-tn.herokuapp.com/collections/questions')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
      });
  }

  remove(id) {
    // Tell the server to update
    fetch(`http://tiny-tn.herokuapp.com/collections/questions/${id}`, {
      method: 'DELETE',
    });

    // Update our app data
    this.data = this.data.filter((question) => question._id !== id);
    this.render();
  }

  render() {
    this.questionList.setData(this.data);
    this.questionList.render();
  }
}
