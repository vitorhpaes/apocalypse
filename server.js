const {
  faker
} = require('@faker-js/faker')

module.exports = () => {
  const data = {
    people: [],
  }

  for (let id = 1; id <= 50; id++) {
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