export default class App {
  constructor(appElement) {
    this.appElement = appElement;
  }

  start() {
    // I want to get an array of a bunch of Pokemon from the API
    fetch('https://pokeapi.co/api/v2/pokemon')
      // Turing string info from server into Javascript Objects
      .then((res) => res.json())
      .then((data) => {
        // What should we do with dez Pokemon?
        data.results.forEach((pokemon) => {
          console.log(pokemon);
        });
      });
  }
}
