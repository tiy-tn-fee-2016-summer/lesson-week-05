import QuestionList from 'question-list';

export default class App {
  constructor(element) {
    this.element = element;
    this.data = [];

    const qListEl = element.querySelector('.question-list');
    this.questionList = new QuestionList(qListEl);
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

  render() {
    this.questionList.setData(this.data);
    this.questionList.render();
  }
}
