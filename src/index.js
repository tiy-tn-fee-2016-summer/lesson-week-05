import PersonItem from 'create-person-element';

export default function (listEl) {
  const people = [
    {
      name: 'Carmine Braun',
      age: 6,
    },
    {
      name: 'Gardner Hansen',
      age: 56,
    },
    {
      name: 'Robert Wuckert',
      age: 21,
    },
    {
      name: 'Damon Barton',
      age: 31,
    },
    {
      name: 'Vaughn Will',
      age: 39,
    },
  ];


  // Find the oldest object in "people" and put the name into the "h2" element on the page

  const renderPersonItem = (person) => {
    const item = new PersonItem(person);
    item.render();

    return item;
  };

  const putInList = (personItem) => {
    listEl.appendChild(personItem.element);
  };

  people.map(renderPersonItem)
    .forEach(putInList);

  function getAge(person) {
    return person.age;
  }

  const onlyAges = people.map(getAge);

  console.log(onlyAges);

  function whosOlder(a, b) {
    if (a.age > b.age) {
      return a;
    }

    return b;
  }

  const oldestPerson = people.reduce(whosOlder);

  // Fill in h2 with the oldest person's name!
  const elm = document.querySelector('h2');
  elm.innerText = oldestPerson.name;

  function olderPerson(person) {
    return {
      name: person.name,
      age: person.age + 1,
    };
  }

  function mapOlder(snowball, current) {
    return snowball.concat([olderPerson(current)]);
  }

  console.log('next year', people.reduce(mapOlder, []));
  console.log('next year but map', people.map(olderPerson));
}
