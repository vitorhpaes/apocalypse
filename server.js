const {
  faker
} = require('@faker-js/faker')

module.exports = () => {
  const data = {
    people: [{
        id: 1,
        name: 'Vítor Paes',
        description: faker.lorem.sentence(10),
        avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQEYxUnQdhdY1A/profile-displayphoto-shrink_200_200/0/1616955564340?e=1650499200&v=beta&t=08EjN8EB2qWzF_SxZ09BFbezOBCmOsglHWRBsnE06eE',
        status: 1,
        age: 22,
        address: {
          zipCode: faker.address.zipCode('#####-###'),
          street: faker.address.streetName(),
          city: faker.address.county(),
          state: faker.address.state(),
          country: faker.address.country()
        },
        totalKills: faker.datatype.number({
          max: 3000
        }),
        infectionDate: null,
        deathDate: null
      }, {
        id: 2,
        name: 'Neymar Júnior',
        description: faker.lorem.sentence(10),
        avatar: 'https://i.ytimg.com/vi/n344kEyPcsE/maxresdefault.jpg',
        status: 3,
        age: 30,
        address: {
          zipCode: faker.address.zipCode('#####-###'),
          street: faker.address.streetName(),
          city: faker.address.county(),
          state: faker.address.state(),
          country: faker.address.country()
        },
        totalKills: faker.datatype.number({
          max: 3000
        }),
        infectionDate: null,
        deathDate: null
      },
      {
        id: 3,
        name: 'Abraham Lincoln',
        description: faker.lorem.sentence(10),
        avatar: 'https://www.infoescola.com/wp-content/uploads/2008/07/Lincoln.jpg',
        status: 3,
        age: 213,
        address: {
          zipCode: faker.address.zipCode('#####-###'),
          street: faker.address.streetName(),
          city: faker.address.county(),
          state: faker.address.state(),
          country: faker.address.country()
        },
        totalKills: faker.datatype.number({
          max: 3000
        }),
        infectionDate: faker.date.past(213),
        deathDate: null
      },
      {
        id: 4,
        name: 'The rock',
        description: faker.lorem.sentence(10),
        avatar: 'https://walkingdeadbr.com/wp-content/uploads/2019/08/the-walking-dead-artista-transforma-the-rock-mercer-001.jpg',
        status: 2,
        age: 49,
        address: {
          zipCode: faker.address.zipCode('#####-###'),
          street: faker.address.streetName(),
          city: faker.address.county(),
          state: faker.address.state(),
          country: faker.address.country()
        },
        totalKills: faker.datatype.number({
          max: 3000
        }),
        infectionDate: null,
        deathDate: null
      },
    ],
  }

  for (let id = 5; id <= 50; id++) {
    const newPerson = {
      id,
      name: faker.name.findName(),
      description: faker.lorem.sentence(10),
      avatar: `${faker.image.avatar()}`,
      status: faker.datatype.number({
        min: 1,
        max: 4,
      }),
      age: faker.datatype.number({
        min: 2,
        max: 60,
      }),
      address: {
        zipCode: faker.address.zipCode('#####-###'),
        street: faker.address.streetName(),
        city: faker.address.county(),
        state: faker.address.state(),
        country: faker.address.country()
      },
      totalKills: faker.datatype.number({
        max: 3000
      }),
      infectionDate: null,
      deathDate: null
    }
    if (newPerson.status === 3) newPerson.infectionDate = faker.date.past(newPerson.age)
    if (newPerson.status === 4) newPerson.deathDate = faker.date.past(newPerson.age)
    data.people.push(newPerson)
  }

  return data
}