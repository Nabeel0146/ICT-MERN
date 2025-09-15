let people = [
    {
      name: 'Alice',
      age: 25,
      place: {
        city: 'Wonderland',
        country: 'Fairyland'
      }
    },
    {
      name: 'Bob',
      age: 30,
      place: {
        city: 'TechCity',
        country: 'Geekland'
      }
    },
    {
      name: 'Charlie',
      age: 28,
      place: {
        city: 'Artsville',
        country: 'Createland'
      }
    }
  ];

  console.log(people[0].place.country);
  people[1].age = 22;
  console.log(people[1].age);