const {
  faker
} = require('@faker-js/faker')

module.exports = () => {
  const data = {
    people: [{
        id: 1,
        name: 'Vítor Paes',
        avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQEYxUnQdhdY1A/profile-displayphoto-shrink_200_200/0/1616955564340?e=1650499200&v=beta&t=08EjN8EB2qWzF_SxZ09BFbezOBCmOsglHWRBsnE06eE',
        status: 1,
        age: 22,
      }, {
        id: 2,
        name: 'Neymar Júnior',
        avatar: 'https://i.ytimg.com/vi/n344kEyPcsE/maxresdefault.jpg',
        status: 3,
        age: 30,
      },
      {
        id: 3,
        name: 'Abraham Lincoln',
        avatar: 'https://www.infoescola.com/wp-content/uploads/2008/07/Lincoln.jpg',
        status: 3,
        age: 213,
      },
      {
        id: 4,
        name: 'The rock',
        avatar: 'https://walkingdeadbr.com/wp-content/uploads/2019/08/the-walking-dead-artista-transforma-the-rock-mercer-001.jpg',
        status: 2,
        age: 49,
      },
    ],
  }

  for (let id = 5; id <= 50; id++) {
    data.people.push({
      id,
      name: `${faker.name.findName()}`,
      avatar: `${faker.image.avatar()}`,
      status: faker.datatype.number({
        min: 1,
        max: 3,
      }),
      age: faker.datatype.number({
        min: 2,
        max: 60,
      }),
    })
  }

  return data
}