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

  let oldestPerson = people[0];

  for (let i = 0; i < people.length; i++) {
    const item = new PersonItem(people[i]);
    item.render();

    listEl.appendChild(item.element);
  }

  // Loop through our people
  for (let i = 0; i < people.length; i++) {
    // Check to see if the current looped person is older than the oldest person so far
    if (people[i].age > oldestPerson.age) {
      // Change the oldest person we've found
      oldestPerson = people[i];
    }

    console.log('i: ', i, 'oldest: ', oldestPerson);
  }

  // Fill in h2 with the oldest person's name!
  const elm = document.querySelector('h2');
  elm.innerText = oldestPerson.name;
}
