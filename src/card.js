export default class PokeCard {
  constructor(name, url) {
    this.url = url;
    this.name = name;

    this.element = document.createElement('div');
    this.element.classList.add('pokemon-list__item');
    this.element.innerHTML = `
      <figure class="pokemon-card">
        <div class="pic-frame">
          <img src="" alt="" class="pic-frame__pic">
        </div>
        <h3 class="pokemon-card__name"></h3>
      </figure>
      <div class="pokemon-overlay">
        <div class="pokemon-overlay__card">
          <ul class="poke-stats"></ul>
        </div>
      </div>`;

    this.selectors = {
      card: this.element.querySelector('.pokemon-card'),
      name: this.element.querySelector('.pokemon-card__name'),
      img: this.element.querySelector('.pic-frame__pic'),
      stats: this.element.querySelector('.poke-stats'),
      overlay: this.element.querySelector('.pokemon-overlay'),
    };

    this.setupListners();
  }

  setupListners() {
    this.selectors.card.addEventListener('click', () => {
      this.selectors.overlay.classList.add('pokemon-overlay--active');
    });

    this.selectors.overlay.addEventListener('click', () => {
      this.selectors.overlay.classList.remove('pokemon-overlay--active');
    });
  }

  getData() {
    return fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
      });
  }

  render() {
    this.selectors.name.innerText = this.data.name;
    this.selectors.img.src = this.data.sprites.front_default;

    this.data.stats.forEach((stat) => {
      const name = stat.stat.name;
      const value = stat.base_stat;

      const newListItem = document.createElement('li');
      newListItem.classList.add('poke-stats__item');
      newListItem.innerHTML = `<strong>${name}:</strong> ${value}`;

      this.selectors.stats.appendChild(newListItem);
    });
  }
}
