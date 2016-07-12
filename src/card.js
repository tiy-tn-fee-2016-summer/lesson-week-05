export default class PokeCard {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('pokemon-list__item');
    this.element.innerHTML = `
      <figure class="pokemon-card">
        <div class="pic-frame">
          <img src="http://pokeapi.co/media/sprites/pokemon/shiny/1.png" alt="" class="pic-frame__pic">
        </div>
        <h3 class="pokemon-card__name">Bulbasaur</h3>
      </figure>
      <div class="pokemon-overlay">
        <div class="pokemon-overlay__card">
          <ul class="poke-stats">
            <li class="poke-stats__item"><strong>Attack:</strong> 20</li>
            <li class="poke-stats__item"><strong>Defense:</strong> 15</li>
          </ul>
        </div>
      </div>`;
  }
}
