import PokeCard from 'card';

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
          // Make a new PokeCard
          const card = new PokeCard(pokemon.name, pokemon.url);

          // Put the PokeCard where the user can see it...
          this.appElement.querySelector('.pokemon-list').appendChild(card.element);

          // Tell the PokeCard to get some data!
          card.getData()
            // Tell the PokeCard to fill in... AFTER the data loads
            .then(() => card.render());
        });
      });
  }
}
